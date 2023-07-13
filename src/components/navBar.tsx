import Image from 'next/image';
import logo from "./../../public/images/cargo-ship.png"

const NavBar = () => {
  return (
    <header className="bg-blue-900 shadow">
      <div className="container mx-auto py-4 px-8">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div className="flex">
            <Image src={logo} alt="Replan Cargo" className="w-8 mr-4" />
            <h1 className="mt-1 text-white">Replan Cargo</h1>
          </div>

          {/* Navigation menu */}
          <nav className="hidden md:block">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <a href="/services" className="text-white hover:text-gray-200 ml-4">Services</a>
            <a href="/quote" className="text-white hover:text-gray-200 ml-4">Quote</a>
            <a href="/about" className="text-white hover:text-gray-200 ml-4">About Us</a>
            <a href="/contact" className="text-white hover:text-gray-200 ml-4">Contact</a>
          </nav>
          {/* Mobile navigation */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
