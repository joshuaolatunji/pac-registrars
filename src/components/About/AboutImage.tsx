import aboutImage from "../../assets/about-image.jpg"
import ServicesCard from "./ServicesCard";


function AboutImage(){

        return(
            <div className="relative" >
                
                <img src={aboutImage} 
                alt="Business meeting" 
                className="h-120 w-fit rounded-sm object-cover ml-15"/>

            <div className="absolute -bottom-25 left-132">
                <ServicesCard />
            </div>

            </div>
        );

}

export default AboutImage;