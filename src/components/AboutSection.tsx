'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaScissors, FaAward, FaUsers, FaCalendarAlt } from 'react-icons/fa';

interface Achievement {
  id: number;
  icon: JSX.Element;
  count: number;
  label: string;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements: Achievement[] = [
    { id: 1, icon: <FaCalendarAlt className="text-2xl text-primary" />, count: 15, label: 'שנות ניסיון' },
    { id: 2, icon: <FaUsers className="text-2xl text-primary" />, count: 5000, label: 'לקוחות מרוצים' },
    { id: 3, icon: <FaScissors className="text-2xl text-primary" />, count: 20, label: 'מעצבי שיער' },
    { id: 4, icon: <FaAward className="text-2xl text-primary" />, count: 12, label: 'פרסים' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const counterVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" dir="rtl" className="py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div 
            variants={itemVariants} 
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm z-10 rounded-2xl border border-white/20"></div>
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="מספרה גמא - סלון יופי מקצועי"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 shadow-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 backdrop-blur-md rounded-full border border-secondary/20 shadow-xl"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={itemVariants} 
            className="lg:w-1/2 text-right"
          >
            <div className="p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block"
              >
                <span className="relative z-10">אודות מספרה גמא</span>
                <span className="absolute bottom-1 right-0 h-3 w-full bg-primary/20 -z-10"></span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                מספרה גמא הוקמה לפני 15 שנה מתוך אהבה לעיצוב שיער ואסתטיקה. אנו מאמינים שכל לקוח הוא עולם ומלואו, ולכן אנו מתאימים את השירות והסגנון באופן אישי לכל אחד ואחת.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 mb-8 leading-relaxed"
              >
                הצוות שלנו מורכב ממעצבי שיער מקצועיים בעלי ניסיון רב, המתמחים בטכניקות החדשניות ביותר בתחום. אנו משתמשים במוצרים איכותיים ומתקדמים, ומקפידים להתעדכן בטרנדים העדכניים ביותר בעולם עיצוב השיער.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">המומחיות שלנו:</h3>
                <ul className="space-y-2">
                  {['תספורות מודרניות לנשים וגברים', 'צביעת שיער מקצועית', 'טיפולי שיער מתקדמים', 'עיצוב שיער לאירועים מיוחדים', 'טיפולי קרטין והחלקות'].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={itemVariants}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-inner"
              >
                <p className="text-gray-700 italic">
                  "אנו מחויבים להעניק ללקוחותינו את החוויה הטובה ביותר, עם תוצאות מושלמות שמשקפות את האישיות והסגנון הייחודי של כל לקוח."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={counterVariants}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl text-center shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-white/50 hover:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-full shadow-inner">
                  {achievement.icon}
                </div>
              </div>
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {achievement.count}+
              </motion.h3>
              <p className="text-gray-600">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">מוכנים לחוויית עיצוב שיער מושלמת?</h3>
            <p className="text-gray-700 mb-6">הצטרפו לאלפי הלקוחות המרוצים שלנו וגלו את ההבדל במספרה גמא</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              קבעו תור עכשיו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;