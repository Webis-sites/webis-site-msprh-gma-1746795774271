'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaPaintBrush, FaSprayCan, FaHandSparkles, FaMagic, FaGem } from 'react-icons/fa';
import Image from 'next/image';

interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
  image: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      name: 'תספורת מעוצבת',
      description: 'תספורת מקצועית המותאמת אישית לצורת הפנים ולסגנון האישי שלך.',
      duration: '45 דקות',
      price: '₪150',
      icon: <FaScissors className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'צביעת שיער',
      description: 'צביעה מקצועית עם חומרים איכותיים לשיער בריא וצבע עשיר ועמיד.',
      duration: '90 דקות',
      price: '₪280',
      icon: <FaPaintBrush className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'עיצוב שיער',
      description: 'עיצוב שיער מקצועי לאירועים מיוחדים, חתונות או סתם ליום מיוחד.',
      duration: '60 דקות',
      price: '₪200',
      icon: <FaSprayCan className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'טיפולי שיער',
      description: 'טיפולים מתקדמים להזנה, החלקה והברקה של השיער.',
      duration: '75 דקות',
      price: '₪320',
      icon: <FaHandSparkles className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'החלקות קראטין',
      description: 'החלקת קראטין מקצועית לשיער חלק, בריא ומבריק לאורך זמן.',
      duration: '120 דקות',
      price: '₪450',
      icon: <FaMagic className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'טיפולי פרימיום',
      description: 'חבילת טיפוח מקיפה הכוללת תספורת, צבע וטיפול מיוחד לשיער.',
      duration: '150 דקות',
      price: '₪550',
      icon: <FaGem className="text-2xl" />,
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const renderServiceCards = () => {
    if (isMobile) {
      return (
        <div className="w-full overflow-hidden">
          <div className="flex justify-center mb-6 space-x-2 space-x-reverse">
            {services.map((service, index) => (
              <button
                key={`tab-${service.id}`}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTab === index ? 'bg-[#FF6B6B] scale-125' : 'bg-gray-300'
                }`}
                aria-label={`עבור לשירות ${service.name}`}
              />
            ))}
          </div>
          <motion.div
            className="w-full"
            initial={false}
            animate={{ x: `-${activeTab * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex">
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 px-4">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="services" dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-gray-800"
          >
            השירותים שלנו
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#FF6B6B] mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            במספרה גמא אנחנו מתמחים במגוון רחב של שירותי עיצוב שיער ברמה הגבוהה ביותר. הצוות המקצועי שלנו מחויב להעניק לך את החוויה והתוצאה המושלמת.
          </motion.p>
        </div>

        {renderServiceCards()}
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="h-full rounded-2xl overflow-hidden bg-white backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100"
      style={{
        boxShadow: '8px 8px 16px rgba(209, 217, 230, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.8)'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 right-4 bg-[#FF6B6B] text-white p-3 rounded-full">
          {service.icon}
        </div>
      </div>
      <div className="p-6 text-right">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <div className="bg-[#4ECDC4] text-white text-sm font-bold py-1 px-3 rounded-full">
            {service.price}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <span>{service.duration}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;