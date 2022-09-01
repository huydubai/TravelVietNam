import { useState } from "react";

function TourGallery({ images }) {

    const [imageSrc, setImageSrc] = useState(images[0])
    return (
        <div className="border-b-2 py-10 overflow-hidden">
            <div className="img-main">
                <img src={imageSrc} alt=""
                    className="img-container"
                />
            </div>
            <div className="grid grid-cols-5 gap-x-2 mt-4">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={image}
                        onClick={() => setImageSrc(images[index])}
                        className={`h-16 w-full sm:h-24 lg:h-32 object-top cursor-pointer rounded-lg ${imageSrc === image ? ' border-4 border-red-400' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default TourGallery;