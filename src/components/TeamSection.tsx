'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// Types
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const TeamSection = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'נועה כהן',
      position: 'מעצבת שיער בכירה',
      bio: 'בעלת ניסיון של 15 שנה בעיצוב שיער, מתמחה בצבעי שיער ייחודיים וטכניקות חיתוך מתקדמות.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 2,
      name: 'יוסי לוי',
      position: 'מומחה לתספורות גברים',
      bio: 'מתמחה בתספורות גברים מודרניות, עיצוב זקן וטיפולי פנים. בוגר אקדמיית וולה.',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 3,
      name: 'מיכל אברהם',
      position: 'מומחית צבע והחלקות',
      bio: 'מתמחה בטכניקות צבע מתקדמות והחלקות שיער. בעלת הסמכה בינלאומית מטעם לוריאל פריז.',
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 4,
      name: 'דניאל גולן',
      position: 'סטייליסט ומאפר',
      bio: 'מומחה בסטיילינג כולל ובאיפור מקצועי לאירועים מיוחדים. בוגר בית הספר למקצועות היופי.',
      image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
    let Icon;
    switch (platform) {
      case 'instagram':
        Icon = FaInstagram;
        break;
      case 'facebook':
        Icon = FaFacebookF;
        break;
      case 'linkedin':
        Icon = FaLinkedinIn;
        break;
      default:
        return null;
    }

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
        aria-label={`${platform} link`}
      >
        <Icon className="text-white text-lg" />
      </a>
    );
  };

  return (
    <section id="team-section" dir="rtl" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">הצוות שלנו</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
            הצוות המקצועי שלנו במספרה גמא מורכב ממעצבי שיער מנוסים ומוסמכים, שעוברים הכשרות והשתלמויות באופן קבוע כדי להביא לכם את הטכניקות והטרנדים העדכניים ביותר בעולם עיצוב השיער.
          </p>
        </motion.div>

        {isClient && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 h-full">
                  {/* Neumorphic and glassmorphism effects */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-filter backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),_0_20px_30px_rgba(0,0,0,0.15)] z-0"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="relative h-80 overflow-hidden rounded-t-2xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <div className="flex gap-3">
                          {Object.entries(member.socialMedia).map(([platform, url]) => (
                            <SocialIcon key={platform} platform={platform} url={url} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col bg-white/90 backdrop-blur-md">
                      <h3 className="text-2xl font-bold text-gray-800 mb-1 text-right">{member.name}</h3>
                      <p className="text-[#FF6B6B] font-medium mb-4 text-right">{member.position}</p>
                      <p className="text-gray-600 text-right">{member.bio}</p>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <button className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-medium transition-all duration-300 hover:shadow-lg hover:from-[#FF5A5A] hover:to-[#FF7A7A] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-opacity-50 text-right">
                          קביעת תור
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg relative overflow-hidden">
            {/* Glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/10 to-[#FF6B6B]/10 backdrop-filter backdrop-blur-sm z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">הצטרפו למשפחת מספרה גמא</h3>
              <p className="text-gray-600 mb-6">אנו מחפשים תמיד אנשי מקצוע מוכשרים להצטרף לצוות שלנו</p>
              <button className="py-3 px-8 rounded-xl bg-[#4ECDC4] text-white font-medium transition-all duration-300 hover:bg-[#3DBDAD] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50">
                שלחו קורות חיים
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;