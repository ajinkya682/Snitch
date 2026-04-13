import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth";
import { useNavigate, Link } from "react-router";
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const Login = () => {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [ name ]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin({
                email: formData.email,
                password: formData.password
            });
            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
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
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/60 md:from-obsidian/60 md:to-obsidian/20 lg:to-obsidian/60"></div>
                </div>

                <div className="relative z-10 p-8 md:p-12 lg:p-20 flex flex-col h-full justify-between w-full">
                    <div>
                        <Link to="/" className="text-gold text-xl md:text-2xl font-serif tracking-widest uppercase hover:text-gold-light transition-colors">
                            Snitch<span className="text-white">.</span>
                        </Link>
                    </div>

                    <div className="max-w-xl pb-4">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[8px] md:text-[10px] tracking-[0.3em] uppercase font-bold rounded-full mb-4 md:mb-6 border border-gold/20">
                            Member Access
                        </span>
                        <h2 className="text-4xl md:text-6xl xl:text-8xl font-serif font-medium tracking-tighter leading-[0.95] text-white">
                            The <br className="hidden lg:block" />
                            <span className="gold-gradient-text italic">Vault.</span>
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
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="w-full max-w-md z-10">
                    <div className="mb-12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-white mb-4">Welcome Back</h1>
                        <p className="text-slate-muted">Sign in to CONTINUE YOUR JOURNEY</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        {/* Email Input */}
                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-4 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Email"
                                id="email"
                            />
                            <label 
                                htmlFor="email"
                                className="absolute left-0 top-4 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold"
                            >
                                Email Address
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="group relative">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent text-white border-b border-white/10 py-4 outline-none focus:border-gold transition-all duration-300 placeholder:text-transparent"
                                placeholder="Password"
                                id="password"
                            />
                            <label 
                                htmlFor="password"
                                className="absolute left-0 top-4 text-slate-muted transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gold"
                            >
                                Password
                            </label>
                            <Link to="#" className="absolute right-0 top-4 text-[10px] tracking-widest uppercase text-slate-muted hover:text-gold transition-colors">
                                Forgot?
                            </Link>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="btn-gold w-full group">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Sign In 
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
                                Not a member?{" "}
                                <Link to="/register" className="text-gold font-medium hover:text-gold-light transition-colors decoration-gold/30 underline-offset-4 hover:underline">
                                    Join the movement
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;