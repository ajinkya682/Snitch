import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const navLinks = ['Collections', 'Vault', 'Editorial', 'Our Story'];

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
                    scrolled 
                    ? 'bg-obsidian/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' 
                    : 'bg-transparent py-6 md:py-8'
                }`}
            >
                <div className="container-res flex items-center justify-between">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white text-xl md:text-2xl font-serif tracking-widest uppercase group"
                    >
                        Snitch<span className="text-gold group-hover:text-white transition-colors">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((item) => (
                            <Link 
                                key={item} 
                                to="#" 
                                className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-muted hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Actions & Hamburger */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link to="/login" className="hidden sm:block text-[10px] tracking-[0.3em] uppercase font-bold text-slate-muted hover:text-white transition-colors">
                            Sign In
                        </Link>
                        <Link 
                            to="/register" 
                            className="bg-white text-obsidian px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gold transition-colors block"
                        >
                            Join
                        </Link>
                        
                        {/* Hamburger */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden flex flex-col gap-1.5 z-[70] p-2 group"
                            aria-label="Toggle Menu"
                        >
                            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 z-[55] lg:hidden bg-obsidian transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="flex flex-col h-full pt-32 px-8 pb-12">
                    <div className="flex-1 space-y-8">
                        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold">Navigation</span>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <Link 
                                    key={item} 
                                    to="#" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl sm:text-5xl font-serif italic text-white hover:text-gold transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    <div className="pt-12 border-t border-white/5 space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold">Access</span>
                                <div className="flex flex-col gap-3">
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-chrome text-xs uppercase tracking-widest">Sign In</Link>
                                    <Link to="/register" onClick={() => setIsMenuOpen(false)} className="text-chrome text-xs uppercase tracking-widest">Register</Link>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold">Connect</span>
                                <div className="flex flex-col gap-3">
                                    <span className="text-chrome text-xs uppercase tracking-widest">Instagram</span>
                                    <span className="text-chrome text-xs uppercase tracking-widest">Twitter</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] tracking-[0.2em] text-slate-muted uppercase italic">© 2026 Designed in the Vault.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
