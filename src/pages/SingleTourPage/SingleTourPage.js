import { useParams } from "react-router-dom";
import { TourGallery, Accordion } from "../../components/ContentTourPage";
import { tours } from "../../data";
import Stars from '../../components/Content/Reviews/Stars'

function SingleTourPage() {
    const { id } = useParams();
    const singleTour = tours.find(tour => {
        return tour.name === id
    })
    return (
        <section className='section pt-20 bg-green-50'>
            <section className='section-center'>
                <TourGallery images={singleTour.images} />

                <div className="py-12 px-4">
                    <p className='text-2xl sm:text-4xl text-gray-700 italic font-bold'>
                        {singleTour.name} {singleTour.duration}
                    </p>
                    <p className="ml-2 verticalRight">
                        {singleTour.description}
                    </p>
                </div>

                <Accordion
                    title="Itinerary"
                    infor={singleTour.itinerary}
                    active={true}
                />
                <Accordion
                    title="Included"
                    infor={singleTour.included}
                    active={false}
                />
                <Accordion title="Excluded" infor={singleTour.excluded} active={false} />
                <Accordion
                    title="Cancellation policy"
                    infor={singleTour.cancellationPolicy}
                    active={false}
                />
                <Accordion
                    title="Confirmation policy"
                    infor={singleTour.confirmationPolicy}
                    active={false}
                />
                <Accordion
                    title="Additional Info"
                    infor={singleTour.additionalInfo}
                    active={false}
                />

                <div className="py-10 mx-auto">
                    <h2 className="text-xl font-bold sm:text-2xl">
                        Customer Reviews
                    </h2>
                    <div className="flex items-center mt-4">
                        <p className='text-3xl font-medium'>{singleTour.averageRating}</p>
                        <div className='ml-4 text-left'>
                            <Stars stars={singleTour.averageRating} />
                            <p className='text-xs to-gray-500 mt-1'>
                                Base on {singleTour.numReviews}{''} {singleTour.numReviews > 1 ? 'reviews' : 'review'}
                            </p>
                        </div>
                    </div>
                    <div>
                        {singleTour.reviews.map(review => (
                            <div className="mt-8">
                                <p className="text-xl sm:text-2xl font-medium">{review.title}</p>
                                <p className="mt-2 text-gray-700 text-sm sm:text-base">{review.comment}</p>
                                <p className='mt-4 text-xs text-gray-500'>{`${review.user.name} - ${review.createdAt.substring(0, 10)}`}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </section >
    );
}

export default SingleTourPage;