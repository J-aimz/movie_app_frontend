import React, { useState, KeyboardEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { setSearchHistory, setSearchParam } from "../utils/movieDataSlice";
import axios from "axios";
import useGetMovieTitle from "../utils/useGetMovieTitle";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
  const { getMovieTitle } = useGetMovieTitle();

  const searchValue = useSelector((state: RootState) => state.movieData.search);
  const history = useSelector((state: RootState) => state.movieData.history);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    dispatch(setSearchParam(value));
  }

  async function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      getMovieTitle(searchValue, 1);
      setInputIsFocused(false);
    }
  }

  async function handleSearchBtnClick() {
    getMovieTitle(searchValue, 1);
  }

  async function getSearchHistory() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_base_url}/api-v1/Movie/Get-Search-History`
      );
      const data = res.data.data;
      dispatch(setSearchHistory(data));
    } catch (err) {
      console.log("logging error: ", err);
    }
  }

  const styles = {
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: inputRef.current?.offsetWidth,
  };

  return (
    <>
      <div className="mt-6 flex flex-col items-center relative">
        <div className="flex justify-center" ref={inputRef}>
          <input
            className="border border-gray-400 text-gray-700 p-2 w-72 md:w-96 rounded"
            type="text"
            placeholder="Search movie title"
            onChange={handleChange}
            value={searchValue}
            name={"SearchValue"}
            onKeyDown={handleKeyPress}
            onFocus={() => {
              setInputIsFocused(true);
              getSearchHistory();
            }}
            onBlur={() => setTimeout(() => setInputIsFocused(false), 500)}
          />

          <button
            className="border p-2 text-gray-400"
            onClick={handleSearchBtnClick}
            type="button"
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
          </button>
        </div>

        {history.length > 0 && inputIsFocused && (
          <div
            className="absolute top-full left-0 w-72 md:w-96 m-auto bg-white border border-gray-300 rounded-b shadow-lg z-10"
            style={styles}
          >
            {history.length > 0 &&
              history.map((el, ind) => (
                <div
                  key={ind}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => getMovieTitle(el)}
                >
                  {el}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
