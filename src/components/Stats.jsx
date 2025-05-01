import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaProjectDiagram, FaUsers, FaTrophy } from 'react-icons/fa';

const stats = [
  { icon: FaLaptopCode, label: 'Years of Experience', value: 7, suffix: '+' },
  { icon: FaProjectDiagram, label: 'Projects Completed', value: 50, suffix: '+' },
  { icon: FaCode, label: 'Lines of Code', value: 100, suffix: 'K+' },
  { icon: FaUsers, label: 'Happy Clients', value: 30, suffix: '+' },
  { icon: FaTrophy, label: 'Awards Won', value: 5, suffix: '+' }
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

const Counter = ({ end, suffix }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.span 
      className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0f2b] to-[#0d1440] relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-white mb-4">My Journey in Numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my professional journey and achievements through the years
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:opacity-75 transition duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="relative flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="mb-6 p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <motion.p 
                    className="mt-4 text-gray-400 text-sm font-medium"
                    whileHover={{ y: 2 }}
                  >
                    {stat.label}
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