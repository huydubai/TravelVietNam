
import aboutImg from '../../../assets/img/aboutImg.png'
import SectionTitle from '../SectionTitle'
function About() {
    return (
        <section className="section bg-amber-100" id="about">
            <SectionTitle title="About us" />
            <div className="section-center ">
                <div className='grid sm:grid-cols-2 gap-4'>
                    <div className="p-4">
                        <img src={aboutImg} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>
                    <div className="p-4 sm:flex-col self-center">
                        <h3 className="text-xl capitalize font-bold sm:text-2xl">Reverie Travel Is The Leading Travel Agency In Vietnam.</h3>
                        <p className="my-6">
                            We focus in private Hight quality & Luxury tours in Vietnam and Indochine with special style for worldwide travelers for years.
                            <br />
                            No other company puts more efforts into personalizing each tour than we do. Our consultants with staffs of dynamic and much experience in the field of tourism.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;