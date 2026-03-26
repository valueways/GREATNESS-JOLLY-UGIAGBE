/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MessageCircle, 
  Calendar, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  ChevronRight, 
  Menu, 
  X, 
  HandHeart, 
  Users, 
  Mic2, 
  BookOpen,
  MapPin,
  Heart,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Constants ---
const CLIENT_INFO = {
  name: "Greatness Jolly Ugiagbe",
  firstName: "Greatness",
  lastName: "Jolly",
  title: "Evangelist",
  tagline: "Transforming Lives, Restoring Families, Raising Global Leaders",
  bio: "He is a keynote speaker, visionary leader, seasoned minister, author, and relationship coach with a passionate commitment to restoring families, equipping global leaders, and transforming nations.",
  ministry: "GOD'S DELIVERANCE MINISTRY INTERNATIONAL OUTREACH",
  whatsapp: "+1234567890",
  email: "valueways@gmail.com",
  heroImage: "https://iili.io/qQN8orb.png",
  bgPattern: "https://iili.io/qQwsDdX.png"
};

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const STAGGER_CONTAINER = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ministries', href: '#ministries' },
  { name: 'Events', href: '#events' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const MINISTRIES = [
  {
    name: "Family Restoration",
    description: "Healing broken homes and strengthening foundations through biblical principles and seasoned wisdom.",
    icon: Heart
  },
  {
    name: "Global Leadership",
    description: "Equipping the next generation of spiritual and secular leaders with integrity and vision.",
    icon: Users
  },
  {
    name: "Deliverance Outreach",
    description: "Setting the captives free through the power of the Holy Spirit and intense intercession.",
    icon: HandHeart
  }
];

const EVENTS = [
  {
    name: "Restoration Conference 2026",
    date: "June 15-17",
    type: "Flagship Event"
  },
  {
    name: "Leadership Summit",
    date: "August 22",
    type: "Summit"
  },
  {
    name: "Weekly Online Prayer",
    date: "Every Friday",
    type: "Online"
  }
];

const SERVICES = [
  { name: "Speaking Engagements", icon: Mic2 },
  { name: "Counseling & Mentorship", icon: Users },
  { name: "Prayer & Deliverance", icon: HandHeart },
  { name: "Leadership Training", icon: BookOpen }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6",
      isScrolled ? "bg-white/80 backdrop-blur-xl py-4 border-b border-black/5" : "bg-transparent"
    )}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <a href="#home" className="group flex flex-col">
          <span className={cn(
            "font-serif text-xl font-bold tracking-tight leading-none transition-colors",
            isScrolled ? "text-secondary" : "text-white"
          )}>
            {CLIENT_INFO.firstName.toUpperCase()} <span className="text-accent">{CLIENT_INFO.lastName.toUpperCase()}</span>
          </span>
          <span className={cn(
            "text-[9px] uppercase tracking-[0.4em] font-bold mt-1 transition-colors",
            isScrolled ? "text-secondary/40" : "text-white/40"
          )}>
            {CLIENT_INFO.title}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <motion.a 
              whileHover={{ y: -2 }}
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-[13px] font-semibold uppercase tracking-widest transition-colors",
                isScrolled ? "text-secondary/60 hover:text-secondary" : "text-white/60 hover:text-white"
              )}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className={cn(
              "text-[13px] font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all shadow-lg",
              isScrolled ? "bg-secondary text-white hover:bg-accent shadow-secondary/10" : "bg-white text-secondary hover:bg-accent hover:text-white shadow-white/10"
            )}
          >
            Connect
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className={cn("md:hidden transition-colors", isScrolled ? "text-secondary" : "text-white")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-secondary z-[60] p-12 flex flex-col justify-center space-y-12 md:hidden"
          >
            <button 
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-5xl font-serif text-white hover:text-accent transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-12 border-t border-white/10"
            >
              <p className="text-accent font-black tracking-widest text-[10px] uppercase mb-4">Connect Directly</p>
              <a href={`https://wa.me/${CLIENT_INFO.whatsapp.replace('+', '')}`} className="text-white/60 text-xl hover:text-white transition-colors">
                {CLIENT_INFO.whatsapp}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <motion.div 
    variants={STAGGER_CONTAINER}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className={cn("mb-20 md:mb-32", centered ? "text-center" : "text-left")}
  >
    {subtitle && (
      <motion.span 
        variants={FADE_UP}
        className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      variants={FADE_UP}
      className="text-4xl md:text-6xl font-serif text-secondary text-balance leading-[1.1]"
    >
      {title}
    </motion.h2>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen selection:bg-accent/20">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
        {/* Background Pattern Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
          style={{ 
            backgroundImage: `url(${CLIENT_INFO.bgPattern})`,
            backgroundSize: '800px',
            backgroundRepeat: 'repeat'
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-8 w-full grid lg:grid-cols-12 items-center gap-12 relative z-10 pt-24">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-accent font-black tracking-[0.8em] text-[10px] uppercase mb-8 block"
              >
                {CLIENT_INFO.title} {CLIENT_INFO.name}
              </motion.span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] mb-12 tracking-tight">
                {CLIENT_INFO.tagline.split(', ').map((part, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="text-accent italic">{part}</span> : part}
                    {i < 2 && <span className="hidden lg:inline">,</span>}
                  </span>
                ))}
              </h1>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="btn-premium bg-accent text-secondary hover:bg-white border-none px-12"
                >
                  Request Prayer
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#about" 
                  className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  <span className="w-12 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                  Our Mission
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[80vh] rounded-[3rem] overflow-hidden apple-shadow group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-transparent z-10" />
              <motion.img 
                style={{ scale: heroScale }}
                src={CLIENT_INFO.heroImage} 
                alt={CLIENT_INFO.name} 
                className="w-full h-full object-cover object-top transition-transform duration-[3s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-12 left-12 z-20 glass-surface p-6 rounded-2xl border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-1">Established Ministry</p>
                <p className="text-white text-sm font-serif italic">Restoring Families Globally</p>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-[80px] -z-10" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-8 z-20 hidden lg:flex flex-col items-center gap-4"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold vertical-text rotate-180">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent/40 to-transparent" />
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden apple-shadow"
              >
                <img 
                  src={CLIENT_INFO.bgPattern} 
                  alt="Evangelist Greatness" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
            </div>
            <motion.div 
              variants={STAGGER_CONTAINER}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <SectionHeader title="A Visionary Leader for a Global Generation" subtitle="The Calling" centered={false} />
              <motion.div variants={FADE_UP} className="space-y-8 text-secondary/60 text-lg md:text-xl leading-relaxed font-light">
                <p className="text-secondary font-medium italic">
                  "Ministry is not just a title; it's a commitment to the total restoration of the human soul and the family unit."
                </p>
                <p>
                  {CLIENT_INFO.bio}
                </p>
                <p>
                  With a ministry spanning over two decades, Evangelist Greatness has become a trusted voice in family restoration and leadership development. His mandate is clear: to equip, to empower, and to restore.
                </p>
                <div className="pt-8 flex items-center gap-12">
                  <div>
                    <span className="block text-4xl font-serif text-accent mb-1">20+</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">Years of Impact</span>
                  </div>
                  <div className="w-[1px] h-12 bg-black/5" />
                  <div>
                    <span className="block text-4xl font-serif text-accent mb-1">12</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">Nations Reached</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MINISTRIES SECTION */}
      <section id="ministries" className="section-padding bg-primary relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.01] pointer-events-none"
          style={{ 
            backgroundImage: `url(${CLIENT_INFO.bgPattern})`,
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="max-w-screen-xl mx-auto px-8 relative z-10">
          <SectionHeader title="Core Ministry Pillars" subtitle="Our Focus" />
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {MINISTRIES.map((m, i) => (
              <motion.div 
                key={m.name}
                variants={FADE_UP}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-12 rounded-[2rem] bg-white apple-shadow hover:bg-secondary hover:text-white transition-all duration-700 cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mb-10 group-hover:bg-white/10 group-hover:text-white transition-all">
                  <m.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-6">{m.name}</h3>
                <p className="text-secondary/50 group-hover:text-white/60 leading-relaxed mb-8 font-light">
                  {m.description}
                </p>
                <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. EVENTS SECTION */}
      <section id="events" className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">Calendar</span>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary leading-tight">Upcoming Encounters</h2>
            </div>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-accent hover:text-secondary transition-colors flex items-center gap-2">
              View Full Calendar <ArrowUpRight size={18} />
            </a>
          </div>

          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {EVENTS.map((event, i) => (
              <motion.div 
                key={event.name}
                variants={FADE_UP}
                whileHover={{ x: 10 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-10 md:p-14 rounded-[2rem] hover:bg-primary transition-all duration-500 border border-black/5 cursor-pointer"
              >
                <div className="flex items-center gap-12 mb-6 md:mb-0">
                  <span className="text-4xl md:text-5xl font-serif text-secondary/10 group-hover:text-accent transition-colors">0{i+1}</span>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2 block">{event.type}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-secondary">{event.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-12">
                  <span className="text-lg font-medium text-secondary/40">{event.date}</span>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="section-padding bg-secondary text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-soft-light"
          style={{ 
            backgroundImage: `url(${CLIENT_INFO.bgPattern})`,
            backgroundSize: '600px',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="max-w-screen-xl mx-auto px-8 relative z-10">
          <SectionHeader title="Specialized Ministry Support" subtitle="Services" />
          <motion.div 
            variants={STAGGER_CONTAINER}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden"
          >
            {SERVICES.map((s, i) => (
              <motion.div 
                key={s.name} 
                variants={FADE_UP}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="p-12 bg-secondary transition-colors group cursor-pointer"
              >
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                  <s.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif mb-4 leading-snug">{s.name}</h3>
                <p className="text-white/40 text-sm font-light">Professional and spiritual guidance tailored to your specific needs.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-black/[0.02] whitespace-nowrap pointer-events-none">
          Testimonials
        </div>
        <div className="max-w-screen-lg mx-auto px-8 relative z-10 text-center">
          <SectionHeader title="Voices of Restoration" subtitle="Impact" />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12"
          >
            <p className="text-3xl md:text-5xl font-serif text-secondary leading-tight italic">
              "Evangelist Greatness has a unique gift for restoring families. Our marriage was on the brink, but his counsel saved us."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-accent/20 overflow-hidden">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">The Williams Family</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <SectionHeader title="Let's Begin the Journey" subtitle="Connect" centered={false} />
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2 block">Direct Email</span>
                  <a href={`mailto:${CLIENT_INFO.email}`} className="text-2xl md:text-3xl font-serif text-secondary hover:text-accent transition-colors">
                    {CLIENT_INFO.email}
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2 block">WhatsApp Support</span>
                  <a href={`https://wa.me/${CLIENT_INFO.whatsapp.replace('+', '')}`} className="text-2xl md:text-3xl font-serif text-secondary hover:text-accent transition-colors">
                    {CLIENT_INFO.whatsapp}
                  </a>
                </div>
                <div className="pt-12 flex gap-8">
                  <a href="#" className="text-secondary/40 hover:text-accent transition-colors"><Instagram size={24} /></a>
                  <a href="#" className="text-secondary/40 hover:text-accent transition-colors"><Facebook size={24} /></a>
                  <a href="#" className="text-secondary/40 hover:text-accent transition-colors"><Youtube size={24} /></a>
                </div>
              </div>
            </div>
            <div className="glass-surface p-12 md:p-16 rounded-[3rem] apple-shadow">
              <form className="space-y-10">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-accent outline-none transition-all text-lg font-medium" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-black/10 py-4 focus:border-accent outline-none transition-all text-lg font-medium" placeholder="hello@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-secondary/40">Message</label>
                  <textarea className="w-full bg-transparent border-b border-black/10 py-4 focus:border-accent outline-none transition-all text-lg font-medium min-h-[120px]" placeholder="How can we help?"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium w-full"
                >
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-24 bg-primary border-t border-black/5">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-24">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-tight text-secondary leading-none">
                {CLIENT_INFO.firstName.toUpperCase()} <span className="text-accent">{CLIENT_INFO.lastName.toUpperCase()}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-secondary/40 font-bold mt-2">
                {CLIENT_INFO.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-12">
              {NAV_LINKS.map(link => (
                <a key={link.name} href={link.href} className="text-[11px] font-bold uppercase tracking-widest text-secondary/40 hover:text-secondary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-black/5 text-[10px] uppercase tracking-widest font-bold text-secondary/20">
            <p>© {new Date().getFullYear()} {CLIENT_INFO.name}. All Rights Reserved.</p>
            <p className="font-serif italic text-sm normal-case tracking-normal">"Transforming Lives, Restoring Families"</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        href={`https://wa.me/${CLIENT_INFO.whatsapp.replace('+', '')}`} 
        className="fixed bottom-12 right-12 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl z-50 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      </motion.a>
    </div>
  );
}
