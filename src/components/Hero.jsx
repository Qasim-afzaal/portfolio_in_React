import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/particles-background-gif_cgjfut.gif" 
            alt="Particles flowing background" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f2b]/70 via-[#0a0f2b]/60 to-[#0d1440]/70"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-[#3f8cff]/20"
              initial={{ 
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                scale: 0
              }}
              animate={{ 
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-[#3f8cff] font-medium px-4 py-2 rounded-full bg-[#3f8cff]/10 backdrop-blur-sm">
                Hello, I'm
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 mt-4"
            >
              Qasim Afzaal
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed"
            >
              Mobile App Expert | Building AI & SaaS Solutions for Healthcare, E-Commerce, Real Estate & Social Apps | Driving Engagement & Revenue
            </motion.p>
            
            {/* Enhanced Call-to-Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-[#0a0f2b] font-semibold hover:bg-[#3f8cff] hover:text-white transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-[#3f8cff]/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#3f8cff] to-[#2d6fd6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Let's Connect
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      animate={{ x: 5 }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.span>
                </motion.a>

                <motion.a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#3f8cff]/10 text-white font-medium hover:bg-[#3f8cff]/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  <span>Email Me</span>
                </motion.a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start mt-2">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3f8cff]/10 text-white hover:bg-[#3f8cff]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#3f8cff]/10 text-white hover:bg-[#3f8cff]/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3f8cff] to-[#2d6fd6] rounded-full blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-[#3f8cff] to-[#2d6fd6] p-1 rounded-full group">
              <img 
                src="/images/profile.jpg" 
                alt="Muhammad Qasim" 
                className="w-80 h-80 rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0a0f2b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}