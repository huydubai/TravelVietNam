function ImageHeader({ imageSrc }) {
    return (
        <div className=" md:pt-0">
            <div className="relative">
                <img src={imageSrc} alt=""
                    className="w-full mx-auto h-[200px] object-top object-cover hidden md:block inset-0 rounded-xl blur"
                />
            </div>
            <div className="relative lg:-mt-[8%] md:-mt-[14%]">
                <img src={imageSrc} alt=""
                    className="object-cover h-[300px] md:h-[400px] w-full md:w-3/5 mx-auto rounded-xl"
                />
            </div>
        </div>
    );
}
export default ImageHeader;