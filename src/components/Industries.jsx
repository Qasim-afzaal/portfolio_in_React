import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMoneyBillWave, 
  FaBuilding, 
  FaUsers, 
  FaSprayCan, 
  FaRunning, 
  FaLeaf,
  FaStore,
  FaGamepad,
  FaHeartbeat,
  FaTv,
  FaCloud,
  FaRobot
} from 'react-icons/fa';

const industries = [
  {
    title: 'Fintech',
    description: 'Secure & scalable financial applications',
    icon: FaMoneyBillWave,
    color: '#10B981'
  },
  {
    title: 'Real Estate',
    description: 'Property listing & management platforms',
    icon: FaBuilding,
    color: '#F97316'
  },
  {
    title: 'Social Media',
    description: 'Engaging social networking apps',
    icon: FaUsers,
    color: '#3B82F6'
  },
  {
    title: 'Beauty & Wellness',
    description: 'Mobile solutions for brands',
    icon: FaSprayCan,
    color: '#EC4899'
  },
  {
    title: 'Sports',
    description: 'Fitness tracking & engagement apps',
    icon: FaRunning,
    color: '#F59E0B'
  },
  {
    title: 'Sustainable Solutions',
    description: 'Eco-friendly & green-tech apps',
    icon: FaLeaf,
    color: '#14B8A6'
  },
  {
    title: 'Marketplace',
    description: 'E-commerce & product listings',
    icon: FaStore,
    color: '#8B5CF6'
  },
  {
    title: 'Game Companion',
    description: 'Apps enhancing gaming experiences',
    icon: FaGamepad,
    color: '#D946EF'
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Telemedicine & health tracking',
    icon: FaHeartbeat,
    color: '#EF4444'
  },
  {
    title: 'Digital Signage',
    description: 'Interactive media-rich solutions',
    icon: FaTv,
    color: '#6366F1'
  },
  {
    title: 'SaaS Solutions',
    description: 'Scalable cloud-based platforms',
    icon: FaCloud,
    color: '#06B6D4'
  },
  {
    title: 'Web Scraping',
    description: 'Automated data extraction & analysis',
    icon: FaRobot,
    color: '#6B7280'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#10163b] to-[#0a0f2b]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Industries I've Served</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Extensive experience across diverse sectors, delivering tailored solutions for unique industry challenges
          </p>
        </motion.div>

        <div className="relative">
          {/* Decorative Lines */}
          <motion.div 
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`group relative ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: industry.color }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  <div className={`relative ${isLeft ? 'text-right' : 'text-left'}`}>
                    <motion.div 
                      className={`inline-flex items-center gap-3 mb-4 ${isLeft ? 'flex-row-reverse' : ''}`}
                      whileHover={{ x: isLeft ? -5 : 5 }}
                    >
                      <motion.div 
                        className="p-3 rounded-full"
                        style={{ backgroundColor: industry.color }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-semibold text-white"
                        whileHover={{ x: isLeft ? -2 : 2 }}
                      >
                        {industry.title}
                      </motion.h3>
                    </motion.div>
                    <motion.p 
                      className={`text-gray-400 text-sm ${isLeft ? 'ml-12' : 'mr-12'}`}
                      whileHover={{ x: isLeft ? -2 : 2 }}
                    >
                      {industry.description}
                    </motion.p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div 
                    className="absolute top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{ 
                      left: isLeft ? '50%' : '0',
                      transform: isLeft ? 'translateX(0)' : 'translateX(100%)'
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}