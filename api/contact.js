export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // If SendGrid is configured, use it
  if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_TO_EMAIL && process.env.SENDGRID_FROM_EMAIL) {
    const payload = {
      personalizations: [{ to: [{ email: process.env.SENDGRID_TO_EMAIL }] }],
      from: { email: process.env.SENDGRID_FROM_EMAIL },
      subject: `New contact message from ${name}`,
      content: [{ type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\n\n${message}` }]
    };

    try {
      const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!r.ok) {
        const text = await r.text();
        console.error('SendGrid error', text);
        return res.status(500).json({ error: 'SendGrid error', details: text });
      }

      return res.status(200).json({ ok: true, message: 'Message sent via SendGrid' });
    } catch (err) {
      console.error('SendGrid request failed', err);
      return res.status(500).json({ error: 'SendGrid request failed' });
    }
  }

  // If Formspree endpoint is provided, forward to Formspree
  if (process.env.FORMSPREE_ENDPOINT) {
    try {
      const r = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!r.ok) {
        const text = await r.text();
        console.error('Formspree error', text);
        return res.status(500).json({ error: 'Formspree error', details: text });
      }
      return res.status(200).json({ ok: true, message: 'Message forwarded to Formspree' });
    } catch (err) {
      console.error('Formspree request failed', err);
      return res.status(500).json({ error: 'Formspree request failed' });
    }
  }

  // No mailer configured — log and return success so UX isn't blocked
  console.log('Contact submission (no mailer configured):', { name, email, message });
  return res.status(200).json({ ok: true, message: 'No mailer configured. Message received and logged.' });
}
