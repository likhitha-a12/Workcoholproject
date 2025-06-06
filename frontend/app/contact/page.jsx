'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errorText, setErrorText] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('error');
      setErrorText('Please fill in all fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        setStatus('error');
        setErrorText('Failed to send message.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setErrorText('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat px-4 py-16"
      style={{ backgroundImage: "url('/images/cont2_new.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black drop-shadow-lg mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-purple-600 font-lobster mb-10">
          We'd love to hear from you! Please reach out to us using the form below.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white/90 p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 bg-green-100 text-green-600 text-center p-4 rounded-md text-lg font-medium">
            Thank you for contacting us!
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 bg-red-100 text-red-600 text-center p-4 rounded-md text-lg font-medium">
            {errorText}
          </div>
        )}
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
          <p className="text-lg text-gray-700">123 Main Street, Cityville, Country</p>
          <p className="text-lg text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-lg text-gray-700">Email: likhitha.rebba12@gmail.com</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-purple-700 font-medium">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
