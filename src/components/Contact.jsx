import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FadeIn, ScaleIn } from './common/Reveal';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">Contact Us</h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have questions or want to book a ride? Reach out to us anytime, we are available 24/7.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <FadeIn direction="right">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-xl shadow-md flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-secondary/20 p-4 rounded-full text-secondary text-2xl">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Phone Numbers</h3>
                                    <p className="text-gray-600 mb-1"><a href="tel:9948058679" className="hover:text-secondary transition">9948058679</a></p>
                                    <p className="text-gray-600 mb-1"><a href="tel:9063986349" className="hover:text-secondary transition">9063986349</a></p>
                                    <p className="text-gray-600"><a href="tel:9848566519" className="hover:text-secondary transition">9848566519</a></p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-secondary/20 p-4 rounded-full text-secondary text-2xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Email Address</h3>
                                    <p className="text-gray-600 break-all"><a href="mailto:sstoursandtravels2007@gmail.com" className="hover:text-secondary transition">sstoursandtravels2007@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                                <div className="bg-secondary/20 p-4 rounded-full text-secondary text-2xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
                                    <p className="text-gray-600">
                                        10-4-771/62, Nehru Nagar, Masab Tank,<br />
                                        Hyderabad, Telangana – 500028
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <ScaleIn delay={0.2} className="h-full">
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 h-full">
                            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition" placeholder="+91 99999 99999" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition" placeholder="I need a cab for outstation..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                                    <FaPaperPlane /> Send Message
                                </button>
                            </form>
                        </div>
                    </ScaleIn>
                </div>

                {/* Map Embed Placeholder */}
                <FadeIn delay={0.4} direction="up">
                    <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-80 bg-gray-200 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411082570775!2d78.448!3d17.398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzUzLjAiTiA3OMKwMjYnNTMuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
export default Contact;
