interface IRating {
  source: string;
  value: string;
}

export interface IMovieDetails {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: IRating[];
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
  totalSeasons: string
}

export interface IMovieCardProps {
    imdbId: string;
    poster: string;
    title: string;
    type: string;
    year: number;
}

export interface IStoreMovieDataSlice {
  search: string;
  movies: IMovieCardProps[];
  history: string[];
  isLoading: boolean;
  pageCount: number
}

