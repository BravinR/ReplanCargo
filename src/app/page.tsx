"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import clearanceImage from "./../../public/images/custom-clearance.png";
import realTimeImage from "./../../public/images/schedule.png"
import doorToDoorImage from "./../../public/images/door-to-door.png"
import trackingImage from "./../../public/images/tracking.png"
import Footer from './../components/footer';
import NavBar from './../components/navBar';

const HomePage = () => {
  const [state, handleSubmit] = useForm("xnqkqebo");

  const renderForm = () => (
    <section className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Fill out this form to start shipping from the USA to Kenya hassle-free and see the results.</h2>
        <div className="mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-100 border border-gray-300 rounded py-2 px-4 mb-2 w-full sm:w-2/3 md:mx-44 text-black"
              name="name"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-gray-100 border border-gray-300 rounded py-2 px-4 mb-4 w-full sm:w-2/3 mt-6 md:mt-8 md:mx-44 text-black"
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-full block text-center font-bold mx-auto w-2/3 sm:w-auto"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
          <p className="text-center text-gray-800">Have questions or need a quote? Get in touch with us!</p>
        </div>
      </div>
    </section>
  );

  const renderSuccessMessage = () => (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-8">
        <p>Thanks!</p>
      </div>
    </section>
  );

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Ship from the USA to Kenya with Ease</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">We provide reliable and affordable ocean shipping services from the United States to your doorstep in any part of Kenya</p>
          <a href="/quote" className="bg-white text-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full font-bold uppercase">Get a Quote Now</a>
        </div>
      </section>

      {/* Services */}
      <section className="py-8">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <Image src={doorToDoorImage} alt="Door-to-door Shipping" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Door-to-door Shipping</h3>
              <p className="text-gray-600 text-center">We deliver your packages right to your doorstep anywhere in Kenya.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <Image src={trackingImage} alt="Real-time Tracking" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Real-time Tracking</h3>
              <p className="text-gray-600 text-center">Stay updated with the latest information on your shipment&apos;s progress.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <Image src={clearanceImage} alt="Customs Clearance" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Customs Clearance</h3>
              <p className="text-gray-600 text-center">We handle all customs procedures and ensure a hassle-free experience.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <Image src={realTimeImage} alt="Accurate Timelines" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Accurate Timelines</h3>
              <p className="text-gray-600 text-center">We provide estimated delivery times, so you know when to expect your shipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {state.succeeded ? renderSuccessMessage() : renderForm()}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;