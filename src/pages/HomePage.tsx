import type React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { Component, useState } from "react";

// Component imports
import EntertainmentCard from "../components/entertainment/EntertainmentCard";
import HeroCarousel from "../components/heroCarousel/HeroCarousel";
import PostSlider from "../components/posterSlider/PosterSlider";

const HomePage = () => {
    const [recomendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    return (
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 my-3">Recommended movies</h1>
                <EntertainmentCard />
            </div> 

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PostSlider 
                title="Recommended Movies" 
                subject="List ofrecommended Movies posters={recommendedMovies} isDark={false}" posters={recomendedMovies} />
                
            </div>
            
            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-17 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="data:image/jpeg;base64,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9RRS70o3S7kDg4HPDsH0VvV+1DTVPTPfRzzVkwHyxMgezJ8S8AAe/kopT7Ibm52Km60cTe+ONzz7HdUwsuzbT1tjPxFObhM4YMlUcgeTRwHnz8V032UTabbf2ISaKSulfUXW41NfWODp6iQvfjkO4DwAwB4BWZsQof2V1uLhnL2U7D3YG87+5vsshmyC3AfPdqw+TGD8lMtK6fp9NWr6PppZJWdo6QvkA3iT5eSX5Fcq+mAUXs862G9o+9+FDMfZhK5xXRWvKmKm0deDM9rBJSSRM3jjLnNLQB45K51VsH+hkTMi30VRca6Cho2b9RUPDI29Mnv8BzPgF0fp+0U9is9NbaXiyFuC8ji9x4ucfEnJUD2Paa7GnfqCsZ+0mBZSAjkz95/rjA8B/ErNWGZb1S6Fwi0UaXWFV8LYZwDh02Ih455/dlVopftBqt6ako2n6rTK4efAfg5QnVkVTZ6WkZKeynqmueY/3o2DGM9xOTw6Y9vlsuE8jJcY+D36MmrAwfmt899eX4MC63URb0NMcv5Of/l8vFb/AEJoV90Md0vTHNoj80ULuDp/E9zfx8ueboPQO92dzv8ADw4OhpHjn4vH/r79ys9enj40KY6R83bZdnW/NkceI+F+/wB+jyxjY2NZG0NY0ANa0YAHcF6RF1G4REQBERAEREAREQBERAEREAREQBERAEREAREQBERAFHNoV2lsuk62qppDHUuDYonDm1ziBkeIGT6KRrFuVtorrTfDXGliqYd4O3JG5GRyKtBpSTfAZzPV1lXWvD62rqKl45OnldIR6klSHQmkZ9T3BrpGPZa4nZnm5B38DT3nrjkPHGbkj0dpqM5Fit5/1wNd+K3cUbIo2xxMaxjRhrWjAA8Au6eb+HUEUUfZ+RRshiZFExrI2NDWsaMBoHIAL2iLzy5qYrNG68zXSrxJLkCBnSMAYz58z4ZWO/TVPV6mde7jiZ8TWx0kR+rGBx3j3u3i7Hdz58t8ipGuMeF/cm1u3XX31x/gIiK5AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/9k=" 
                        className="w-full h-full" 
                        alt="Rupay image" 
                        />
                    </div>
                    <div className="container mx-auto px-4 md:px-12 my-8">
                        <PostSlider 
                          title="Premiers"
                          subject="Brand new release every Friday"
                          posters={premierMovies}
                          isDark={false}
                        />
                    </div>
                    <div className="container mx-auto px-4 md:px-12 my-8">
                        <PostSlider 
                          title="Online Streaming Events"
                          subject="Online Stream Events"
                          posters={onlineStreamEvents}
                          isDark={false}
                        />
                    </div>
                </div>

            </div>
        </>
    ) 
}

export default DefaultLayout(HomePage);