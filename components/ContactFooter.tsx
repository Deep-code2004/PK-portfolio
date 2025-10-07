import React, { useState } from 'react';

const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Name validation
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Message validation
    if (!message.trim()) {
      alert('Please enter a message.');
      return;
    }
    
    // Confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to send this message? This will open your default email client.');
    if (!isConfirmed) {
      return; // Stop submission if user cancels
    }

    const emailSubject = subject || `New Message from Portfolio Website`;
    const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    const mailtoLink = `mailto:pankajkhatri62@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };


  return (
    <footer id="contact" className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display">Ready to Secure Your Future?</h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Contact me today for a free consultation. Let's work together to build a financial plan that's right for you.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-accent mb-2">Call Me</h3>
            <a href="https://wa.link/egmfet" className="text-lg text-neutral-100 hover:text-white transition">+91 9699064348  (Click On Number)</a>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-accent mb-2">Email Me</h3>
            <a href="mailto:pankajkhatri62@gmail.com" className="text-lg text-neutral-100 hover:text-white transition">pankajkhatri62@gmail.com</a>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-accent mb-2">Location</h3>
            <p className="text-lg text-neutral-100">Working Remotely, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Or Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border-neutral-700 text-white rounded-md p-3 focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border-neutral-700 text-white rounded-md p-3 focus:ring-accent focus:border-accent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-neutral-800 border-neutral-700 text-white rounded-md p-3 focus:ring-accent focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message <span className="text-red-400">*</span></label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 border-neutral-700 text-white rounded-md p-3 focus:ring-accent focus:border-accent"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary text-white font-semibold py-3 px-10 rounded-full hover:bg-secondary transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-neutral-400 text-sm">
          &copy; {new Date().getFullYear()} Pankaj Khatri. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;