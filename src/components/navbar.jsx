import React, { useState, useEffect } from 'react';
import { LuHouse, LuUser, LuLightbulb, LuPhone, LuMenu, LuX, LuLock } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', icon: <LuHouse size={20} />, label: 'Home' },
        { path: '/about', icon: <LuUser size={20} />, label: 'About' },
        { path: '/skills&projects', icon: <LuLightbulb size={20} />, label: 'Skills' },
        { path: '/contact', icon: <LuPhone size={20} />, label: 'Contact' },
        { path: '/admin/login', icon: <LuLock size={20} />, label: 'Admin' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:scale-105 transition-transform">
                    SS
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                ? 'text-accent-primary'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setNav(!nav)}
                >
                    {nav ? <LuX size={24} /> : <LuMenu size={24} />}
                </button>

                {/* Mobile Drawer */}
                <div className={`fixed inset-y-0 right-0 w-64 bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out border-l border-white/10 ${nav ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col h-full pt-20 px-6 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setNav(false)}
                                className={`flex items-center space-x-4 text-lg font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-accent-primary'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;