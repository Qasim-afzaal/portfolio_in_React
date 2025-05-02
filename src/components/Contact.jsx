import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-[#3f8cff]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Discuss Your Project
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Book a free 30-minute strategy call — no strings attached.
          </motion.p>
          
          <motion.a 
            href="mailto:qasim.afzaal432@gmail.com" 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold bg-[#3f8cff] text-[#02152f] relative group overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#3f8cff] to-[#2d6fd6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.span
              className="relative z-10 flex items-center gap-2"
              whileHover={{ x: 2 }}
            >
              <FaCalendarAlt className="w-5 h-5" />
              Book a Call
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}