'use client';

import { motion } from 'framer-motion';
import { Wrench, Building2, Truck } from 'lucide-react';

const clients = [
  {
    name: 'PT Pratama Putra Otomotif',
    category: 'Car Workshop',
    icon: Wrench,
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
  },
  {
    name: 'PT Tiga Perkasa Teknik',
    category: 'Konstruksi',
    icon: Building2,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
  },
  {
    name: 'PT Pemuda Patriot Rentalindo',
    category: 'Towing & Rental',
    icon: Truck,
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
  },
];

export default function ClientLogosSection() {
  // Duplicate many times for truly seamless infinite scroll
  const duplicated = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section id="klien" className="py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-imogi-secondary mb-2">
            Dipercaya Oleh
          </p>
          <h2 className="text-2xl font-bold text-foreground">Klien Kami</h2>
        </motion.div>
      </div>

      {/* Infinite scroll marquee using CSS animation for smooth seamless loop */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {duplicated.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className={`marquee-card flex-shrink-0 flex items-center gap-4 px-6 py-5 rounded-xl border ${client.borderColor} ${client.bgColor} transition-all hover:shadow-md`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <Icon className={`w-6 h-6 ${client.iconColor}`} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-foreground leading-tight">
                    {client.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {client.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}