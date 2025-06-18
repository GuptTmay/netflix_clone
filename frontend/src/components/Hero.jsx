import { forwardRef } from 'react';
import logo from '../assets/logo.png';
import Dropbox from './Dropbox';
import { ChevronRight } from 'lucide-react';

const Hero = forwardRef((props, ref) => {
  return (
    <header ref={ref} className="relative flex h-screen w-full flex-col items-center">
      {/* Background & Black overlay */}
      <div className="absolute inset-0 -z-20 h-screen w-full bg-[url('/images/herobg.jpg')] bg-cover bg-center">
        <div className="inset-0 h-screen bg-radial from-black/50 from-20% to-black"></div>
      </div>

      {/* Hero Header */}
      <header className="flex w-full items-center justify-between px-4 pt-5 md:px-18">
        <img
          src={logo}
          className="h-12 brightness-140 contrast-125 md:h-18"
          alt="Logo"
        />
        <div className="flex space-x-3 text-amber-50">
          <Dropbox />
          <button className="rounded-md bg-red-600 px-3 py-1 text-sm font-bold">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Body */}
      <section className="flex h-full flex-col items-center justify-center space-y-2 px-8 pb-10 text-center md:space-y-4">
        <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-6xl md:font-bold">
          Unlimited movies, TV shows and more
        </h1>
        <h3 className="text-md font-medium text-white md:text-2xl">
          Starts at ₹149. Cancel at any time.
        </h3>
        <h3 className="text-md font-medium text-white md:mt-2 md:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {/* <input type="text" />  */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-3xs rounded-sm border border-stone-500 bg-black/70 px-4 py-3 text-white outline-offset-2 placeholder:text-gray-300 hover:bg-black/70 focus:outline-2 focus:outline-white sm:w-xs md:w-sm"
          />
          {/* <button className="">Get Started</button> */}
          <button
            className="flex w-max cursor-pointer items-center justify-evenly rounded-sm bg-red-600 px-4 py-2 text-lg font-semibold text-white md:text-2xl"
          >
            <span>Get Started</span>
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      </section>
    </header>
  );
});

export default Hero;
