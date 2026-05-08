import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCar } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
    const { openBookingModal } = useBooking();
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-start overflow-hidden pt-24 md:pt-32">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                    alt="Hyderabad Taxi Service"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-6 bg-secondary"></div>
                        <span className="text-secondary font-bold tracking-wide uppercase text-sm md:text-base">
                            #No.1 Outstation Cabs in Hyderabad
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 font-sans">
                        Welcome to <br className="md:hidden" />
                        <span className="whitespace-nowrap">SS Tours & Travels</span> <br />
                        <span className="text-secondary">Reliable Cab Service</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light leading-relaxed">
                        Safe & Comfortable Rides for Local, Outstation & Airport Transfers.
                        <span className="text-lg text-gray-300 mt-2 block font-normal">Available 24/7 at affordable rates.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:9948058679"
                            className="flex items-center justify-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            <FaPhoneAlt /> Call Now
                        </a>
                        <button
                            onClick={() => openBookingModal({ serviceType: 'Outstation' })}
                            className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition transform hover:scale-105 backdrop-blur-sm"
                        >
                            <FaCar /> Book a Cab
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
