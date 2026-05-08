import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white pt-24 pb-10 overflow-hidden">
            {/* Decorative Top Wave */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-white">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* Background Gradient Blob */}
            <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="SS Tours and Travels" className="h-28 object-contain bg-white rounded-lg p-1" />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Your trusted travel partner in Hyderabad. Experience luxury, comfort, and safety with our premium fleet and professional service. Book your next journey with us today.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
                            <div className="flex space-x-3">
                                <a href="https://www.instagram.com/ss_toursandtravels07" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 transition-all duration-300 shadow-lg group">
                                    <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://chat.whatsapp.com/KwSMmuU13Nm0YgNzczkiJW" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#25D366] transition-all duration-300 shadow-lg group">
                                    <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Link Style 2 */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-8 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-secondary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Fleet', path: '/fleet' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="group flex items-center text-gray-400 hover:text-secondary transition-colors duration-300">
                                        <FaArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-8 relative inline-block">
                            Our Services
                            <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-secondary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Outstation Cabs', 'Airport Transfers', 'Local Hourly Packages', 'Corporate Travel', 'Wedding Car Rentals'].map((item, idx) => (
                                <li key={idx} className="flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-secondary transition-colors"></span>
                                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Card */}
                    <div>
                        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-secondary/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0 text-secondary">
                                        <FaMapMarkerAlt size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Address</p>
                                        <p className="text-gray-300 text-sm leading-snug">
                                            10-4-771/62, Nehru Nagar, Masab Tank, Hyderabad - 500028
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0 text-secondary">
                                        <FaPhoneAlt size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Phone</p>
                                        <p className="text-gray-300 text-sm">9948058679</p>
                                        <p className="text-gray-300 text-sm">9063986349</p>
                                        <p className="text-gray-300 text-sm">9848566519</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0 text-secondary">
                                        <FaEnvelope size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                                        <a href="mailto:sstoursandtravels2007@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors break-all">
                                            sstoursandtravels2007@gmail.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative border-t border-gray-800 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} <span className="text-white font-semibold">SS Tours & Travels</span>. All rights reserved.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-secondary transition-colors">Privacy Policy</Link>
                            <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-secondary transition-colors">Terms of Service</Link>
                            <Link to="/cookie-policy" className="text-sm text-gray-500 hover:text-secondary transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
