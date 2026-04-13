import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-charcoal pt-32 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="text-white text-3xl font-serif tracking-widest uppercase">
                            Snitch<span className="text-gold">.</span>
                        </Link>
                        <p className="text-slate-muted text-sm font-light leading-relaxed max-w-xs">
                            Defining the aesthetic of the modern disruptor. Pure craftsmanship, minimal design, global influence.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h4 className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Collections</h4>
                        <ul className="space-y-4 text-slate-muted text-xs font-light tracking-wide">
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Men's Editorial</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Women's Elite</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">The Objects</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Signature Series</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Company</h4>
                        <ul className="space-y-4 text-slate-muted text-xs font-light tracking-wide">
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Our Philosophy</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Sustainability</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">The Vault</li>
                            <li className="hover:text-gold transition-colors cursor-pointer underline-offset-4 hover:underline decoration-gold/30">Contact</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <h4 className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Newsletter</h4>
                        <p className="text-slate-muted text-xs font-light tracking-wide">Join the movement for exclusive drops and aesthetic insights.</p>
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="E-MAIL ADDRESS" 
                                className="w-full bg-transparent border-b border-white/10 py-3 text-[10px] tracking-widest text-white outline-none focus:border-gold transition-all duration-500 placeholder:text-slate-muted/50"
                            />
                            <button className="absolute right-0 bottom-3 text-gold text-[10px] tracking-widest font-bold opacity-40 group-focus-within:opacity-100 transition-opacity">
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[10px] tracking-[0.2em] text-slate-muted font-bold flex gap-8">
                        <span className="cursor-pointer hover:text-white transition-colors uppercase">Instagram</span>
                        <span className="cursor-pointer hover:text-white transition-colors uppercase">Twitter</span>
                        <span className="cursor-pointer hover:text-white transition-colors uppercase">YouTube</span>
                    </div>
                    <p className="text-[10px] tracking-widest uppercase text-slate-muted/50">
                        © 2026 Snitch. All rights reserved. Designed in the Vault.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
