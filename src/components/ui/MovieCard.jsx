
const MovieCard = ({src, rank}) => {
  return (
    <div className="relative cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={src || "/movies/image1.webp"} 
        alt="Movie Poster"
        className="aspect-auto max-w-30 md:max-w-45 rounded-sm object-cover"
      />
      <span
        style={{ WebkitTextStroke: '2px white' }}
        className="absolute left-0 -translate-x-1/3 -translate-y-full text-6xl md:text-8xl font-extrabold md:font-semibold"
      >
       {rank || 1} 
      </span>
    </div>
  );
};

export default MovieCard;
