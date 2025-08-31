import type { JSX } from "react";

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

export type posterProps = {
    title: string;
    poster_Path: string;
}

