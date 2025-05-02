import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername', color: '#333', hoverColor: '#1a1a1a' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', color: '#0077b5', hoverColor: '#005582' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourusername', color: '#1da1f2', hoverColor: '#0d8bd9' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/yourusername', color: '#e4405f', hoverColor: '#c13584' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:your.email@example.com', color: '#ea4335', hoverColor: '#d33426' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const FloatingParticle = () => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1
  });

  return (
    <motion.div
      className="absolute rounded-full bg-white/10"
      style={{
        width: position.size,
        height: position.size,
        left: `${position.x}%`,
        top: `${position.y}%`
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
};

export default function Footer() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
    <motion.footer
      className="relative bg-[#0a0f2b] py-12 overflow-hidden"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <motion.div
            className="flex space-x-6"
            variants={container}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  variants={item}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      style={{ backgroundColor: link.color }}
                      whileHover={{ 
                        backgroundColor: link.hoverColor,
                        rotate: 5
                      }}
                    >
                      <Icon size={24} />
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.name}
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-gray-400 text-sm"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            © {new Date().getFullYear()} Qasim. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}