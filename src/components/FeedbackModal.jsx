import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp, FaStar, FaCommentAlt, FaUser } from 'react-icons/fa';

const FeedbackModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setFormData(prev => ({
            ...prev,
            rating
        }));
    };

    const constructMessage = () => {
        let message = "```\n";
        message += "----------------------------\n";
        message += "      CUSTOMER FEEDBACK     \n";
        message += "----------------------------\n";
        message += `Name      : ${formData.name}\n`;
        message += `Rating    : ${formData.rating} Stars\n`;
        message += `Feedback  : ${formData.message}\n`;
        message += "----------------------------\n";
        message += "```";
        return message;
    };

    const handleWhatsAppRedirect = (number1, number2) => {
        const message = constructMessage();
        const whatsappUrl1 = `https://wa.me/91${number1}?text=${encodeURIComponent(message)}`;
        const whatsappUrl2 = `https://wa.me/91${number2}?text=${encodeURIComponent(message)}`;
        
        // Trick: Use a real link click for the first one
        const link = document.createElement('a');
        link.href = whatsappUrl1;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Use window.open for the second one
        setTimeout(() => {
            window.open(whatsappUrl2, '_blank');
        }, 100);

        onClose();
        setFormData({ name: '', rating: 5, message: '' }); // Reset form
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleWhatsAppRedirect('9948058679', '9063986349');
    };

    return (
        <AnimatePresence>
            {isOpen && (
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
                                <h3 className="text-2xl font-bold">Share Your Experience</h3>
                                <p className="text-secondary text-sm">We value your feedback</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-6">

                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">Your Name</label>
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

                            {/* Rating */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">Rate Us</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRatingChange(star)}
                                            className={`text-2xl transition-transform hover:scale-110 ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                        >
                                            <FaStar />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 block">Your Feedback</label>
                                <div className="relative">
                                    <FaCommentAlt className="absolute left-3 top-3.5 text-gray-400 mt-1" />
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us about your trip..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <FaWhatsapp size={24} /> Send Feedback
                            </button>

                            <p className="text-[10px] text-center text-gray-400 mt-1">
                                * This will open WhatsApp chats. Please allow popups if prompted.
                            </p>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FeedbackModal;
