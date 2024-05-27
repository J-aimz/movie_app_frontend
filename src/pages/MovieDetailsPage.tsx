import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieDetails } from "../utils/Interfaces";
import axios from "axios";

const MovieDetailsPage = () => {
  const [data, setData] = useState<IMovieDetails | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMovieDetails(id: string) {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_base_url}/api-v1/Movie/${id}`
        );
        setData(res.data.data);
      } catch (err) {
        console.log("logging error: ", err);
      }
    }

    if (id) {
      getMovieDetails(id);
    }
  }, [id]);

  return (
    <div className="p-4 mt-4 lg:w-3/4 m-auto">
      <div className="mb-4">
        <button
          className="border border-gray-300 py-2 px-4 flex items-center space-x-2"
          onClick={() => navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0L4.586 11H17a1 1 0 110-2H4.586l3.707-3.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
      <div className="mt-4 border-t" />
      {
        data === null ?  <h1 className="text-center text-gray-300 text-2xl font-semibold mt-10">
          loading...
        </h1> :
          
      <div className="flex mt-4 flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full lg:w-1/4">
          <img
            className="w-full h-96 sm:h-80 md:h-[470px]"
            src={data?.poster}
            alt="movie poster"
          />
        </div>

          <div className="w-full p-4 lg:w-3/4">
          <div>
            <h1 className="text-4xl mb-4">{data?.title}</h1>
            <h2 className="text-xl mb-4">{data?.plot}</h2>
            <h3 className="text-lg mb-2">Rating: {data?.ratings[0].value}</h3>
            <p className="text-lg mb-2">Casts: {data?.actors}</p>
            <p className="text-lg mb-2">Rated: {data?.rated}</p>
            <p className="text-lg mb-2">Type: {data?.type}</p>
            <p className="text-lg mb-2">Runtime: {data?.runtime}</p>
            {data?.totalSeasons && (
              <p className="text-lg mb-2">Seasons: {data?.totalSeasons}</p>
            )} 
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default MovieDetailsPage;
