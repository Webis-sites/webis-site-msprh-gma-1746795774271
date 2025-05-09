import './globals.css';
import { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

// הגדרת הפונט העברי
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

// הגדרת המטא-דאטה של האתר
export const metadata: Metadata = {
  title: 'מספרה גמא - מספרה מקצועית ואיכותית',
  description: 'מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'מספרה, שירות, איכות, מקצועיות, ישראל',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.misparaGamma.co.il',
    title: 'מספרה גמא - מספרה מקצועית ואיכותית',
    description: 'מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    siteName: 'מספרה גמא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
        width: 1200,
        height: 630,
        alt: 'מספרה גמא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מספרה גמא - מספרה מקצועית ואיכותית',
    description: 'מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035'],
  },
  viewport: 'width=device-width, initial-scale=1',
};

// הגדרת סכמה עבור עסק מקומי
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'מספרה גמא',
  description: 'אנחנו מספרה מוביל בתחום האופנה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  url: 'https://www.misparaGamma.co.il',
  telephone: '+972-XX-XXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'רחוב הדוגמה 123',
    addressLocality: 'תל אביב',
    postalCode: '6100000',
    addressCountry: 'IL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '32.0853',
    longitude: '34.7818',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
  priceRange: '₪₪',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 text-right min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}