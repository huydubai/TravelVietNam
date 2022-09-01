import { useParams } from "react-router-dom";
import { placesToGo } from "../../data";


function SinglePlacePage() {
    const { id } = useParams();
    const singlePlace = placesToGo.find(place => place.name === id)
    const { name, imageSrc, places } = singlePlace
    return (
        <div className="section bg-green-50">
            <div className="section-center">
                <div className="img-main">
                    <img src={imageSrc} alt=""
                        className="img-container"
                    />
                </div>
                <div className="text-center my-3">
                    <h1 className='text-3xl italic font-bold sm:text-4xl'>{name}</h1>
                    <p className="text-xl sm:text-2xl mt-2">Best places to visit in {name}</p>
                </div>
                {places.map((item, index) => {
                    const { id, name, description, images } = item
                    return (
                        <div key={id}>
                            <h2 className='text-xl font-bold mb-1 mt-3'>{index + 1} - {name}</h2>
                            {description.map((desc, index) => (
                                <p
                                    key={index}
                                    className='mb-1 text-md pl-5'
                                >
                                    {desc}
                                </p>
                            ))}
                            {images.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.imageSrc}
                                    alt=""
                                    className="mx-auto rounded-xl my-4 w-3/4 md:w-3/5"
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SinglePlacePage;