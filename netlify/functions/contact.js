exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
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
      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('SendGrid error', text);
        return { statusCode: 500, body: JSON.stringify({ error: 'SendGrid error', details: text }) };
      }

      return { statusCode: 200, body: JSON.stringify({ ok: true, message: 'Message sent via SendGrid' }) };
    } catch (err) {
      console.error('SendGrid request failed', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'SendGrid request failed' }) };
    }
  }

  // If Formspree endpoint is provided, forward to Formspree
  if (process.env.FORMSPREE_ENDPOINT) {
    try {
      const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Formspree error', text);
        return { statusCode: 500, body: JSON.stringify({ error: 'Formspree error', details: text }) };
      }
      return { statusCode: 200, body: JSON.stringify({ ok: true, message: 'Message forwarded to Formspree' }) };
    } catch (err) {
      console.error('Formspree request failed', err);
      return { statusCode: 500, body: JSON.stringify({ error: 'Formspree request failed' }) };
    }
  }

  // No mailer configured — log and return success so UX isn't blocked
  console.log('Contact submission (no mailer configured):', { name, email, message });
  return { statusCode: 200, body: JSON.stringify({ ok: true, message: 'No mailer configured. Message received and logged.' }) };
};
