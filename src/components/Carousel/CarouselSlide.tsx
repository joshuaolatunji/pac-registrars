import type { CarouselSlideProps } from "./carouselData"

function CarouselSlide({slide}: CarouselSlideProps) {
    return(
        <div 
            className="relative h-80 lg:h-100 w-full">

                {/*Background Image */}
                <img 
                src={slide.image}
                alt={slide.title} />

                {/*Dark Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
           
           
                {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center">

                <div className="mx-auto w-full px-12 lg:px-14 max-w-8xl">

                    <div className="max-w-2xl text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-white">
                        {slide.title}
                        </h1>

                        <button className="mt-8 rounded-md bg-[#edf2f8] px-8 py-4 text-lg font-semibold text-black transition duration-350 hover:bg-red-600 hover:text-white">
                        {slide.buttonText}
                         </button>

                    </div>

                    

                </div>

            </div>


        </div>
    )
};

export default CarouselSlide