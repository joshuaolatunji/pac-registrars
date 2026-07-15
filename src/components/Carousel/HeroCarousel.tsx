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



function HeroCarousel(){

    return(
        <Carousel>

            <CarouselContent>
                {carouselData.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <CarouselSlide slide={slide} />
                </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="left-4 top-1/2" />

            <CarouselNext className="right-4 top-1/2" />

        </Carousel>
    )

};

export default HeroCarousel