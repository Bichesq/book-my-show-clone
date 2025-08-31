import type React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Component, useEffect, useState } from "react";

// Component imports
import HeroCarousel from "../components/heroCarousel/HeroCarousel";
import PostSlider from "../components/posterSlider/PosterSlider";
import axios from "axios";

const MOVIE_DB_API_KEY = import.meta.env.VITE_MOVIE_DB_API_KEY;
const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        // Fetch recommended movies
        const fetchRecommendedMovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_DB_API_KEY}`
            );
            setRecommendedMovies(response.data.results);
          } catch (error) {
            console.error("Error fetching recommended movies:", error);
          }
        };
        fetchRecommendedMovies();
        // Fetch premier movies
        const fetchPremierMovies = async () => {
            try {
                const response = await axios.get(
                  `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_DB_API_KEY}`
                );
                setPremierMovies(response.data.results.poster_path);
              } catch (error) {
                console.error("Error fetching premier movies:", error);
              }
          };    
        fetchPremierMovies();
        // Fetch online stream events
        const fetchOnlineStreamEvents = async () => {
            try {
                const response = await axios.get(
                  `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_DB_API_KEY}`
                );
                setOnlineStreamEvents(response.data.results.poster_path);
              } catch (error) {
                console.error("Error fetching online stream events:", error);
              }
          };    
        fetchOnlineStreamEvents();
      }, []);

    return (
      <>
        <HeroCarousel />

        <div className="container mx-auto px-4 md:px-12 my-8">
          <PostSlider
            title="Recommended Movies"
            subTitle="List of recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        {/* <div className="bg-premier-800 py-12"> */}
        <div className="container mx-auto px-4 md:px-17 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
              className="w-full h-full"
              alt="Rupay image"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 bg-background-950">
            <PostSlider
              title="Premiers"
            //   subTitle=""
              posters={premierMovies}
              isDark={true}
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8">
            <PostSlider
              title="Online Streaming Events"
              subTitle="Online Stream Events"
              posters={onlineStreamEvents}
              isDark={false}
            />
          </div>
        </div>
        {/* </div> */}
      </>
    ); 
}

export default DefaultLayout(HomePage);