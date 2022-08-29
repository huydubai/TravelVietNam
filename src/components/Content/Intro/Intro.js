import React from 'react';
import introVideo from '../../../assets/video/intro.mp4'
function Intro() {
    return (
        <section className='relative w-full min-h-screen p-10 flex justify-center items-center'>
            <video
                controls=""
                muted
                autoPlay={'autoplay'}
                loop
                className='absolute top-0 left-0 w-full h-full object-cover z-30'
            >
                <source src={introVideo} />
            </video>
            <div className='text-5xl z-40 text-center text-white my-20'>
                <h2 className='text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase'>Welcome to VietNam</h2>
                <h3 className='text-2xl sm:text-3xl md:text-5px capitalize my-2 sm:my-5'>The hidden charm</h3>
                <p className='max-w-2xl mx-auto my-2 sm:my-5 text-base sm:text-xl lg:text-2xl'>A land of staggering natural beauty and cultural complexities, of dynamic mega cities and hill-tribe villages, Vietnam is both exotic and compelling.</p>
                <a href="#featured" className='rounded-[4px] text-xs bg-white text-gray-800 py-2.5 px-7 mt-2.5 uppercase font-bold hover:bg-green-500 hover:text-white transition duration-200 ease-in-out'>EXPLORE</a>
            </div>
        </section>
    );
}

export default Intro;