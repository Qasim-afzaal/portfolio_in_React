import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaCode, FaRocket, FaRobot, FaStar } from 'react-icons/fa';

const caseStudies = [
  {
    title: 'Converge AI Platform',
    challenge: 'Real estate agents needed a smarter way to connect with potential buyers and sellers.',
    solution: 'Developed an AI-powered platform with intelligent chat and property matching algorithms.',
    results: [
      { icon: FaChartLine, text: '35% increase in lead conversion' },
      { icon: FaUsers, text: '10,000+ active users in first 3 months' },
      { icon: FaCode, text: '95% reduction in response time' },
      { icon: FaRocket, text: 'Featured in top real estate publications' }
    ],
    image: '/images/converge.png'
  },
  {
    title: 'The Gift Guide',
    challenge: 'Users struggled to find perfect gifts for different occasions and recipients.',
    solution: 'Created an AI-driven recommendation engine with seamless checkout experience.',
    results: [
      { icon: FaChartLine, text: '40% boost in average order value' },
      { icon: FaUsers, text: '50,000+ monthly active users' },
      { icon: FaCode, text: '2x faster checkout process' },
      { icon: FaRocket, text: 'Featured in TechCrunch' }
    ],
    image: '/images/the_gift_guid.png'
  },
  {
    title: 'SparkdAI Messenger',
    challenge: 'Users needed a more intelligent and engaging messaging experience with AI-powered features.',
    solution: 'Built a next-generation messaging platform with AI integration, smart replies, and premium features.',
    results: [
      { icon: FaRobot, text: 'AI-powered smart replies and suggestions' },
      { icon: FaUsers, text: '100,000+ downloads on App Store' },
      { icon: FaStar, text: '4.8/5 rating with 5,000+ reviews' },
      { icon: FaRocket, text: 'Featured in Apple App Store' }
    ],
    image: '/images/sparkd_ai.jpg'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-4">Impactful Case Studies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world examples of how I've helped businesses solve complex challenges and achieve remarkable results
          </p>
        </motion.div>

        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              variants={item}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">The Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">The Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-4">The Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-white/10">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-400">{result.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 