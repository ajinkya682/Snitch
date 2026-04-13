import React from 'react';

const categories = [
    {
        id: 'mens',
        title: 'Man',
        description: 'Disruptive silhouettes and raw tailoring.',
        image: '/mens_editorial.png',
        span: 'lg:col-span-2'
    },
    {
        id: 'womens',
        title: 'Woman',
        description: 'Elegant lines meeting industrial strength.',
        image: '/womens_editorial.png',
        span: 'lg:col-span-1'
    },
    {
        id: 'accessories',
        title: 'Objects',
        description: 'Crafted essentials for the modern vault.',
        image: '/accessories_editorial.png',
        span: 'lg:col-span-3'
    }
];

const CategoryGrid = () => {
    return (
        <section className="py-20 md:py-32 bg-obsidian">
            <div className="container-res">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-12 md:mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-gold text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block underline underline-offset-8 decoration-gold/30">
                            Curated Categories
                        </span>
                        <h2 className="text-white tracking-tighter leading-none" style={{ fontSize: 'var(--font-size-heading)' }}>
                            Shop the <span className="italic gold-gradient-text">Aesthetic.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {categories.map((cat) => (
                        <div key={cat.id} className={`group relative h-[400px] md:h-[600px] overflow-hidden ${cat.span}`}>
                            <img 
                                src={cat.image} 
                                alt={cat.title} 
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <div className="space-y-3 md:space-y-4">
                                    <h3 className="text-white text-3xl md:text-4xl font-serif italic tracking-tight">{cat.title}</h3>
                                    <p className="text-slate-muted max-w-xs text-xs md:text-sm font-light leading-relaxed group-hover:text-white transition-colors duration-500">
                                        {cat.description}
                                    </p>
                                    <div className="pt-4 md:pt-6 overflow-hidden">
                                        <button className="flex items-center gap-4 text-white text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-bold group-hover:gap-8 transition-all duration-500">
                                            Explore
                                            <div className="h-px w-12 md:w-20 bg-gold/50 group-hover:w-32 transition-all duration-500"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
