import promo from '../../../assets/img/promotion.jpg'
function Promotion() {
    return (
        <section className='relative group overflow-hidden section bg-gray-50 ' id="promo">
            <img src={promo} alt="Couple on a bed with a dog" className='absolute top-0 w-full h-full  object-[75%] sm:object-[25%] object-cover opacity-60 group-hover:scale-110 transition duration-500 ease-in' />

            <div className='section-center z-10 relative lg:flex lg:items-center lg:h-3/4'>
                <div className='text-center sm:text-left'>
                    <h2 className='text-5xl text-gray-700 font-bold'>
                        Let us take you around
                        <p className='font-extrabold text-green-700 mt-4'>Vietnam</p>
                    </h2>
                    <p className='max-w-lg text-gray-700 my-8 sm:leading-relaxed sm:text-xl'>
                        Vietnam is an exhilarating country to travel, home to breathtaking
                        nature, vibrant culture and friendly people.
                    </p>
                    <div className='grid sm:grid-cols-2 gap-y-4 sm:gap-x-8 text-center'>
                        <a href="#tips" className='btn text-white bg-green-500 hover:bg-green-600 active:bg-green-600'>Travel tips</a>
                        <a href="/" className='btn text-green-500 bg-white hover:bg-gray-100 active:bg-gray-200'>Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promotion;