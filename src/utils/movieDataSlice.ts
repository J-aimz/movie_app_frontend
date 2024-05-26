import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovieCardProps, IStoreMovieDataSlice } from "./Interfaces";

const initialState: IStoreMovieDataSlice = {
  search: "",
  movies: [],
  history: [],
  isLoading: false,
  pageCount: 1,
};

const movieSlice = createSlice({
  name: "movieData",
  initialState,
  reducers: {
    addSearchResults: (
      state,
      action: PayloadAction<{ results: IMovieCardProps[]; search: string }>
    ) => {
      state.movies = action.payload.results;
      state.search = action.payload.search;
      state.isLoading = false;
    },
    setSearchHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
    setSearchParam: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
      addPageCount: (state) => {
          console.log("here")
          console.log(state.pageCount)
          state.pageCount += 1;
          console.log(state.pageCount);
          
    },
    reducePageCount: (state) => {
      state.pageCount !== 1
        ? (state.pageCount -= 1)
        : (state.pageCount = 1);
      },
    init: () => initialState,
  },
});

export const {
  addSearchResults,
  setSearchHistory,
  setSearchParam,
  setIsLoading,
  addPageCount,
  reducePageCount,
  init,
} = movieSlice.actions;
export default movieSlice.reducer;
