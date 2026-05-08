import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Buttons */}
            <div className="flex flex-col gap-3">
                <a
                    href="https://chat.whatsapp.com/KwSMmuU13Nm0YgNzczkiJW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
                    aria-label="Join WhatsApp Group"
                    title="WhatsApp Enquiry Group"
                >
                    <FaWhatsapp size={24} />
                </a>
            </div>

            {/* Call Button (Mobile Only usually, but good to have) */}
            <a
                href="tel:9948058679"
                className="bg-secondary text-primary p-3 md:p-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 flex items-center justify-center md:hidden"
                aria-label="Call Now"
            >
                <FaPhoneAlt size={20} />
            </a>
        </div>
    );
};

export default FloatingButtons;
