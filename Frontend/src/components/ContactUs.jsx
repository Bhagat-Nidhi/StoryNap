import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', { name, email, message });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full h-full max-w-md p-8 rounded-lg shadow-md overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("https://img.freepik.com/free-vector/books-seamless-pattern-doodle-outline-textbooks_107791-9584.jpg?t=st=1719292830~exp=1719296430~hmac=0d7251e0dc7f4d08d517109008040345a1dc95ba09e87809ddc19b1d3193d260&w=740")', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(70%) grayscale(70%)', // Adjust brightness and grayscale levels as needed
          }}
        ></div>
        <div className="relative z-10 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-extrabold mb-6 text-center text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-red-500">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
