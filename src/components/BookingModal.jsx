import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaCar, FaUser, FaPhone } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const BookingModal = () => {
    const { isBookingOpen, closeBookingModal, bookingData } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicle: ''
    });

    useEffect(() => {
        if (isBookingOpen) {
            setFormData(prev => ({
                ...prev,
                vehicle: bookingData.vehicle || ''
            }));
        }
    }, [isBookingOpen, bookingData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const constructMessage = () => {
        let message = "```\n";
        message += "----------------------------\n";
        message += "      BOOKING REQUEST       \n";
        message += "----------------------------\n";
        message += `Name      : ${formData.name}\n`;
        message += `Phone     : ${formData.phone}\n`;
        message += `Vehicle   : ${formData.vehicle || 'Any'}\n`;
        message += "----------------------------\n";
        message += "```";
        return message;
    };

    const [step, setStep] = useState(1);

    const handleWhatsAppRedirect = (number) => {
        const message = constructMessage();
        const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        if (step === 1) {
            setStep(2);
        } else {
            closeBookingModal();
            setStep(1); // Reset for next time
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            handleWhatsAppRedirect('9948058679');
        } else {
            handleWhatsAppRedirect('9063986349');
        }
    };

    return (
        <AnimatePresence>
            {isBookingOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold">Book Your Ride</h3>
                                <p className="text-secondary text-sm">SS Tours & Travels</p>
                            </div>
                            <button
                                onClick={closeBookingModal}
                                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 block">Full Name</label>
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 block">Phone Number</label>
                                    <div className="relative">
                                        <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                                            placeholder="+91 99999..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 block">Vehicle Preference</label>
                                    <div className="relative">
                                        <FaCar className="absolute left-3 top-3.5 text-gray-400" />
                                        <select
                                            name="vehicle"
                                            value={formData.vehicle}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-white"
                                        >
                                            <option value="">Any Vehicle</option>
                                            <option value="Sedan">Sedan (4 Seater)</option>
                                            <option value="Innova">Innova (7 Seater)</option>
                                            <option value="SUV">SUV/Ertiga</option>
                                            <option value="Tempo Traveller">Tempo Traveller</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={`w-full ${step === 1 ? 'bg-[#25D366] hover:bg-[#128C7E]' : 'bg-[#128C7E] hover:bg-[#075E54]'} text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 mt-4`}
                            >
                                <FaWhatsapp size={24} /> {step === 1 ? 'Send Inquiry' : 'Send to Second Number'}
                            </button>

                            <p className="text-[10px] text-center text-gray-400 mt-2">
                                {step === 1 
                                    ? "* This will open WhatsApp with your enquiry." 
                                    : "* First message sent! Click again to send to our second operator."}
                            </p>

                            <p className="text-xs text-center text-gray-500 mt-2">
                                We will check availability and confirm your booking immediately via WhatsApp/Phone.
                            </p>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
