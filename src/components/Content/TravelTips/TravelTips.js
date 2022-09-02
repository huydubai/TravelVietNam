import SectionTitle from '../SectionTitle'
import { tips } from '../../../data'
import TravelTip from './TravelTip';
function TravelTips() {
    return (
        <section className='section bg-green-50' id="tips">
            <SectionTitle title="Travel Tips" />
            <p className='text-center text-2xl mb-6'>Prepare for your trip with these practical articles</p>
            <section className='section-center'>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-y-3 gap-x-3 sm:gap-x-6'>
                    {tips.map(tip => (
                        <TravelTip key={tip.id} tip={tip} />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default TravelTips;