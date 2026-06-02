'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WA_NUMBER = '6285311552401';

const solutionLabels: Record<string, string> = {
  konstruksi: 'ERPNext untuk Konstruksi',
  fleet: 'ERPNext untuk Fleet Management',
  bengkel: 'ERPNext untuk Bengkel',
  custom: 'Kustomisasi Lainnya',
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    nama: '',
    perusahaan: '',
    email: '',
    telepon: '',
    solusi: '',
    pesan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const solusiText = solutionLabels[form.solusi] || '-';

    const message = `Halo, saya ingin konsultasi mengenai layanan IMOGI.

*Nama:* ${form.nama || '-'}
*Perusahaan:* ${form.perusahaan || '-'}
*Email:* ${form.email || '-'}
*Telepon:* ${form.telepon || '-'}
*Solusi:* ${solusiText}
*Pesan:* ${form.pesan || '-'}

Terima kasih.`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 transition-all text-sm';

  return (
    <section id="kontak" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-imogi-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-imogi-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-imogi-secondary/10 text-imogi-secondary text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kami Ingin Mendegar dari Anda?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Isi formulir di bawah dan pesan Anda akan langsung terkirim ke WhatsApp kami.
          </p>
        </motion.div>

        {/* Email, WhatsApp & Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <a
            href="mailto:imogi.indonesia@gmail.com"
            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-imogi-secondary/30 hover:shadow-md transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm font-semibold text-foreground group-hover:text-imogi-secondary transition-colors">
                imogi.indonesia@gmail.com
              </div>
            </div>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>Jakarta, Indonesia</span>
          </div>
        </motion.div>

        {/* Contact Form → WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-muted/40 border border-border rounded-3xl p-8"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Nama Lengkap</label>
                <input
                  name="nama"
                  type="text"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Perusahaan</label>
                <input
                  name="perusahaan"
                  type="text"
                  value={form.perusahaan}
                  onChange={handleChange}
                  placeholder="PT. Contoh"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">No. Telepon</label>
                <input
                  name="telepon"
                  type="tel"
                  value={form.telepon}
                  onChange={handleChange}
                  placeholder="+62 812 3456 7890"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Solusi yang Diminati</label>
              <select
                name="solusi"
                value={form.solusi}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 transition-all text-sm appearance-none"
              >
                <option value="">Pilih solusi...</option>
                <option value="konstruksi">ERPNext untuk Konstruksi</option>
                <option value="fleet">ERPNext untuk Fleet Management</option>
                <option value="bengkel">ERPNext untuk Bengkel</option>
                <option value="custom">Kustomisasi Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground mb-1.5">Pesan</label>
              <textarea
                name="pesan"
                rows={4}
                value={form.pesan}
                onChange={handleChange}
                placeholder="Ceritakan kebutuhan Anda..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 transition-all text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-12 rounded-xl text-base font-semibold"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Kirim via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
