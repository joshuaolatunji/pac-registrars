import {servicesData} from "./servicesData";
import {CircleCheck} from "lucide-react";

function ServicesCard() {
    return(
        <div className="w-70 rounded-lg bg-blue-950 p-6 text-white shadow-xl">

            <h3 className="text-2xl font-semibold text-center">
                Our Services
            </h3>

            <hr className="my-2 border-white" />

            <div>
                {servicesData.map((service, index) => (

                    <div 
                    key={index}
                    className="flex items-center gap-3 py-1">
                        
                    <CircleCheck
                        size={20}
                        className="text-white"/>

                    <p>{service}</p>

                    </div>

                ))}
            </div>



        </div>
    )
};

export default ServicesCard;