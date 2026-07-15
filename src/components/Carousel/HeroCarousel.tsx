"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"


import { carouselData } from "./carouselData";

import CarouselSlide from "./CarouselSlide"

import { useEffect, useState } from "react";

import type { CarouselApi } from "../ui/carousel";


function HeroCarousel(){

    const [api, setApi] = useState<CarouselApi>();
    const [isHovered, setIsHovered] = useState(false);
    const [current, setCurrent] = useState(0);

//Implement slideschow and stop on Mouseclick 
useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
        api.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
}, [api, isHovered]);

//Detect current slide
useEffect(() => {
    if (!api) return;

    const onSelect = () => {
        setCurrent(api.selectedScrollSnap());
    };

    onSelect(); // Set the initial slide

    api.on("select", onSelect);

    return () => {
        api.off("select", onSelect);
    };
}, [api]);

    return(
        <Carousel
            setApi={setApi}
            opts={{loop: true}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >

            <CarouselContent>
                {carouselData.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <CarouselSlide slide={slide} />
                </CarouselItem>
                ))}
            </CarouselContent>

            {/* //Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
                {carouselData.map((_, index) => (
             <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current === index
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"}`}
            />
                ))}
                </div>


            <CarouselPrevious className="absolute left-1 top-1/8 z-50 h-8 w-8 -translate-y-1/2 border-none bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white" />

            <CarouselNext className="absolute right-1 top-1/8 z-50 h-8 w-8 -translate-y-1/2 border-none bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:text-white" />
            

        </Carousel>
    )

};

export default HeroCarousel