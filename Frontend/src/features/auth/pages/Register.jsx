import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth"
import { Link, useNavigate } from 'react-router';
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Register = () => {
    const { handleRegister } = useAuth()
    const navigate = useNavigate()

    const [ formData, setFormData ] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        password: '',
        isSeller: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [ name ]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleRegister({
                email: formData.email,
                contact: formData.contactNumber,
                password: formData.password,
                isSeller: formData.isSeller,
                fullname: formData.fullName
            });
            navigate("/");
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (
        <div className="min-h-screen bg-obsidian text-chrome font-sans selection:bg-gold selection:text-obsidian flex flex-col lg:flex-row overflow-x-hidden">

            {/* Split Screen - Editorial Section */}
            <div className="w-full lg:w-1/2 h-[35vh] lg:h-screen relative bg-charcoal items-center justify-center overflow-hidden border-b lg:border-r border-white/5">
                <div className="absolute inset-0">
                    <img
                        src="/snitch_editorial.png"
                        alt="Snitch Fashion Editorial"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110 lg:hover:scale-100 transition-transform duration-[30s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-obsidian/40 via-transparent to-obsidian/60 md:from-obsidian/60 md:to-obsidian/20 lg:to-obsidian/60"></div>
                </div>

                <div className="relative z-10 p-8 md:p-12 lg:p-20 flex flex-col h-full justify-between w-full">
                    <div>
                        <Link to="/" className="text-gold text-xl md:text-2xl font-serif tracking-widest uppercase hover:text-gold-light transition-colors">
                            Snitch<span className="text-white">.</span>
                        </Link>
                    </div>

                    <div className="max-w-xl pb-4">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold rounded-full mb-4 md:mb-6 border border-gold/20">
                            The Movement
                        </span>
                        <h2 className="text-4xl md:text-6xl xl:text-8xl font-serif font-medium tracking-tighter leading-[0.95] text-white">
                            Join <br className="hidden lg:block" />
                            <span className="gold-gradient-text italic">Elite.</span>
                        </h2>
                    </div>

                    <div className="hidden lg:flex gap-8 text-[10px] tracking-widest uppercase text-slate-muted font-bold">
                        <span className="hover:text-gold cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-gold cursor-pointer transition-colors">Terms</span>
                        <span className="hover:text-gold cursor-pointer transition-colors">Support</span>
                    </div>
                </div>
            </div>

            {/* Split Screen - Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 min-h-[65vh] lg:min-h-screen relative overflow-y-auto">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-md z-10 py-12">
                    <div className="mb-12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white mb-4">Create Account</h1>
                        <p className="text-slate-muted uppercase tracking-widest text-xs">Begin your transformation</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Full Name */}
                        <div className="group relative">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-3 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Full Name"
                                id="fullName"
                            />
                            <label htmlFor="fullName" className="absolute left-0 top-3 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold">
                                Full Name
                            </label>
                        </div>

                        {/* Contact Number */}
                        <div className="group relative">
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-3 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Contact"
                                id="contactNumber"
                            />
                            <label htmlFor="contactNumber" className="absolute left-0 top-3 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold">
                                Contact Number
                            </label>
                        </div>

                        {/* Email */}
                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-3 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Email"
                                id="email"
                            />
                            <label htmlFor="email" className="absolute left-0 top-3 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold">
                                Email Address
                            </label>
                        </div>

                        {/* Password */}
                        <div className="group relative">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-3 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Password"
                                id="password"
                            />
                            <label htmlFor="password" className="absolute left-0 top-3 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold">
                                Password
                            </label>
                        </div>

                        {/* Is Seller Checkbox Improved */}
                        <div className="flex items-center gap-4 mt-2">
                            <div className="relative inline-flex items-center cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="isSeller"
                                    id="isSeller"
                                    className="sr-only peer"
                                    checked={formData.isSeller}
                                    onChange={handleChange}
                                />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                                <label htmlFor="isSeller" className="ml-3 text-sm font-medium text-slate-muted group-hover:text-white transition-colors">
                                    Register as Seller
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="btn-gold w-full group">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Create Account
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="relative py-4 flex items-center gap-4">
                            <div className="flex-1 h-px bg-white/5"></div>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-muted font-bold">OR</span>
                            <div className="flex-1 h-px bg-white/5"></div>
                        </div>

                        <ContinueWithGoogle />

                        <div className="text-center mt-8">
                            <p className="text-slate-muted text-sm">
                                Already in the inner circle?{" "}
                                <Link to="/login" className="text-gold font-medium hover:text-gold-light transition-colors decoration-gold/30 underline-offset-4 hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;