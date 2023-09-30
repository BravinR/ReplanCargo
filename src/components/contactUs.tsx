import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm("xnqkqebo");

  const handleFormSubmit = async (e:any) => {
    e.preventDefault();

    if (state.submitting) {
      return;
    }

    try {
      await handleSubmit(e);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-8 ml-4 mr-36 md:mx-60">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto md:mx-0 md:ml-6">
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
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
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
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
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
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 px-4 rounded-md"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;