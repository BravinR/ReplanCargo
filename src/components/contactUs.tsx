import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can add further logic to send the form data to a server, display a success message, etc.
    // This example just logs the form data to the console.
  };

  return (
    <div className="my-8 mx-8 md:mx-60">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto md:mx-0 md:ml-6">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-medium">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
