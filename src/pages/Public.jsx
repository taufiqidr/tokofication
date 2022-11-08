import React from "react";

const Public = () => {
  return (
    <>
      <section
        id="hero"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-5xl font-bold text-slate-900 dark:text-white sm:text-left">
            Welcome to Tokofication App
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            Tokofication is an online marketplace. explore now
          </p>
        </article>
        <img src="/vite.svg" alt="taufiq" className="w-1/2" />
      </section>
    </>
  );
};

export default Public;
