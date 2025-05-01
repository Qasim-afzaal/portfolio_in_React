import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaPenAlt, 
  FaCode, 
  FaServer, 
  FaBug, 
  FaRocket,
  FaChartLine
} from 'react-icons/fa';

const steps = [
  {
    title: 'Discovery & Planning',
    description: 'Requirements gathering, user research, and project planning',
    icon: FaSearch,
    color: '#3B82F6',
    details: [
      'Stakeholder interviews',
      'User research & personas',
      'Technical requirements',
      'Project timeline & milestones'
    ]
  },
  {
    title: 'Design & Architecture',
    description: 'UI/UX design and system architecture planning',
    icon: FaPenAlt,
    color: '#8B5CF6',
    details: [
      'Wireframing & prototyping',
      'System architecture design',
      'Database schema design',
      'API specifications'
    ]
  },
  {
    title: 'Development',
    description: 'Agile development with continuous integration',
    icon: FaCode,
    color: '#10B981',
    details: [
      'Sprint planning & execution',
      'Code reviews & pair programming',
      'Unit testing & documentation',
      'Continuous integration'
    ]
  },
  {
    title: 'Testing & QA',
    description: 'Comprehensive testing and quality assurance',
    icon: FaBug,
    color: '#F59E0B',
    details: [
      'Automated testing',
      'Manual testing',
      'Performance testing',
      'Security testing'
    ]
  },
  {
    title: 'Deployment',
    description: 'CI/CD pipeline and production deployment',
    icon: FaServer,
    color: '#EC4899',
    details: [
      'Environment setup',
      'CI/CD pipeline',
      'Infrastructure as code',
      'Monitoring setup'
    ]
  },
  {
    title: 'Launch & Monitor',
    description: 'Production launch and performance monitoring',
    icon: FaRocket,
    color: '#EF4444',
    details: [
      'Production deployment',
      'Performance monitoring',
      'Error tracking',
      'User feedback collection'
    ]
  },
  {
    title: 'Optimization',
    description: 'Continuous improvement and scaling',
    icon: FaChartLine,
    color: '#06B6D4',
    details: [
      'Performance optimization',
      'Feature enhancements',
      'Scalability improvements',
      'Regular updates'
    ]
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-4">Software Development Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive approach to building robust, scalable, and user-friendly applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.div
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  className={`relative ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  variants={item}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: step.color }}
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

                  <div className={`relative ${isEven ? 'md:ml-12' : 'md:mr-12'}`}>
                    <motion.div 
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div 
                            className="p-3 rounded-full"
                            style={{ backgroundColor: step.color }}
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3 
                              className="text-xl font-semibold text-white"
                              whileHover={{ x: 2 }}
                            >
                              {step.title}
                            </motion.h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-center gap-2 text-gray-400 text-sm"
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full" 
                                style={{ backgroundColor: step.color }}
                                whileHover={{ scale: 1.2 }}
                              />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}