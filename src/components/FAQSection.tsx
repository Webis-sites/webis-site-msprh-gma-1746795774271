"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiScissors, FiClock, FiCalendar, FiDollarSign, FiUsers, FiPhone, FiMapPin, FiAlertCircle } from "react-icons/fi";
import Image from "next/image";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: "services",
      question: "אילו שירותים אתם מציעים במספרה?",
      answer: "אנו מציעים מגוון רחב של שירותים כולל תספורות לנשים וגברים, צביעת שיער, החלקות, טיפולי שיער מתקדמים, עיצוב שיער לאירועים מיוחדים, טיפולי קרקפת, ועוד. הצוות המקצועי שלנו מתמחה בכל סוגי השיער ומעודכן בטרנדים האחרונים.",
      icon: <FiScissors />
    },
    {
      id: "booking",
      question: "איך אפשר לקבוע תור?",
      answer: "ניתן לקבוע תור בכמה דרכים: דרך האתר שלנו, באמצעות שיחת טלפון למספר 03-1234567, או דרך האפליקציה שלנו. אנו ממליצים לקבוע תור מראש לפחות שבוע לפני המועד הרצוי, במיוחד בסופי שבוע ובתקופות עמוסות.",
      icon: <FiCalendar />
    },
    {
      id: "cancellation",
      question: "מה מדיניות הביטולים שלכם?",
      answer: "אנו מבקשים להודיע על ביטול תור לפחות 24 שעות מראש. ביטול בהתראה קצרה יותר או אי-הגעה לתור עלולים לגרור חיוב של 50% מעלות הטיפול המתוכנן. אנו מבינים שדברים בלתי צפויים קורים, אז במקרים מיוחדים אנא צרו קשר ונשתדל להתחשב.",
      icon: <FiAlertCircle />
    },
    {
      id: "pricing",
      question: "מה המחירים של הטיפולים השונים?",
      answer: "המחירים משתנים בהתאם לסוג הטיפול, אורך השיער, והספר המטפל. תספורות נעות בין 120-250 ₪, צביעת שיער בין 200-500 ₪, והחלקות בין 400-1200 ₪. לקבלת הצעת מחיר מדויקת, מומלץ להתייעץ עם הצוות שלנו בפגישת ייעוץ קצרה ללא עלות.",
      icon: <FiDollarSign />
    },
    {
      id: "duration",
      question: "כמה זמן אורכים הטיפולים השונים?",
      answer: "משך הטיפול תלוי בסוג השירות: תספורת רגילה אורכת כ-30-60 דקות, צביעת שיער כ-90-120 דקות, החלקות כ-2-4 שעות. בעת קביעת התור, הצוות שלנו יעדכן אותך לגבי משך הזמן המשוער של הטיפול הספציפי שלך.",
      icon: <FiClock />
    },
    {
      id: "stylists",
      question: "האם אפשר לבחור ספר/ית מסוים/ת?",
      answer: "בהחלט! אנו מעודדים לקוחות לבחור את הספר/ית המועדף/ת עליהם. לכל אחד מאנשי הצוות שלנו יש התמחויות וסגנונות ייחודיים. אם זהו ביקורך הראשון, נשמח להמליץ על ספר/ית המתאים/ה לסוג השיער שלך ולסגנון המבוקש.",
      icon: <FiUsers />
    },
    {
      id: "location",
      question: "היכן אתם ממוקמים ומה שעות הפעילות?",
      answer: "המספרה שלנו ממוקמת ברחוב הרצל 45, תל אביב. שעות הפעילות שלנו הן: ימים א'-ה' 9:00-20:00, יום ו' 9:00-15:00, שבת - סגור. בחגים יתכנו שינויים בשעות הפעילות, אז מומלץ לבדוק מראש.",
      icon: <FiMapPin />
    },
    {
      id: "contact",
      question: "איך ניתן ליצור איתכם קשר בנוגע לשאלות נוספות?",
      answer: "ניתן ליצור איתנו קשר במספר דרכים: טלפון: 03-1234567, וואטסאפ: 050-1234567, אימייל: info@gamma-salon.co.il, או דרך עמוד הפייסבוק והאינסטגרם שלנו. אנו משתדלים לענות לכל הפניות תוך 24 שעות.",
      icon: <FiPhone />
    }
  ];

  return (
    <div id="faq-section" dir="rtl" className="w-full max-w-5xl mx-auto px-4 py-12 font-sans">
      <div className="relative mb-12 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="מספרה גמא - תמונת רקע"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative z-10 backdrop-blur-md bg-white/30 p-8 md:p-12 rounded-2xl border border-white/20 shadow-lg">
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">שאלות נפוצות</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              כל מה שרצית לדעת על השירותים שלנו במספרה גמא
            </p>
            <div className="h-1 w-32 bg-gradient-to-l from-[#FF6B6B] to-[#4ECDC4] rounded-full mr-auto ml-0"></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden"
          >
            <div
              className={`
                relative 
                bg-white 
                shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] 
                rounded-xl 
                transition-all 
                duration-300
                ${activeIndex === item.id ? 'bg-gradient-to-l from-[#FF6B6B]/10 to-[#4ECDC4]/10' : 'hover:shadow-[8px_8px_20px_rgba(0,0,0,0.07),-8px_-8px_20px_rgba(255,255,255,0.9)]'}
              `}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="flex items-center justify-between w-full p-5 text-right focus:outline-none focus:ring-2 focus:ring-[#4ECDC4] focus:ring-opacity-50 rounded-xl"
                aria-expanded={activeIndex === item.id}
                aria-controls={`content-${item.id}`}
              >
                <motion.div
                  animate={{ rotate: activeIndex === item.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#FF6B6B] text-xl"
                >
                  <FiChevronLeft />
                </motion.div>
                
                <div className="flex items-center gap-3 flex-1 justify-end">
                  <span className="font-semibold text-lg text-gray-800">{item.question}</span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B6B]/20 to-[#4ECDC4]/20 text-[#FF6B6B]">
                    {item.icon}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === item.id && (
                  <motion.div
                    id={`content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-200">
                      <div className="backdrop-blur-sm bg-white/50 p-4 rounded-lg text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 backdrop-blur-sm border border-white/30 shadow-lg text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">יש לך שאלה שלא מופיעה כאן?</h3>
        <p className="text-gray-700 mb-4">אנחנו כאן כדי לעזור! צרו איתנו קשר ונשמח לענות על כל שאלה</p>
        <button className="px-6 py-3 bg-[#FF6B6B] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#ff5252] transform hover:-translate-y-1">
          צרו קשר
        </button>
      </div>
    </div>
  );
};

export default FAQSection;