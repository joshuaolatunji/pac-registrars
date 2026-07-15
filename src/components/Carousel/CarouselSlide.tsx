import type { CarouselSlideProps } from "./carouselData"

function CarouselSlide({slide}: CarouselSlideProps) {
    return(
        <div className="flex h-96 items-center justify-center bg-gray-200">
            <h1 className="text-4xl font-bold">{slide.title}</h1>
        </div>
    )
};

export default CarouselSlide