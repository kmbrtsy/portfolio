import React from "react";

const ServicesSection = () => {
    return (
        <section id="service" className='bg-cover bg-center bg-no-repeat py-20 md:py-24' style={{backgroundImage: "url('/src/assets/aboutBg.png')"}}>
            <div className="container mx-auto py-6 md:py-8 mb-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-center mb-12">What I Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Box 1: UI/UX Design */}
                    <div className="bg-customPink flex flex-col items-center justify-center rounded-lg p-6 sm:p-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 4a2 2 0 012-2h2a1 1 0 011 1v12a1 1 0 01-1 1H4a2 2 0 01-2-2V4zm5 1a1 1 0 011-1h2a2 2 0 012 2v2a1 1 0 11-2 0V5h-1v10h1a1 1 0 110 2H8a1 1 0 01-1-1V5z" clipRule="evenodd" />
                            <path d="M13 5a1 1 0 011-1h2a2 2 0 012 2v8a1 1 0 01-1 1h-2a1 1 0 110-2h1V6h-1a1 1 0 01-1-1V5z" />
                        </svg>
                        <p className="text-white text-lg md:text-3xl text-center font-montserrat font-bold mb-2">UI/UX Design</p>
                        <p className="text-white text-center">I provide user interface and user experience design services to create intuitive and engaging digital products.</p>
                    </div>
                    {/* Box 2: Web Design */}
                    <div className="bg-customPink flex flex-col items-center justify-center rounded-lg p-6 sm:p-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 4a2 2 0 012-2h2a1 1 0 011 1v12a1 1 0 01-1 1H4a2 2 0 01-2-2V4zm5 1a1 1 0 011-1h2a2 2 0 012 2v2a1 1 0 11-2 0V5h-1v10h1a1 1 0 110 2H8a1 1 0 01-1-1V5z" clipRule="evenodd" />
                            <path d="M13 5a1 1 0 011-1h2a2 2 0 012 2v8a1 1 0 01-1 1h-2a1 1 0 110-2h1V6h-1a1 1 0 01-1-1V5z" />
                        </svg>
                        <p className="text-white text-lg md:text-3xl text-center font-montserrat font-bold mb-2">Web Design</p>
                        <p className="text-white text-center">I offer web design services to create modern and responsive websites tailored to your business needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
