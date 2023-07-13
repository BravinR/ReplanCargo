import React from 'react';
import Image from 'next/image';
import doorToDoorImage from "./../../../public/images/door-to-door.png";
import trackingImage from "./../../../public/images/tracking.png";
import clearanceImage from "./../../../public/images/custom-clearance.png";
import deliveryImage from "./../../../public/images/delivery.png";
import logisticsImage from "./../../../public/images/logistics.png";
import insuranceImage from "./../../../public/images/insurance.png";
import logo from "./../../../public/images/cargo-ship.png";
import Footer from './../../components/footer';
import NavBar from './../../components/navBar';

const ServicesPage = () => {
    return (
      <div className="bg-gray-100">
        {/* Header */}
        <NavBar />
  
        {/* Introduction */}
        <section className="py-16 bg-blue-900 text-white mb-16">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Efficient Shipping Services</h2>
            <p className="text-lg text-center mb-8">At Replan Cargo, we offer a wide range of shipping services to meet your needs. Whether you require door-to-door shipping, real-time tracking, customs clearance, or express delivery, we have you covered. Our logistics solutions streamline your supply chain, and our cargo insurance options provide peace of mind. Explore our services below:</p>
          </div>
        </section>

        {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={doorToDoorImage} alt="Door-to-door Shipping" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Door-to-door Shipping</h3>
              <p className="text-gray-600 text-center">We deliver your packages right to your doorstep anywhere in Kenya.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={trackingImage} alt="Real-time Tracking" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Real-time Tracking</h3>
              <p className="text-gray-600 text-center">Stay updated with the latest information on your shipment&apos;s progress.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={clearanceImage} alt="Customs Clearance" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Customs Clearance</h3>
              <p className="text-gray-600 text-center">We handle all customs procedures and ensure a hassle-free experience.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={deliveryImage} alt="Express Delivery" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Express Delivery</h3>
              <p className="text-gray-600 text-center">Get your shipments delivered quickly and efficiently.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={logisticsImage} alt="Logistics Solutions" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Logistics Solutions</h3>
              <p className="text-gray-600 text-center">Streamline your supply chain with our comprehensive logistics solutions.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Image src={insuranceImage} alt="Cargo Insurance" className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center">Cargo Insurance</h3>
              <p className="text-gray-600 text-center">Protect your shipments with our reliable cargo insurance options.</p>
            </div>
          </div>
        </div>
      </section>
  
        {/* Contact */}
        <section className="bg-gray-200 py-16 mb-16">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center text-gray-600 mb-4">Have questions or need a quote? Get in touch with us!</p>
              <a href="/contact" className="bg-blue-600 text-white py-2 px-6 rounded-full block text-center font-bold uppercase">Contact Us</a>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
  export default ServicesPage;
    