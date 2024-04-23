import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="bg-cover bg-center bg-no-repeat py-20" style={{backgroundImage:"url('/src/assets/designBG.png')"}}>
            <div className="container mx-auto py-2 md:py-4 mb-8 px-6 sm:px-8 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold font-montserrat text-customPink">
                            <span className="font-radley italic text-4xl">h</span>ello!
                        </h3>
                        <p className="text-lg text-gray-700 mb-8">
                            I am Kimberly Cordero or <span className="font-radley italic">kimmy</span> for short. I am a diligent person who loves diving into web development. I like creating websites and I mostly focus in HTML, CSS, and React JS. Effective communication, attentive listening, rapid learning, efficient time management, and self-motivation are among my strengths. I take pride in my sense of responsibility, dedication, and perpetual readiness to evolve and expand my skills.
                        </p>

                        <h3 className="text-2xl font-semibold font-montserrat text-customPink mb-4">
                            <span className="font-radley italic text-4xl">S</span>kills~
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2">
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Web Development</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">UI/UX Design</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Frontend Frameworks</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Responsive Design</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Squarespace</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">HTML/CSS/Javascript</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Growth Mindset</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Adaptability</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Fast Learner</p>
                            </div>
                            <div className="bg-lightPink p-4 rounded-lg shadow-md">
                                <p className="text-lg text-center font-montserrat font-semibold text-gray-900">Leadership</p>
                            </div>
                        </div>
                        <div className="container mx-auto text-start font-montserrat py-16 pb-0">
                                <a href="/path/to/your/cv.pdf" download className="inline-block bg-customPink hover:bg-lightPink text-white font-semibold py-2 px-4 rounded-lg">
                                    Download CV
                                </a>
                        </div>
                    </div>

                    <div className="md:h-full">
                        <img src="/src/assets/aboutImage.png" alt="Your Image" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
