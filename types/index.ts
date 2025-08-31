

export type entertainmentProps = {
  src: string;
  title?: string;
  subject?: string;
};

export type PosterSliderProps = {
  title: string;
  subTitle?: string;
  posters?: any[]; // Made optional and more specific
  isDark: boolean;
};


export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // could use Date if you parse it
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  isDark?: boolean;
};
