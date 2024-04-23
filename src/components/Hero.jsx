import React from 'react';

const Hero = () => {
  return (
    <section id='home' className='bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('/src/assets/bgimage.png')"}}>
        <div className='container mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8 '>
            <div className='max-w-4xl mx-auto text-center'>
                <p className="font-semibold text-white text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                    Hello!
                </p>
                <h1 className="text-customGray text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold py-4 md:py-6">
                    <span className="text-4xl md:text-5xl">I'm</span> <span className="text-white font-radley italic underline">kimmy</span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-montserrat font-bold mb-16 md:mb-24 lg:mb-32 text-customGray">a
                    <span className='font-radley italic text-white'> w</span>eb <span className='font-radley italic text-white'> d</span>eveloper
                </h1>
            </div>
        </div>
    </section>
  );
};

export default Hero;
