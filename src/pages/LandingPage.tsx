import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { RootState } from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import useGetMovieTitle from "../utils/useGetMovieTitle";
import { addPageCount, reducePageCount } from "../utils/movieDataSlice";

export default function LandingPage() {
  const movies = useSelector((state: RootState) => state.movieData.movies);
  const searchValue = useSelector((state: RootState) => state.movieData.search);
  const pageCount = useSelector(
    (state: RootState) => state.movieData.pageCount
  );
  const dispatch = useDispatch();

  const isloading = useSelector(
    (state: RootState) => state.movieData.isLoading
  )

  const { getMovieTitle } = useGetMovieTitle();

  // async function getPage(type: string) {
  //   if (type === "next") {
  //     dispatch(addPageCount(1));
  //     const result = await getMovieTitle(searchValue, pageCount + 1);
  //   } else if (type === "prev" && pageCount > 1) {
  //     dispatch(reducePageCount());
  //     const result = await getMovieTitle(searchValue, pageCount - 1);
  //   }
  // }

  return (
    <div className="p-4 md:w-3/4 m-auto">
      <SearchBar />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4">
        <div className="flex space-x-2 mt-2 sm:mt-0">
          {/* { pageCount == 1 && (
            <button className="text-gray-500" onClick={() => getPage("prev")}>
              Previous
            </button>
          )}

          {movies.length > 0 && (
            <button className="text-gray-500" onClick={() => getPage("next")}>
              See more
            </button>
          )} */}
        </div>
      </div>
      <div className="mt-4 border-t" />

      {isloading ? (
        <h1 className="text-center text-gray-300 text-2xl font-semibold mt-10">
          Loading...
        </h1>
      ) : movies.length === 0 ? (
        <h1 className="text-center text-gray-300 text-2xl font-semibold mt-10">
          No search results
        </h1>
      ) : (
        <div className="grid pt-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies?.map((movie) => (
            <div key={movie.imdbId}>
              <MovieCard {...movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
