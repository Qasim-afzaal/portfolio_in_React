import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiFlutter, 
  SiReact, 
  SiApple, 
  SiAndroid, 
  SiFirebase, 
  SiNodedotjs, 
  SiGraphql, 
  SiDocker, 
  SiKubernetes, 
  SiStripe, 
  SiWebrtc, 
  SiOpenai 
} from 'react-icons/si';

const techs = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'React Native', icon: SiReact, color: '#61DAFB' },
  { name: 'iOS', icon: SiApple, color: '#000000' },
  { name: 'Android', icon: SiAndroid, color: '#3DDC84' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
  { name: 'WebRTC', icon: SiWebrtc, color: '#333333' },
  { name: 'OpenAI API', icon: SiOpenai, color: '#412991' }
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

export default function TechStack() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#3f8cff] mb-4">Core Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {techs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#3f8cff] to-[#2d6fd6] opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative flex flex-col items-center justify-center gap-4 bg-[#151b3d] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <motion.div 
                    className="p-4 rounded-xl bg-[#1a2244]"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-12 h-12" style={{ color: tech.color }} />
                  </motion.div>
                  <motion.span 
                    className="text-lg font-medium text-white group-hover:text-[#3f8cff] transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    {tech.name}
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}