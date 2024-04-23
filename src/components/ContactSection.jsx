import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_drxg00o', 'template_a5nkd09', form.current, 'IWY9qtOaqFCFe8HdE')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (error) => {
                console.log('FAILED...', error.text);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <section id="contact" className='bg-cover bg-center bg-no-repeat py-20 md:py-24' style={{backgroundImage: "url('/src/assets/serviceBg.png')"}}>
            <div className="container mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-semibold font-montserrat text-center text-customPink mb-12">Contact Me</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/kmbrtsy/" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
                    </a>

                    <a href="mailto:kmbrtsy@gmail.com" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
                    </a>

                    <a href="https://github.com/kmbrtsy" className="text-customPink hover:text-blue-500">
                        <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
                    </a>
                </div>

                <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-800 rounded-full py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-800 rounded-full py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border border-gray-800 rounded-xl py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-customPink text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
