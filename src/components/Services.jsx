import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, 
  FaRobot, 
  FaShoppingCart, 
  FaBuilding, 
  FaMoneyBillWave, 
  FaUsers 
} from 'react-icons/fa';

const services = [
  {
    title: 'SaaS Platforms',
    icon: FaCloud,
    description: 'Custom SaaS solutions that scale with your business, featuring subscription management, analytics, and seamless integrations.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI-Powered Apps',
    icon: FaRobot,
    description: 'Intelligent applications leveraging machine learning and AI to automate processes and deliver personalized experiences.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'E-Commerce Solutions',
    icon: FaShoppingCart,
    description: 'Feature-rich e-commerce platforms with secure payment processing, inventory management, and customer analytics.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Real-Estate Platforms',
    icon: FaBuilding,
    description: 'Comprehensive real estate platforms with property listings, virtual tours, and advanced search capabilities.',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Fintech & Subscription',
    icon: FaMoneyBillWave,
    description: 'Secure financial applications with subscription management, payment processing, and financial analytics.',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Social & Real-Time Apps',
    icon: FaUsers,
    description: 'Engaging social platforms with real-time features, content sharing, and community building tools.',
    color: 'from-indigo-500 to-violet-500'
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

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">How I Deliver Value</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, leveraging cutting-edge technology and industry best practices
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div 
                  className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`mb-6 p-4 rounded-full bg-gradient-to-r ${service.color} w-fit mx-auto`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-white mb-4"
                    whileHover={{ x: 2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm leading-relaxed"
                    whileHover={{ x: 2 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}