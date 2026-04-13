import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-obsidian py-20">
            {/* Background Image with Deep Parallax Feel */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/snitch_editorial.png" 
                    alt="Editorial Hero" 
                    className="w-full h-full object-cover opacity-20 md:opacity-30 mix-blend-luminosity scale-110 hover:scale-100 transition-transform duration-[40s] ease-out object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/40 to-obsidian"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/60 md:from-obsidian/40 md:to-obsidian/40"></div>
            </div>

            {/* Content */}
            <div className="container-res relative z-10 w-full">
                <div className="max-w-7xl mx-auto text-center space-y-8 md:space-y-12">
                    <div className="space-y-4 md:space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold rounded-full border border-gold/20 mb-2 md:mb-4 animate-fade-in shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                            Editorial Series 01 / Vault
                        </span>
                        
                        <h1 className="text-white font-serif font-medium tracking-tighter leading-[0.85] animate-slide-up" style={{ fontSize: 'var(--font-size-hero)' }}>
                            Refine Your <br />
                            <span className="gold-gradient-text italic">Identity.</span>
                        </h1>
                    </div>
                    
                    <p className="max-w-xl mx-auto text-slate-muted text-base md:text-xl font-light leading-relaxed animate-fade-in delay-500 px-4">
                        A curated sanctuary for the modern disruptor. 
                        Defining the intersection of raw craftsmanship and pure aesthetic.
                    </p>

                    <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 animate-fade-in delay-700">
                        <Link to="/register" className="btn-gold w-full sm:min-w-[240px]">
                            Enter the Vault
                        </Link>
                        <Link to="#" className="group flex items-center gap-6 text-white text-[10px] tracking-[0.4em] uppercase font-bold transition-all duration-300">
                            The Collection
                            <div className="h-px w-12 md:w-16 bg-white/20 group-hover:w-24 group-hover:bg-gold transition-all duration-500"></div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 opacity-40 animate-bounce">
                <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white [writing-mode:vertical-lr] mb-2">Discover</span>
                <div className="w-px h-10 md:h-16 bg-gradient-to-b from-gold to-transparent"></div>
            </div>

            {/* Decorative Brackets - Hidden on small mobile */}
            <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 w-4 h-[200px] md:h-[400px] border-l border-white/5 hidden sm:block"></div>
            <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 w-4 h-[200px] md:h-[400px] border-r border-white/5 hidden sm:block"></div>
        </section>
    );
};

export default Hero;
