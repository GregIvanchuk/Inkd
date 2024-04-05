import './globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tattoo Studio - Inkd by Mary Ann',
  description: 'Discover the highest quality in tattoo artistry at Inkd by Mary Ann. Our experienced studio offers customized tattoo solutions for unique body art in Germany. Experience carefree service from consultation to the final inked masterpiece.',
  keywords: 'Tattoo, Tattoo Studio, Body Art, Tattoo Artist, Tattoo Design, Tattoo Consultation, Tattoo Parlor, Tattoo Shop, Tattoo Service, Tattooist, Tattooist Germany, Modern Tattoo Designs, Custom Tattoos, Tattoo Planning, Tattoo Projects, Realize Tattoo Dreams, Tattoo Artist Expertise, Tattoo Financing, Tattoo Licensing, Eco-Friendly Tattooing, Skin Art, Permanent Ink, Inked by Mary Ann, Mary Ann Tattoo Studio, Inked Body Art, Tattoo Portfolio, Tattoo Consultation, Tattoo Ideas, Tattoo Styles'
}

const locales = ['de', 'uk'];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
