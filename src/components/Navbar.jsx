import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ isLoggedIn, onLoginToggle, onLogout }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const q = searchQuery.trim();
        if (q) navigate(`/learning?q=${encodeURIComponent(q)}`);
    };
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-xl p-4 flex items-center"
        >
            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
                <motion.img
                    src="src/assets/EduKhel_Logo.jpg"
                    alt="EduKhel Logo"
                    className="w-10 h-10 rounded-full border-2 border-yellow-400"
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.15 }}
                />
                <motion.span
                    className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400"
                    animate={{ textShadow: ["0 0 10px rgba(251,191,36,0.4)", "0 0 18px rgba(217,70,239,0.7)", "0 0 10px rgba(251,191,36,0.4)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    EduKhel
                </motion.span>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex flex-1 items-center justify-center">
                <div className="flex items-center space-x-6 text-lg font-medium">
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                    <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link>
                    {/* <Link to="/learning" className="text-gray-300 hover:text-white transition-colors">Learning Hub</Link> */}
                    {/* <Link to="/gamehub" className="text-gray-300 hover:text-white transition-colors">Games</Link> */}
                    <Link to="/teacher" className="text-yellow-300 hover:text-yellow-200 transition-colors">Teacher</Link>
                    <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                </div>
            </div>

            {/* Right: Search + Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search games, courses, topics..."
                        className="w-56 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-10"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
                {isLoggedIn ? (
                    <>
                        <Link to="/profile">
                            <motion.button
                                className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors transform hover:scale-110 shadow-lg"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7.96 7.96 0 0112 15c2.251 0 4.359.79 6.096 2.052M12 12a4 4 0 100-8 4 4 0 000 8z" />
                                </svg>
                            </motion.button>
                        </Link>
                        <motion.button
                            onClick={onLogout}
                            className="px-6 py-2 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700 transition-colors transform hover:scale-105 shadow-md"
                            whileTap={{ scale: 0.95 }}
                        >
                            Logout
                        </motion.button>
                    </>
                ) : (
                    <>
                        <Link to="/Login">
                            <motion.button
                                onClick={onLoginToggle}
                                className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 transition-colors transform hover:scale-105 shadow-md"
                                whileTap={{ scale: 0.95 }}
                            >
                                Login / Sign Up
                            </motion.button>
                        </Link>
                    </>
                )}
            </div>

            {/* Mobile Menu (hamburger) - Placeholder */}
            <div className="md:hidden ml-auto">
                <button className="text-white text-3xl focus:outline-none">☰</button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
