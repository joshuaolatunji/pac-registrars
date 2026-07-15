import AboutImage from "./AboutImage"
import AboutContent from "./AboutContent"

function About(){
    return(
        <section className="py-20">
            <div className="mx-auto grid grid-cols-2 gap-12 px-6 lg:px-8">

                <AboutImage />

                <AboutContent />

            </div>

        </section>
    )
};

export default About