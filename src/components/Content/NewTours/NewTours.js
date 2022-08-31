
import SectionTitle from '../SectionTitle'
import Tours from '../FeaturedTours/Tours';
import { tours } from '../../../data'
const newTour = tours.slice(6, tours.length)
function NewTours() {
    return (
        <section className="section bg-purple-50" id="newTour">
            <SectionTitle title="New Tours" />
            <section className="section-center rounded-3xl">
                <Tours tours={newTour} color="gray" extraCol />
            </section>
        </section>
    );
}

export default NewTours;