'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, ShieldCheck, Globe } from 'lucide-react';


const slides = [
  {
    headline: 'Fleet Management Cerdas & Otomatis',
    subtitle: 'Monitoring armada secara real-time, kontrol BBM, dispatch otomatis, dan maintenance reminder — semua dalam satu platform ERPNext.',
    image: '/hero-fleet.png',
  },
  {
    headline: 'Manajemen Proyek Konstruksi Terintegrasi',
    subtitle: 'Dari perencanaan RAB, penjadwalan, pengadaan material, hingga progress claim dan billing — terhubung tanpa celah.',
    image: '/hero-konstruksi.png',
  },
  {
    headline: 'Operasional Bengkel Digital & Efisien',
    subtitle: 'Antrian digital, inventory suku cadang, manajemen mekanik, dan billing otomatis untuk bengkel modern.',
    image: '/hero-bengkel.png',
  },
];

const badges = [
  { icon: Monitor, label: 'Real-time Monitoring' },
  { icon: ShieldCheck, label: 'Data Terjamin' },
  { icon: Globe, label: 'Akses dari Mana Saja' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="beranda"
      className="relative h-[85vh] pt-[72px] overflow-hidden"
    >
      {/* Background Image - Berganti per slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay gelap dari kiri */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
          {/* Gradient overlay gelap dari bawah */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {badges.map((badge) => (
                <Badge
                  key={badge.label}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white/90 gap-1.5 px-3 py-1 text-xs"
                >
                  <badge.icon className="w-3.5 h-3.5 text-imogi-accent" />
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Carousel Headline */}
            <div className="relative h-[120px] sm:h-[100px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {slides[current].headline}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-imogi-secondary hover:bg-imogi-secondary/90 text-white gap-2 h-12 px-6"
                asChild
              >
                <a href="https://wa.me/6285311552401" target="_blank" rel="noopener noreferrer">
                  Konsultasi Sekarang
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
              </Button>

            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === current
                    ? 'w-8 bg-imogi-secondary'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Kosong, biar gambar background kelihatan */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}