
import SectionTitle from '../SectionTitle'
import Tours from './Tours';
import { tours } from '../../../data'
const featuredTours = tours.slice(0, 6)
function FeaturedTours() {
    return (
        <section className="section bg-gray-50" id="tour">
            <SectionTitle title="Featured Tours" />
            <section className="section-center rounded-3xl">
                <Tours tours={featuredTours} color="gray" />
            </section>
        </section>
    );
}

export default FeaturedTours;