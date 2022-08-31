import SectionTitle from '../SectionTitle'
import { reviews } from '../../../data';
import Review from './Review';
function Reviews() {
    return (
        <section className="bg-gray-50 section" id="reviews">
            <SectionTitle title="Reviews" />
            <p className='text-center text-lg sm:text-2xl font-semibold mb-8'>
                Read trusted reviews from our customers
            </p>
            <div className='section-center bg-gray-100 rounded-full sm:rounded-full'>
                <div className='my-20 text-gray-700 mx-auto'>
                    <div className='grid md:grid-cols-3 gap-6 lg:gap-12 text-center'>
                        {reviews.map(review => (
                            <Review key={review.id} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;