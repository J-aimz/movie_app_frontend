import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieDataSlice";


export const store = configureStore({
  reducer: { movieData: movieSlice },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;