import React from "react";
import { useNavigate } from "react-router-dom";
import { IMovieCardProps } from "../utils/Interfaces";


const MovieCard: React.FC<IMovieCardProps> = (movieData) => {
  const navigate = useNavigate();

  function handleRouting(id: string) {
    navigate(`/movie-details/${id}`);
  }

  return (
    <div
      className="cursor-pointer w-full max-w-xs mx-auto transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 mt-5"
      onClick={() => handleRouting(movieData.imdbId)}
    >
      <div className="border rounded-lg shadow-md overflow-hidden h-80 flex flex-col hover:bg-gray-50 transition-colors duration-200">
        <div className="overflow-hidden h-4/5">
          <img
            className="w-full h-full object-cover"
            src={movieData?.poster}
            alt={`${movieData.title} movie poster`}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <h2 className="text-lg font-semibold mb-2">
            {movieData?.title.length > 22
              ? movieData?.title.slice(0, 19) + "..."
              : movieData?.title}
          </h2>
          <p className="text-gray-600">Year: {movieData?.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
