const Footer = () => {
    return (
      <footer className="bg-violet-950 text-white pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Replan Cargo */}
            <div className="md:mb-0">
              <h2 className="text-2xl font-bold ml-4 md:ml-0">About Replan Cargo</h2>
              <p className="mx-4 md:mx-0 text-base">
                Replan Cargo is a shipping company that specializes in delivering packages from the USA to Kenya. We are committed to providing reliable and affordable shipping services to our customers.
              </p>
            </div>
  
            {/* Company Links */}
            <div className="">
              <h2 className="ml-4 md:ml-0 text-2xl font-bold">Company Links</h2>
              <div className="flex flex-wrap ml-4 md:ml-0">
                <div className="w-1/3 md:w-1/4 md:ml-0">
                  <ul className="text-base">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                  </ul>
                </div>
                <div className="w-1/3 md:w-1/4">
                  <ul className="text-base">
                    <li><a href="/quote">Quote</a></li>
                    <li><a href="/tracking">Tracking</a></li>
                  </ul>
                </div>
                <div className="w-1/3 md:w-1/4">
                  <ul className="text-base">
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>

            </div>
  
            {/* Stay in Touch */}
            <div>
              <h2 className="text-2xl font-bold ml-4 md:ml-0">Stay in Touch</h2>
              <p className="text-base ml-4 md:ml-0">
                Sign up for our newsletter to receive the latest updates and promotions.
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border border-gray-300 rounded py-2 px-4 md:w-full mx-4 md:mx-0"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white font-bold my-4 rounded py-2 px-4 md:w-full w-64 mx-4 md:mx-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-0.5 text-sm md:text-center ml-4 md:ml-0">
          <p>&copy; {new Date().getFullYear()} Replan Cargo. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  