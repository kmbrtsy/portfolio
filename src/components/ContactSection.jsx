import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <section id="contact" className="bg-white py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-center text-customPink mb-12">Contact Me</h2>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
                    </a>

                    <a href="#" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
                    </a>

                    <a href="#" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-customPink text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>

            </div>
        </section>
    );
}

export default ContactSection;
