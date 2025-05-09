'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Define types for gallery items
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'haircuts' | 'coloring' | 'styling';
  width: number;
  height: number;
}

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'תספורת נשים מודרנית',
    category: 'haircuts',
    width: 800,
    height: 1000
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'צביעת שיער בלונד',
    category: 'coloring',
    width: 800,
    height: 600
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'עיצוב שיער לאירוע',
    category: 'styling',
    width: 800,
    height: 1200
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'תספורת גבר אופנתית',
    category: 'haircuts',
    width: 800,
    height: 800
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1622288432450-277d0fef9f36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'צביעת שיער בגוונים מיוחדים',
    category: 'coloring',
    width: 800,
    height: 1000
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'עיצוב שיער לכלות',
    category: 'styling',
    width: 800,
    height: 600
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'תספורת בוב מודרנית',
    category: 'haircuts',
    width: 800,
    height: 900
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1562594980-47b089cecdb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'צביעת שיער אומברה',
    category: 'coloring',
    width: 800,
    height: 1100
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    alt: 'עיצוב שיער גלי',
    category: 'styling',
    width: 800,
    height: 800
  }
];

// Category translations
const categoryTranslations = {
  'all': 'הכל',
  'haircuts': 'תספורות',
  'coloring': 'צביעה',
  'styling': 'עיצוב'
};

type CategoryType = 'all' | 'haircuts' | 'coloring' | 'styling';

const HairSalonGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [touchStart, setTouchStart] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Handle image click to open lightbox
  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('next'); // Reversed for RTL
      } else if (e.key === 'ArrowRight') {
        navigateImage('prev'); // Reversed for RTL
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems]);

  // Handle touch events for swiping in lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigateImage('prev'); // Reversed for RTL
      } else {
        navigateImage('next'); // Reversed for RTL
      }
    }
  };

  // Close lightbox when clicking outside the image
  const handleLightboxClick = (e: React.MouseEvent) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery-section" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-right mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">הגלריה שלנו</h2>
          <p className="text-lg text-gray-600">
            תוצאות מרהיבות מהעבודות האחרונות שלנו
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-end gap-3 mb-8">
          {(['all', 'haircuts', 'coloring', 'styling'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#FF6B6B] text-white shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]' 
                  : 'bg-white text-gray-700 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)]'}
                hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]
              `}
            >
              {categoryTranslations[category]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-xl bg-white shadow-lg"
              style={{ aspectRatio: item.width / item.height }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 z-10"
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="relative h-full w-full cursor-pointer overflow-hidden"
                onClick={() => handleImageClick(item)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 right-0 p-4 text-white z-20 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-right font-medium">{item.alt}</p>
                  <p className="text-right text-sm">{categoryTranslations[item.category]}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              ref={lightboxRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={handleLightboxClick}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
              >
                <div className="relative w-full h-full">
                  <div className="relative w-full" style={{ 
                    paddingBottom: `${(selectedImage.height / selectedImage.width) * 100}%` 
                  }}>
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      sizes="90vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 bg-black/50 backdrop-blur-sm p-4 text-white">
                    <h3 className="text-xl font-medium text-right">{selectedImage.alt}</h3>
                    <p className="text-sm text-right">{categoryTranslations[selectedImage.category]}</p>
                  </div>
                </div>

                {/* Navigation buttons */}
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4ECDC4]/80 hover:bg-[#4ECDC4] text-white p-3 rounded-full backdrop-blur-sm"
                  aria-label="תמונה קודמת"
                >
                  <FiChevronRight size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#4ECDC4]/80 hover:bg-[#4ECDC4] text-white p-3 rounded-full backdrop-blur-sm"
                  aria-label="תמונה הבאה"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                  className="absolute top-4 left-4 bg-[#FF6B6B]/80 hover:bg-[#FF6B6B] text-white p-3 rounded-full backdrop-blur-sm"
                  aria-label="סגור"
                >
                  <FiX size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HairSalonGallery;