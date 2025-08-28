export type entertainmentProps = {
    src: string
    title?: string
    subject?: string
}

export type PosterProps = {
    title: string;
    subTitle: string;
    poster: string; // single poster URL
    isDark?: boolean;
}

export type PosterSliderProps = {
    title: string
    subTitle: string
    posters: PosterProps[]
    isDark: boolean
}