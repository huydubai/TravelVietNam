
import SectionTitle from '../SectionTitle'
import { features } from '../../../data'
function WhyUs() {
    return (
        <section className="section" id="whyus">
            <SectionTitle title="WHY TRAVEL WITH US?" />
            <p className='text-center text-md mb-6 w-full  mx-auto my-0 md:w-1/2 md:text-2xl'>We specialize in organizing travel itineraries to Domestic and International Destinations. All Indochina tours Reverie Travel provides are tailor-made.</p>
            <div className='section-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3'>
                    {features.map(feature => (
                        <div className='mt-10'>
                            <div className='flex justify-between'>
                                <div className='bg-amber-200 rounded-lg mr-6 w-16 h-16 sm:w-16 sm:h-16'>
                                    <div className="w-full h-full sm:w-full sm:h-full">
                                        <img src={feature.icon} alt={feature.name} />
                                    </div>
                                </div>
                                <div className='flex flex-col flex-1'>
                                    <p className='leading-6 font-medium text-gray-900 md:text-lg'>{feature.name}</p>
                                    <p className='md:text-base text-gray-500 mt-2'>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default WhyUs;