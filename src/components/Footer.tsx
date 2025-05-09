'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" dir="rtl" className="w-full bg-gradient-to-b from-white to-gray-100 text-right">
      {/* Glassmorphism top section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/20 to-[#4ECDC4]/20 z-0"></div>
        <div className="backdrop-blur-sm bg-white/30 border-t border-white/40 relative z-10">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Logo and About */}
              <div className="lg:col-span-1">
                <div className="flex flex-col items-end">
                  <div className="mb-4 relative h-16 w-40">
                    <Image 
                      src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=160&h=64&q=80"
                      alt="מספרה גמא"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">מספרה גמא</h2>
                  <p className="text-gray-600 mb-4">
                    אנחנו מספרה מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                  </p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ניווט מהיר</h3>
                <ul className="space-y-2">
                  {['דף הבית', 'שירותים', 'גלריה', 'צוות', 'מחירון', 'צור קשר'].map((item, index) => (
                    <li key={index}>
                      <Link href={`#${index === 0 ? '' : item}`} className="text-gray-600 hover:text-[#FF6B6B] transition-colors duration-300 block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">צור קשר</h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-end">
                    <span className="text-gray-600 mr-2">03-1234567</span>
                    <FaPhone className="text-[#FF6B6B]" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-600 mr-2">info@gamma-salon.co.il</span>
                    <FaEnvelope className="text-[#FF6B6B]" />
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="text-gray-600 mr-2">רחוב הרצל 123, תל אביב</span>
                    <FaMapMarkerAlt className="text-[#FF6B6B]" />
                  </li>
                </ul>
              </div>
              
              {/* Hours */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">שעות פעילות</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">9:00 - 20:00</span>
                    <span className="font-medium">ראשון - חמישי</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">9:00 - 14:00</span>
                    <span className="font-medium">שישי</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">סגור</span>
                    <span className="font-medium">שבת</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Neumorphic social media section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 order-2 md:order-1">
              <p className="text-gray-600">
                © {currentYear} מספרה גמא. כל הזכויות שמורות.
              </p>
            </div>
            
            <div className="flex space-x-4 space-x-reverse order-1 md:order-2 mb-6 md:mb-0">
              {[
                { icon: <FaFacebookF />, label: 'Facebook' },
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaWhatsapp />, label: 'WhatsApp' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:text-white transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: index === 0 ? '#FF6B6B' : index === 1 ? '#4ECDC4' : '#25D366',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  style={{
                    boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            aria-label="חזרה לראש העמוד"
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-[#FF6B6B] text-white shadow-lg"
            whileHover={{ scale: 1.1, backgroundColor: '#4ECDC4' }}
            style={{
              boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.5)'
            }}
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;