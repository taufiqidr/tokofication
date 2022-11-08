import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="sticky top-0 z-10 bg-sky-700 text-white">
      <section className="mx-auto flex max-w-7xl items-center flex-row justify-between p-4">
        <h1 className="text-3xl font-medium">
          <Link to="/">Tokofication</Link>
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="Search item"
            className="w-60 rounded-md pb-1 pt-1 border border-solid border-slate-900 text-xl text-black dark:border-none sm:text-lg"
          />
        </form>
        <div>
          <button
            id="hamburger-button"
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${
              mobileMenu ? "toggle-btn" : ""
            }`}
            onClick={() => {
              setMobileMenu((prev) => !prev);
            }}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <Link to="/home" className="hover:opacity-90">
              Home
            </Link>
            <Link to="/category" className="hover:opacity-90">
              Category
            </Link>

            {/*<Link to="/contact" className="hover:opacity-90">
              Contact
            </Link> */}
          </nav>
        </div>
      </section>

      <section
        id="mobile-menu"
        className={`justify-content-center top-68 absolute  w-full origin-top animate-open-menu flex-col bg-black text-5xl ${
          mobileMenu ? "flex" : "hidden"
        }`}
        onClick={() => {
          setMobileMenu((prev) => !prev);
        }}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <Link to="/" className="w-full py-6 text-center hover:opacity-90">
            Home
          </Link>
          <Link
            to="/character"
            className="w-full py-6 text-center hover:opacity-90"
          >
            My Character
          </Link>
          <Link
            to="/testimonial"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Testimonial
          </Link>
          <Link
            to="/contact"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Contact
          </Link>
          <Link
            to="#footer"
            className="w-full py-6 text-center hover:opacity-90"
          >
            Legal
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
