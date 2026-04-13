import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Landing = () => {
    // Mock data for featured collection
    const featuredProducts = [
        { id: 1, title: 'Oversized Silk Blazer', category: 'Mens', price: '$450.00', image: '/mens_editorial.png' },
        { id: 2, title: 'Minimalist Drape Dress', category: 'Womens', price: '$380.00', image: '/womens_editorial.png' },
        { id: 3, title: 'Signature Chronograph', category: 'Accessories', price: '$1,200.00', image: '/accessories_editorial.png' },
        { id: 4, title: 'Raw Denim Trousers', category: 'Mens', price: '$220.00', image: '/snitch_editorial.png' },
    ];

    return (
        <main className="min-h-screen bg-obsidian">
            <Navbar />
            <Hero />
            
            <CategoryGrid />

            {/* Featured Collection */}
            <section className="py-20 md:py-32 bg-charcoal">
                <div className="container-res">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20 gap-8">
                        <div>
                            <span className="text-gold text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block underline underline-offset-8 decoration-gold/30">
                                Signature Series
                            </span>
                            <h2 className="text-white tracking-tighter" style={{ fontSize: 'var(--font-size-heading)' }}>
                                Featured <span className="italic gold-gradient-text">Drops.</span>
                            </h2>
                        </div>
                        <button className="text-[10px] tracking-[0.4em] uppercase font-bold text-slate-muted hover:text-white border-b border-white/10 pb-2 transition-all">
                            View All Series
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Philosophy */}
            <section className="py-24 md:py-40 bg-obsidian overflow-hidden">
                <div className="container-res text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] lg:text-[25rem] font-serif italic text-white/[0.02] pointer-events-none select-none">
                        Essential
                    </div>
                    <div className="relative z-10 space-y-8 md:space-y-12">
                        <span className="text-gold text-[10px] tracking-[0.5em] uppercase font-bold">The Philosophy</span>
                        <h2 className="text-3xl md:text-6xl lg:text-8xl font-serif text-white max-w-5xl mx-auto leading-[1.1] tracking-tighter">
                            Designed for <span className="italic gold-gradient-text">disruptors</span>. 
                            Built for those who refine the noise into silence.
                        </h2>
                        <div className="pt-4 md:pt-8">
                            <button className="btn-gold min-w-[200px] md:min-w-[240px]">Explore the Story</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Landing;
