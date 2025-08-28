import type React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Component, useState } from "react";

// Component imports
import HeroCarousel from "../components/heroCarousel/HeroCarousel";
import PostSlider from "../components/posterSlider/PosterSlider";
import EntertainmentCardSlider from "../components/entertainment/EntertainmentCard";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return (
        <div>
            <HeroCarousel />
            {/* <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">Recommended movies</h1>
                <EntertainmentCardSlider />
            </div>  */}

            <div className="container mx-auto px-4 md:px-12 my-8 dark:bg-background-dark">
                <PostSlider 
                    title="Recommended Movies" 
                    subTitle="List of recommended Movies" 
                    posters={recommendedMovies} 
                    isDark={true} 
                />

            </div> 

            <div className="container mx-auto">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="Entertainment poster" />
            </div>
            
            <div className="py-12">
                <div className="container mx-auto px-4 md:px-17 my-8 flex flex-col gap-3">
                   
                    <div className="container bg-background-500 mx-auto px-4 md:px-12 my-8">
                        <PostSlider 
                          title="Premiers"
                          subTitle="Brand new release every Friday"
                          posters={premierMovies}
                          isDark={false}
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

            </div>
        </div>
    ) 
}

export default DefaultLayout(HomePage);