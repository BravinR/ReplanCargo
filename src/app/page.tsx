import React from 'react';
import Image from 'next/image';
import clearanceImage from "./../../public/images/tracking.png";
import realTimeImage from "./../../public/images/schedule.png"
import doorToDoorImage from "./../../public/images/door-to-door.png"
import trackingImage from "./../../public/images/tracking.png"
import logo from "./../../public/images/cargo-ship.png"

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <div className="flex">
              <Image src={logo} alt="Replan Cargo" className="w-8 mr-4" />
              <h1 className="mt-1">Replan Cargo</h1>
            </div>
            
            {/* Navigation menu */}
            <nav className="hidden md:block">
              <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="/services" className="text-gray-600 hover:text-gray-800 ml-4">Services</a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-800 ml-4">Pricing</a>
              <a href="/about" className="text-gray-600 hover:text-gray-800 ml-4">About Us</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 ml-4">Contact</a>
            </nav>
            {/* Mobile navigation */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Ship from the USA to Kenya with Ease</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">We provide reliable and affordable ocean shipping services from the United States to your doorstep in any part of Kenya</p>
          <a href="/quote" className="bg-white text-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full font-bold uppercase">Get a Quote Now</a>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
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
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <p className="text-center text-gray-600 mb-4">Have questions or need a quote? Get in touch with us!</p>
            <a href="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-full block text-center font-bold uppercase">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Replan Cargo. All rights reserved.</p>
          <nav className="mt-2">
            <a href="/privacy" className="text-gray-600 hover:text-white mx-2">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-white mx-2">Terms of Service</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;