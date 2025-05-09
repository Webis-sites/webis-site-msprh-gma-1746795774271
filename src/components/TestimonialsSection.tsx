'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'מיכל לוי',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'מספרה גמא היא המקום הטוב ביותר לעיצוב שיער! הסטייליסטים מקצועיים ותמיד מקשיבים לרצונות שלי. יצאתי עם תסרוקת מדהימה שקיבלתי עליה המון מחמאות.'
  },
  {
    id: 2,
    name: 'דוד כהן',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'השירות במספרה גמא הוא ברמה אחרת לגמרי. האווירה נעימה, הצוות מקצועי ואדיב, והתוצאה תמיד מעולה. ממליץ בחום!'
  },
  {
    id: 3,
    name: 'רונית שרון',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 4,
    text: 'אני לקוחה קבועה כבר שנתיים. הצוות תמיד מתעדכן בטרנדים החדשים ויודע להתאים את התסרוקת בדיוק לפנים שלי. מקום מקצועי עם יחס אישי.'
  },
  {
    id: 4,
    name: 'יוסי אברהם',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'פשוט מדהים! הגעתי עם שיער פגום ויצאתי עם שיער בריא ומראה חדש. המחירים הוגנים והשירות מצוין. בהחלט שווה כל שקל.'
  },
  {
    id: 5,
    name: 'שירה גולן',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'הגעתי למספרה גמא אחרי המלצה של חברה, ואני כל כך שמחה שהקשבתי לה! קיבלתי טיפול VIP מהרגע שנכנסתי. התסרוקת יצאה מושלמת והצבע בדיוק כמו שרציתי.'
  },
  {
    id: 6,
    name: 'נועם ברק',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 4,
    text: 'שירות מעולה ואווירה נעימה. הסטייליסטים מקצועיים ויודעים להקשיב. תמיד יוצא מרוצה ומקבל מחמאות על התספורת. ממליץ בחום!'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(true);
  const [testimonialCount, setTestimonialCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTestimonialCount(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialCount(2);
      } else {
        setTestimonialCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay, testimonialCount]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialCount >= testimonials.length 
        ? 0 
        : prevIndex + testimonialCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - testimonialCount < 0 
        ? Math.max(0, testimonials.length - testimonialCount) 
        : prevIndex - testimonialCount
    );
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`inline-block ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + testimonialCount, testimonials.length)
  );

  return (
    <section 
      id="testimonials" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            הלקוחות שלנו <span className="text-[#FF6B6B]">מספרים</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו גאים בחוויה שאנו מעניקים ללקוחותינו. הנה מה שהם אומרים עלינו
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <div className="flex flex-wrap justify-center gap-6">
                  {visibleTestimonials.map((testimonial) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] p-6 rounded-2xl bg-white backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 shadow-[0_10px_20px_rgba(0,0,0,0.05),_inset_0_-3px_0_rgba(0,0,0,0.05)]"
                      style={{
                        boxShadow: '8px 8px 16px rgba(174, 174, 192, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.6), inset 1px 1px 1px rgba(255, 255, 255, 0.7)'
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '12px 12px 20px rgba(174, 174, 192, 0.3), -12px -12px 20px rgba(255, 255, 255, 0.8), inset 1px 1px 1px rgba(255, 255, 255, 0.7)',
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#4ECDC4] ml-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="text-right">
                          <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                          <div className="mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="absolute top-0 right-0 w-10 h-10 text-[#FF6B6B] opacity-10 -mt-3 -mr-3" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 text-right leading-relaxed">{testimonial.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,0,0.1),_-4px_-4px_10px_rgba(255,255,255,0.8),_inset_1px_1px_1px_rgba(255,255,255,0.4)]"
              aria-label="הקודם"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2 items-center">
              {Array(Math.ceil(testimonials.length / testimonialCount)).fill(0).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * testimonialCount)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === Math.floor(currentIndex / testimonialCount)
                      ? 'bg-[#FF6B6B] w-6'
                      : 'bg-gray-300 hover:bg-[#4ECDC4]'
                  }`}
                  aria-label={`עבור לסט עדויות ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 shadow-[4px_4px_10px_rgba(0,0,0,0.1),_-4px_-4px_10px_rgba(255,255,255,0.8),_inset_1px_1px_1px_rgba(255,255,255,0.4)]"
              aria-label="הבא"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;