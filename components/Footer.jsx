import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-sky-700 text-xl text-white">
      <section className="mx-auto flex max-w-7xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>Tokofication App</h2>
        </address>
        <nav className="hidden flex-col gap-2 md:flex" aria-label="footer">
          <a href="#characters" className="hover:opacity-90">
            My Character
          </a>
          <a href="#testimonial" className="hover:opacity-90">
            Testimonial
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
