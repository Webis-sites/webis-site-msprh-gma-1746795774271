'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="מספרה מודרנית"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-end justify-center px-6 sm:px-12 md:px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <div className="max-w-2xl">
          {/* Glass Card */}
          <motion.div
            className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-10 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-6 text-right"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-1">
                <span className="text-[#4ECDC4]">מספרה</span> <span className="text-[#FF6B6B]">גמא</span>
              </h2>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-right"
              variants={itemVariants}
            >
              מספרה מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 text-right"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="text-right"
              variants={itemVariants}
            >
              <motion.a
                href="#booking"
                className="inline-block bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold py-3 px-8 rounded-full text-lg shadow-[5px_5px_15px_rgba(255,107,107,0.3),-5px_-5px_15px_rgba(255,255,255,0.1)] transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                קבע תור עכשיו
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-6 text-white/80 text-right"
            variants={itemVariants}
          >
            <p className="text-sm md:text-base">
              אנחנו מספרה מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-gradient-to-r from-[#4ECDC4]/30 to-[#4ECDC4]/10 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.div
        className="absolute top-20 left-20 h-16 w-16 rounded-full bg-gradient-to-r from-[#FF6B6B]/30 to-[#FF6B6B]/10 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      />
    </section>
  );
};

export default HeroSection;