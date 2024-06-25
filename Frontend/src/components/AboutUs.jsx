import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">About Us</h1>
        
        <div className="mb-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to <span className="font-bold text-red-600">StoryNap</span>, your number one source for all things books. We're dedicated to providing you the very best of literature, with an emphasis on quality, variety, and customer service.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in 2024 by TRIO, StoryNap has come a long way from its beginnings to finally making a website. When Anushka first started out, her passion for reading and her vision to share the joy of books with the world drove her to start her own bookstore.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to enrich the lives of our customers by providing them with an outstanding selection of books that inform, educate, and inspire. We believe in the transformative power of books and strive to create a welcoming environment for all book lovers.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-red-100">
                <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400" src="https://via.placeholder.com/150" alt="Anushka Goyal" />
                <h3 className="text-xl font-bold text-center text-gray-900">Anushka Goyal</h3>
                <p className="text-center text-gray-700">Founder</p>
                <p className="text-center text-gray-600 mt-2">
                  Anushka is the heart and soul of StoryNap. Her love for books and dedication to customer service are the driving forces behind our success.
                </p>
                <div className="flex justify-center mt-4">
                  <a href="http://www.linkedin.com/in/anushka-goyal42" className="text-blue-700 mx-2"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-purple-100">
                <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400" src="https://via.placeholder.com/150" alt="Humanshi Singh" />
                <h3 className="text-xl font-bold text-center text-gray-900">Humanshi Singh</h3>
                <p className="text-center text-gray-700">Head of Marketing</p>
                <p className="text-center text-gray-600 mt-2">
                  Humanshi is a marketing wizard who brings our bookstore to life online and offline. Her innovative strategies keep our customers engaged and coming back for more.
                </p>
                <div className="flex justify-center mt-4">
                  <a href="https://www.linkedin.com/in/humanshi-singh03/" className="text-blue-700 mx-2"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-blue-100">
                <img className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-400" src="https://via.placeholder.com/150" alt="Nidhi Bhagat" />
                <h3 className="text-xl font-bold text-center text-gray-900">Nidhi Bhagat</h3>
                <p className="text-center text-gray-700">Customer Service Manager</p>
                <p className="text-center text-gray-600 mt-2">
                  Nidhi ensures that every customer has a positive experience at StoryNap. Her attention to detail and friendly demeanor make her an invaluable part of our team.
                </p>
                <div className="flex justify-center mt-4">
                  <a href="http://www.linkedin.com/in/nidhii-bhagatt" className="text-blue-700 mx-2"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
