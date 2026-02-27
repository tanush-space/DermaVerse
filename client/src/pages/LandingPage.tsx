import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Heart, Droplets, Sun, Wind } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A25] overflow-hidden relative selection:bg-[#D97757]/30">
      <div className="absolute inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay" />
      
      {/* Navigation */}
      <nav className="relative z-40 flex items-center justify-between px-8 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D97757] flex items-center justify-center shadow-lg shadow-[#D97757]/20">
            <Sparkles className="w-5 h-5 text-[#FDFBF7]" />
          </div>
          <span className="text-2xl font-serif font-medium tracking-tight">DermaVerse</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[#5A6B5D] uppercase tracking-widest">
          <a href="#philosophy" className="hover:text-[#D97757] transition-colors">Philosophy</a>
          <a href="#intelligence" className="hover:text-[#D97757] transition-colors">Intelligence</a>
          <a href="#stories" className="hover:text-[#D97757] transition-colors">Stories</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="hidden sm:inline-flex uppercase tracking-widest text-xs">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button className="uppercase tracking-widest text-xs">Begin Journey</Button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-12 pb-32 px-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative z-20"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#EDE8E0] bg-white/50 backdrop-blur-sm text-[#5A6B5D] text-xs font-medium uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />
                A new era of skin health
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif leading-[0.9] text-[#2C2A25] mb-8">
                Your skin, <br />
                <span className="italic text-[#5A6B5D]">understood.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#5A6B5D] mb-12 max-w-xl leading-relaxed font-light">
                Preventive dermatology powered by clinical intelligence. We track, analyze, and adapt to your unique biology.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link to="/signup">
                  <Button size="lg" variant="accent" className="w-full sm:w-auto h-16 px-10 text-base shadow-xl shadow-[#D97757]/20">
                    Start Your Analysis <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-4 text-sm font-medium text-[#5A6B5D]">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} alt="User" referrerPolicy="no-referrer" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" />
                    ))}
                  </div>
                  <span>Join 10k+ members</span>
                </div>
              </div>
            </motion.div>

            {/* Right Imagery */}
            <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] w-full hidden md:block">
              {/* Decorative Blobs */}
              <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#F4EBE6] rounded-full blur-[80px] -z-10" />
              <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-[#E8EFEA] rounded-full blur-[60px] -z-10" />

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-10 right-10 w-64 h-[400px] rounded-[100px] overflow-hidden border-8 border-white shadow-2xl z-20"
              >
                <img src="https://picsum.photos/seed/skincare1/400/600" alt="Skin texture" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-20 left-0 w-72 h-[350px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-30"
              >
                <img src="https://picsum.photos/seed/skincare2/400/500" alt="Application" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                
                {/* Floating Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5A6B5D] flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2C2A25]">Barrier Health</p>
                    <p className="text-sm font-serif text-[#5A6B5D] italic">Improving steadily</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-10 border-y border-[#EDE8E0] bg-white overflow-hidden flex">
          <motion.div 
            className="flex whitespace-nowrap gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center text-2xl font-serif italic text-[#5A6B5D]">
                <span>Clinical Precision</span>
                <span className="w-2 h-2 rounded-full bg-[#D97757]" />
                <span>Holistic Approach</span>
                <span className="w-2 h-2 rounded-full bg-[#D97757]" />
                <span>Longitudinal Tracking</span>
                <span className="w-2 h-2 rounded-full bg-[#D97757]" />
                <span>Environmental Adaptation</span>
                <span className="w-2 h-2 rounded-full bg-[#D97757]" />
              </div>
            ))}
          </motion.div>
        </section>

        {/* Bento Grid Features */}
        <section id="intelligence" className="py-32 px-8 max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-[#2C2A25] mb-6">A Symphony of Data</h2>
            <p className="text-xl text-[#5A6B5D] max-w-2xl mx-auto font-light">We don't just look at your skin. We look at your environment, your habits, and your history.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Feature */}
            <div className="md:col-span-2 rounded-[2rem] bg-[#F4EBE6] p-10 relative overflow-hidden group">
              <div className="relative z-10 w-2/3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#D97757]" />
                </div>
                <h3 className="text-3xl font-serif text-[#2C2A25] mb-4">Neural Vision Analysis</h3>
                <p className="text-[#5A6B5D] text-lg leading-relaxed">Our clinical-grade AI detects over 40 distinct biomarkers, from subtle erythema to micro-pigmentation, invisible to the naked eye.</p>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                <img src="https://picsum.photos/seed/abstract1/600/600" alt="Abstract" referrerPolicy="no-referrer" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="rounded-[2rem] bg-[#5A6B5D] p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                  <Sun className="w-6 h-6 text-[#FDFBF7]" />
                </div>
                <h3 className="text-2xl font-serif mb-3">Environmental Sync</h3>
                <p className="text-[#EDE8E0] leading-relaxed">Real-time adaptation to local UV, humidity, and AQI.</p>
              </div>
            </div>

            {/* Small Feature 2 */}
            <div className="rounded-[2rem] bg-white border border-[#EDE8E0] p-10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#FDFBF7] flex items-center justify-center mb-6 border border-[#EDE8E0]">
                <Droplets className="w-6 h-6 text-[#5A6B5D]" />
              </div>
              <h3 className="text-2xl font-serif text-[#2C2A25] mb-3">Barrier Tracking</h3>
              <p className="text-[#5A6B5D] leading-relaxed">Monitor your stratum corneum health longitudinally.</p>
            </div>

            {/* Medium Feature */}
            <div className="md:col-span-2 rounded-[2rem] bg-[#2C2A25] p-10 text-[#FDFBF7] relative overflow-hidden flex items-center">
              <div className="w-1/2 pr-8 relative z-10">
                <h3 className="text-3xl font-serif mb-4">Dermatologist Connected</h3>
                <p className="text-[#EDE8E0] text-lg leading-relaxed mb-8">Share your rich, longitudinal data directly with board-certified professionals for precise interventions.</p>
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white hover:text-[#2C2A25]">
                  Explore Network
                </Button>
              </div>
              <div className="w-1/2 h-full absolute right-0 top-0">
                <img src="https://picsum.photos/seed/doc3/600/400" alt="Doctor" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A25] to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-[#EDE8E0] py-16 px-8">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D97757] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#FDFBF7]" />
              </div>
              <span className="text-xl font-serif font-medium text-[#2C2A25]">DermaVerse</span>
            </div>
            <div className="text-sm font-medium text-[#5A6B5D] uppercase tracking-widest">
              © {new Date().getFullYear()} DermaVerse Intelligence.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
