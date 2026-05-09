import React, { useState } from 'react';
import { BookOpen, Star, Mail, Heart, Sparkles, ChevronRight, Menu, X, Send, Quote, Camera, Image as ImageIcon, User } from 'lucide-react';

export default function AbigailBooksWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const books = [
    { title: 'Abigail ena ye Mistru Ketema', type: 'Mystery Adventure Story', emoji: '🏰', color: 'bg-blue-50', description: 'A mysterious and exciting journey where Abigail uncovers hidden secrets.' },
    { title: 'True Warriors', type: 'Fantasy Adventure Series', emoji: '⚔️', color: 'bg-orange-50', description: 'A thrilling royal adventure filled with bravery and unforgettable warriors.' },
    { title: 'Abigail from Metroburg', type: 'Adventure Story', emoji: '🏙️', color: 'bg-green-50', description: 'A fun and exciting story following Abigail through the city.' },
    { title: 'My Family', type: 'Heartwarming Book', emoji: '👨‍👩‍👧‍👦', color: 'bg-pink-50', description: 'A sweet story celebrating love, family, and togetherness.' },
  ];

  const photos = [
    { id: 1, label: 'Book Launch Day', size: 'md:col-span-2 md:row-span-2', icon: '🎉' },
    { id: 2, label: 'Writing Session', size: 'md:col-span-1 md:row-span-1', icon: '✍️' },
    { id: 3, label: 'Meeting Readers', size: 'md:col-span-1 md:row-span-2', icon: '🤝' },
    { id: 4, label: 'Award Ceremony', size: 'md:col-span-1 md:row-span-1', icon: '🏆' },
    { id: 5, label: 'Library Visit', size: 'md:col-span-2 md:row-span-1', icon: '📚' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Message sent! ✨');
      e.target.reset();
    }, 1500);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Books', href: '#books' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <div className="min-h-screen bg-[#faf9ff] text-gray-800 font-sans selection:bg-purple-200 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-2 rounded-lg text-white"><BookOpen size={24} /></div>
            <span className="font-bold text-xl tracking-tight text-purple-900">Abigail Eyob</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-purple-600 transition">{link.name}</a>
            ))}
            <a href="#contact" className="bg-purple-600 text-white px-5 py-2.5 rounded-full hover:bg-purple-700 transition shadow-md">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-purple-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-purple-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-700">{link.name}</a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-purple-600 text-white text-center py-3 rounded-xl font-bold">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-24 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <Sparkles size={16} /> <span>New Book Out Now!</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 leading-tight">
          Abigail Eyob Zekarias
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto">
          Young Author • Storyteller • Creator of Magical Adventures and Heartwarming Tales.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#books" className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">Explore My Books</a>
          <a href="#about" className="bg-white text-purple-700 border-2 border-purple-100 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all">Meet Abigail</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-tr from-purple-200 to-pink-200 rounded-[3rem] rotate-3 relative z-10 flex items-center justify-center">
              <User size={120} className="text-white opacity-50" />
            </div>
            <div className="absolute inset-0 bg-purple-100 rounded-[3rem] -rotate-3"></div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-purple-900 mb-6">About the Author ✍️</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Abigail Eyob Zekarias is a young author with a big imagination. From the bustling streets of Metroburg to the mysterious secrets of hidden cities, Abigail crafts stories that inspire courage, family love, and endless curiosity.
            </p>
            <div className="flex gap-4">
               <div className="bg-orange-50 p-4 rounded-2xl">
                 <p className="text-orange-600 font-bold text-2xl">4+</p>
                 <p className="text-gray-500 text-sm font-medium">Books Published</p>
               </div>
               <div className="bg-blue-50 p-4 rounded-2xl">
                 <p className="text-blue-600 font-bold text-2xl">Thousands</p>
                 <p className="text-gray-500 text-sm font-medium">Imaginary Worlds</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-24 px-6 bg-[#faf9ff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4 flex items-center justify-center gap-3">
              <Camera className="text-pink-500" /> Life as an Author
            </h2>
            <p className="text-gray-500">A peek behind the scenes of writing and storytelling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {photos.map((photo) => (
              <div key={photo.id} className={`${photo.size} group relative overflow-hidden rounded-[2rem] bg-white border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-500`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 group-hover:scale-110 transition-transform duration-700">
                  <span className="text-6xl mb-2">{photo.icon}</span>
                  <ImageIcon className="text-purple-100" size={32} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-bold text-xl">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section id="books" className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-purple-900 mb-12">The Library 📚</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] p-8 border border-purple-100 hover:-translate-y-3 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className={`w-20 h-20 ${book.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner`}>
                  {book.emoji}
                </div>
                <h3 className="font-bold text-xl mb-3 text-purple-900 leading-tight">{book.title}</h3>
                <p className="text-purple-600 text-xs font-bold uppercase tracking-widest mb-4">{book.type}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-500 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><Mail size={120} /></div>
          <h2 className="text-4xl font-black mb-4 text-center">Let's Connect ✉️</h2>
          <p className="text-center text-purple-100 mb-10">Have a question or want to say hi? Send me a message!</p>
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-4">
              <input required className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-purple-100 outline-none focus:ring-2 ring-white transition-all" placeholder="Your Name" />
              <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-purple-100 outline-none focus:ring-2 ring-white transition-all" placeholder="Email Address" />
            </div>
            <textarea required rows="4" className="w-full px-6 py-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder:text-purple-100 outline-none focus:ring-2 ring-white transition-all" placeholder="Tell me something about your favorite story..."></textarea>
            <button className="w-full bg-white text-purple-700 py-4 rounded-2xl font-black text-lg hover:bg-purple-50 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              {formStatus ? formStatus : <><Send size={20} /> Send Message</>}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-purple-950 text-purple-200 py-16 px-6 text-center">
        <div className="mb-8 flex justify-center gap-6">
          <Heart className="hover:text-pink-400 cursor-pointer transition-colors" />
          <Star className="hover:text-yellow-400 cursor-pointer transition-colors" />
          <Sparkles className="hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
        <p className="font-bold text-white mb-2 text-xl">Abigail Eyob Zekarias</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Young Author Portfolio. Created with ✨</p>
      </footer>
    </div>
  );
}
