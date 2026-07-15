import {ArrowRight} from "lucide-react"

function AboutContent() {
        return(
            <div className="flex flex-col items-start justify-center max-w-7xl text-left">
                <p className="text-sm font-semibold text-gray-600">
                    Putting the right solutions and methods in place
                </p>

                <h2 className="mt-3 text-4xl font-bold leading-tight text-black lg:text-3xl">
                    PAC Registrars and Investor Services Limited, formerly known 
                    as PAC Registrars Limited, is a subsidiary of PanAfrican Capital 
                    Holdings ("PAC Holdings")
                </h2>

                <p className="mt-8 text-lg leading-10 text-gray-800">
                    We are a share registration and business solutions provider,
                    licensed by the Securities and Exchange Commission. Our focus is
                    on providing professional and personalized service to clients,
                    shareholders, stockbrokers and advisors
                </p>

                <a href="#" className="mt-10 inline-flex w-fit items-center gap-2 font-semibold text-black transition-all hover:gap-3">
                    Learn More
                    <ArrowRight />
                </a>

            </div>
        )
}

export default AboutContent;