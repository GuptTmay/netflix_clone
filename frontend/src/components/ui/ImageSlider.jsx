import { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // default for large screens
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024)
        setCardsPerView(4); // large
      else if (width >= 768)
        setCardsPerView(3); // md
      else setCardsPerView(2); // mobile
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // const handleScroll = (direction) => {
  //   const newIndex = currIndex + direction * cardsPerView;
  //   const clampedIndex = Math.max(0, Math.min(newIndex, 10 - cardsPerView));
  //   const card = sliderRef.current?.children[clampedIndex];
  //   if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  //   setCurrIndex(clampedIndex);
  // };

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = container.firstChild.offsetWidth + 24; // 24 = space-x-6
    const scrollAmount = cardWidth * cardsPerView;

    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

    const newIndex = currIndex + direction * cardsPerView;
    const clampedIndex = Math.max(0, Math.min(newIndex, 10 - cardsPerView));
    setCurrIndex(clampedIndex);
  };

  return (
    <div className="flex items-center">
      {currIndex > 0 && (
        <button
          onClick={() => handleScroll(-1)}
          className="m-2 cursor-pointer rounded-sm bg-slate-900 py-10 hover:bg-slate-800"
        >
          <ChevronLeft className="h-8 w-8 text-gray-400" />
        </button>
      )}

      <div
        ref={sliderRef}
        className="no-scrollbar flex w-full space-x-6 overflow-auto scroll-smooth px-3 py-4 md:space-x-12"
      >
        {[...Array(10)].map((_, index) => (
          <MovieCard
            key={index}
            id={index + 1}
            src={`/movies/image${index + 1}.webp`}
            rank={index + 1}
          />
        ))}
      </div>

      {currIndex + cardsPerView < 10 && (
        <button
          onClick={() => handleScroll(1)}
          className="m-2 cursor-pointer rounded-sm bg-slate-900 py-10 hover:bg-slate-800"
        >
          <ChevronRight className="h-8 w-8 text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default ImageSlider;
