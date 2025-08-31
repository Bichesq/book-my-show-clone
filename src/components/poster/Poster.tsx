import type { Movie } from "../../../types/index";

const Poster = (props: Movie) => {
  const { original_title, poster_path, isDark } = props;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col items-center px-2 py-1">
      <div className="w-full h-72 mb-2 cursor-pointer hover:scale-105 transition-transform duration-200">
        <img
          src={`${imageBaseUrl}${poster_path}`}
          alt={`${original_title} poster`}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src =
              "https://via.placeholder.com/300x450/cccccc/666666?text=No+Image";
          }}
        />
      </div>
      <h2 className={`text-sm font-medium text-center ${isDark ? "text-text-dark" : "text-text-light"} truncate w-full px-1`}>
        {original_title}
      </h2>
    </div>
  );
};

export default Poster;
