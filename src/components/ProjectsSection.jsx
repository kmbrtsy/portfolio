import React from "react";

const ProjectsSection = () => {
    return (
        <section id='projects' className="bg-customPink py-20">
            <div className="container mx-auto py-6 md:py-6 mb-4 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-white font-montserrat mb-12">Some Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/src/assets/project1.png" alt="Project 1" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                            <p className="text-gray-700">Description of Project 1</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/path/to/project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                            <p className="text-gray-700">Description of Project 2</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/path/to/project3.jpg" alt="Project 3" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                            <p className="text-gray-700">Description of Project 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
