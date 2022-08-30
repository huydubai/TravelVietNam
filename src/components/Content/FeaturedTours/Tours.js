import { Link } from "react-router-dom";

function Tours({ color, tours }) {
    return (
        <div className="grid-container">
            {tours.map(tour => (
                <div key={tour.id} className={`group bg-${color}-200 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out overflow-hidden  `}>
                    <Link to={`/tours/${tour.name}`}>
                        <div className="relative h-60 bg-gray-500 rounded-t-lg overflow-hidden">
                            <img src={tour.imageSrc} alt={tour.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition duration-300"
                            />
                            <p className="absolute right-0 bottom-0 sm:text-lg bg-white capitalize font-bold italic rounded-tl-xl py-2 px-4">
                                {tour.startDate}
                            </p>
                        </div>
                        <div className="p-4 flex-col">
                            <h3 className="mt-4 text-2xl font-bold">{tour.name}</h3>
                            <div className="my-6">
                                {tour.description.substring(0, 180)}...
                                <button className="read-more text-gray-500 hover:text-gray-700">Read more</button>
                            </div>
                            <div className="flex items-center justify-between text-lg text-gray-500 hover:text-gray-700 font-bold capitalize">
                                <p>{tour.region}</p>
                                <p>{tour.price}</p>
                                <p>{tour.duration}</p>
                            </div>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default Tours;