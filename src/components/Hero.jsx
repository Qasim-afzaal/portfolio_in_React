import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/3o7TKz3Z5o3t6f6nW0/giphy.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-blue-600 font-medium px-4 py-2 rounded-full bg-blue-100 backdrop-blur-sm">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-4"
            >
              Qasim Afzaal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed"
            >
              Mobile App Expert | Building AI & SaaS Solutions for Healthcare, E-Commerce, Real Estate & Social Apps | Driving Engagement & Revenue
            </motion.p>

            {/* Call-to-Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  Let's Connect
                </motion.a>

                <motion.a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  Email Me
                </motion.a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start mt-2">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300"
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
              ease: 'easeOut',
              delay: 0.3,
            }}
          >
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-700">
              <img
                src="/images/profile.jpg"
                alt="Muhammad Qasim"
                className="w-48 h-48 rounded-full object-cover border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
