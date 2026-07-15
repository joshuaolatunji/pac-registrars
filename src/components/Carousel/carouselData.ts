export interface CarouselSlideProps {

    slide: {

        id: number;

        title: string;

        image: string;

        buttonText: string;

    };

}

import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"
import slide4 from "../../assets/slide4.jpg"
import slide5 from "../../assets/slide5.jpg"

export const carouselData = [
    {
     id: 1,
     title: "Streamline Operations With Our Company Secretarial Services",
     image: slide1,
     buttonText: "Get Started",
    },

    {
     id: 2,
     title: "Enhance Your Business With Our Registrar Services",
     image: slide2,
     buttonText: "Get Started",
    },

    {
     id: 3,
     title: "Navigate Probate With Our Expert Guidance",
     image: slide3,
     buttonText: "Get Started",
    },

    {
     id: 4,
     title: "Optimize Efficiency With Our Document Management Solutions",
     image: slide4,
     buttonText: "Get Started",
    },

    {
     id: 5,
     title: "Prevent Identity Theft With Our KYC Services",
     image: slide5,
     buttonText: "Get Started",
    },

];

