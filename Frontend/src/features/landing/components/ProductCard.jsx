import React from 'react';

const ProductCard = ({ image, category, title, price }) => {
    return (
        <div className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-6">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Hover Overlays */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-obsidian/80 to-transparent">
                    <button className="w-full py-4 bg-white text-obsidian text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gold transition-colors">
                        Quick View
                    </button>
                </div>

                <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="p-3 bg-obsidian/40 backdrop-blur-md rounded-full text-white hover:text-gold transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Details */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-muted">{category}</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                </div>
                <h3 className="text-white text-lg font-serif italic tracking-tight group-hover:text-gold transition-colors underline-offset-4 decoration-gold/40 group-hover:underline">
                    {title}
                </h3>
                <p className="text-chrome font-sans tracking-widest text-sm">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
