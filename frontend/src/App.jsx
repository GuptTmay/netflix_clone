import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import PopupBar from './components/ui/PopupBar';
import ReasonCard from './components/ui/ReasonCard';
import ImageSlider from './components/ui/ImageSlider';
import { compass, computer, dice, scope } from '../public/svg/reasonSvgs';
import { ChevronRight } from 'lucide-react';
import FooterTag from './components/ui/FooterTag';
import Dropbox from './components/Dropbox';
import { faq, FooterTags } from './lib/data';

function App() {
  const [openPanel, setOpenPanel] = useState(null);
  const [mobStrBtn, setMobStrBtn] = useState(false);

  const bodyRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    if (!(window.innerWidth <= 600)) return;

    function checkVisible(element) {
      const obj = element.getBoundingClientRect();
      return (
        obj.top >= 0 &&
        obj.left >= 0 &&
        obj.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        obj.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (!bodyRef.current || !btn1Ref.current || !btn2Ref.current) {
        console.error('Refs are not set correctly');
        return;
      }

      if (checkVisible(btn1Ref.current) || checkVisible(btn2Ref.current)) {
        // setMobStrBtn(false);
        console.log('Button is visible');
      } else {
        // setMobStrBtn(true);
        console.log('Button is not visible');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={bodyRef}>
      <header>
        <Hero ref={btn1Ref}></Hero>
      </header>

      <main className="relative">
        <div className="absolute inset-0 h-6 -translate-y-1/2 bg-radial from-gray-600 to-70%"></div>

        <section className="h-max w-full space-x-12 bg-black">
          {/* Image Slider */}
          <div className="flex w-full flex-col space-x-2 px-4 py-8 md:space-y-4 md:py-12 lg:px-28">
            <h1 className="self-start text-2xl font-bold text-white">
              Trending Now
            </h1>
            <ImageSlider />
          </div>

          {/* More reasons to join */}
          <div className="flex w-full flex-col space-x-2 px-4 py-8 md:flex-wrap md:space-y-4 md:px-16 lg:px-28">
            <h1 className="mb-8 self-start text-2xl font-bold text-white">
              More reasons to join
            </h1>
            <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex-row lg:justify-between">
              <ReasonCard
                title="Enjoy on your TV"
                para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                svg={computer}
              />
              <ReasonCard
                title="Download your shows to watch offline"
                para="Save your favourites easily and always have something to watch."
                svg={compass}
              />
              <ReasonCard
                title="Watch everywhere"
                para="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
                svg={scope}
              />
              <ReasonCard
                title="Create profiles for kids"
                para="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
                svg={dice}
              />
            </ul>
          </div>

          {/* FAQ */}
          <div className="flex w-full flex-col px-4 py-8 md:px-16 lg:px-28">
            <h1 className="self-start text-2xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <ul className="flex w-full flex-col items-center space-y-1.5 pt-4">
              {faq.map((value, index) => (
                <PopupBar
                  key={index}
                  index={index}
                  ques={value.ques}
                  ans={value.ans}
                  openPanel={openPanel}
                  setOpenPanel={setOpenPanel}
                />
              ))}
            </ul>
          </div>

          <div
            ref={btn2Ref}
            className="flex w-full flex-col items-center justify-center gap-1 px-4 py-8 md:px-16 lg:px-28"
          >
            <p className="py-4 text-center text-sm text-white md:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
              {/* <input type="text"/>  */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-2xs rounded-sm border border-stone-500 bg-black/70 px-4 py-3 text-white outline-offset-2 placeholder:text-gray-300 hover:bg-black/70 focus:outline-2 focus:outline-white sm:w-sm md:w-lg"
              />
              {/* <button className="">Get Started</button> */}
              <button className="flex w-max cursor-pointer items-center justify-evenly rounded-sm bg-red-600 px-4 py-2 text-lg font-semibold text-white md:text-2xl">
                <span>Get Started</span>
                <ChevronRight className="h-9 w-9" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-start space-y-10 bg-black px-4 pt-2 pb-30 font-medium text-gray-400 md:px-16 lg:px-28">
        <div className="text-md self-start text-gray-300 sm:text-lg">
          <p className="w-full">
            Questions? Call{' '}
            <span className="cursor-pointer underline">000-800-919-1743</span>
          </p>
        </div>
        <div className="flex flex-wrap">
          {FooterTags.map((tag, index) => (
            <FooterTag info={tag.info} link={tag.link} key={index} />
          ))}
        </div>
        <Dropbox />
        <p className="text-sm">Netflix India</p>
        <p className="text-xs text-gray-500">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <a href="#" className="cursor-pointer text-blue-500 underline">
            Learn more.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
