import React from "react";
import { addSearchResults, init, setIsLoading } from "./movieDataSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const useGetMovieTitle = () => {
  const dispatch = useDispatch();

  async function getMovieTitle(title: string, page = 1) {
    try {
      dispatch(init());
      dispatch(setIsLoading(true));
      const res = await axios.get(`${process.env.REACT_APP_base_url}/search/`, {
        params: {
          title: title,
          page: page,
        },
      });
      const data = res.data.data;

      dispatch(addSearchResults({ results: data.search, search: title }));
    } catch (err) {
      dispatch(setIsLoading(false));
      console.log("logging error: ", err);
    }
  }

  return { getMovieTitle };
};

export default useGetMovieTitle;
