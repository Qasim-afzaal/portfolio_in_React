import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaPlay } from 'react-icons/fa';
import 'swiper/css'; import 'swiper/css/navigation'; import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Custom Swiper Styles
const swiperStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: white !important;
    width: 40px !important;
    height: 40px !important;
    background: rgba(255, 255, 255, 0.1) !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(255, 255, 255, 0.2) !important;
  }
  
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 20px !important;
    color: white !important;
  }
  
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3) !important;
    opacity: 1 !important;
    width: 8px !important;
    height: 8px !important;
    transition: all 0.3s ease !important;
  }
  
  .swiper-pagination-bullet-active {
    background: white !important;
    width: 20px !important;
    border-radius: 4px !important;
  }
`;

const projects = [
  { 
    title: 'Converge', 
    images: [
      { type: 'image', src: '/images/converge.png', alt: 'Converge Main Screen' },
      { type: 'video', src: '/images/converige/ScreenRecording_04-28-2025 20-48-14_1.MP4', alt: 'Converge Demo' }
    ],
    tags: ['Real Estate','AI','Flutter'], 
    desc: 'AI-driven real estate platform with agent chat.', 
    link: 'https://converge.ai/',
    detailedDesc: 'Converge is an innovative real estate platform that leverages artificial intelligence to connect buyers and sellers with real estate agents. The platform features an intelligent chat system that helps users find their perfect property match.',
    features: [
      'AI-powered property matching',
      'Real-time agent chat system',
      'Advanced property search filters',
      'Virtual property tours',
      'Secure document sharing'
    ],
    techStack: ['Flutter', 'Firebase', 'TensorFlow', 'Google Maps API'],
    metrics: [
      { label: 'Users', value: '50,000+' },
      { label: 'Properties', value: '100,000+' },
      { label: 'Agents', value: '5,000+' }
    ]
  },
  { 
    title: 'The Gift Guide', 
    images: [
      { type: 'image', src: '/images/the_gift_guid.png', alt: 'The Gift Guide Main Screen' }
    ],
    tags: ['E-Commerce','AI'], 
    desc: 'Smart gift recommendations & seamless checkout.', 
    link: 'https://thegiftguide.com/',
    detailedDesc: 'The Gift Guide revolutionizes gift shopping with AI-powered recommendations. The platform analyzes user preferences and occasions to suggest perfect gifts, making the shopping experience seamless and personalized.',
    features: [
      'AI-powered gift recommendations',
      'Personalized shopping experience',
      'Seamless checkout process',
      'Wishlist management',
      'Gift tracking'
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    metrics: [
      { label: 'Users', value: '25,000+' },
      { label: 'Products', value: '50,000+' },
      { label: 'Transactions', value: '10,000+' }
    ]
  },
  { 
    title: 'CarryMe', 
    images: [
      { type: 'image', src: '/images/carryme.jpg', alt: 'CarryMe Main Screen' }
    ],
    tags: ['Logistics','Maps'], 
    desc: 'Global delivery & logistics app.', 
    link: 'https://linkedin.com/company/carrymeaesier',
    detailedDesc: 'CarryMe is a comprehensive logistics solution that connects shippers with carriers globally. The platform features real-time tracking, route optimization, and secure payment processing.',
    features: [
      'Real-time package tracking',
      'Route optimization',
      'Secure payment processing',
      'Global delivery network',
      'Driver management system'
    ],
    techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    metrics: [
      { label: 'Users', value: '100,000+' },
      { label: 'Deliveries', value: '500,000+' },
      { label: 'Drivers', value: '10,000+' }
    ]
  },
  { 
    title: 'SparkdAI', 
    images: [
      { type: 'image', src: '/images/sparkd_ai.jpg', alt: 'SparkdAI Main Screen' }
    ],
    tags: ['Social','AI'], 
    desc: 'AI-powered messenger with subscription tiers.', 
    link: 'https://apps.apple.com/pk/app/sparkdai/id6504047689',
    detailedDesc: 'SparkdAI is a next-generation messaging platform that incorporates AI to enhance communication. Features include smart replies, content suggestions, and premium subscription tiers.',
    features: [
      'AI-powered smart replies',
      'Content suggestions',
      'Premium subscription tiers',
      'End-to-end encryption',
      'Group chat management'
    ],
    techStack: ['Flutter', 'Firebase', 'TensorFlow', 'WebRTC'],
    metrics: [
      { label: 'Downloads', value: '100,000+' },
      { label: 'Active Users', value: '50,000+' },
      { label: 'Rating', value: '4.8/5' }
    ]
  },
  { 
    title: 'Armada', 
    images: [
      { type: 'image', src: '/images/armada_car.jpg', alt: 'Armada Main Screen' }
    ],
    tags: ['Mobility','Rental'], 
    desc: 'Hourly car rental marketplace.', 
    link: '#',
    detailedDesc: 'Armada is a peer-to-peer car rental platform that allows users to rent vehicles by the hour. The platform includes insurance coverage, real-time availability, and secure payment processing.',
    features: [
      'Hourly car rentals',
      'Insurance coverage',
      'Real-time availability',
      'Secure payments',
      'Vehicle tracking'
    ],
    techStack: ['Flutter', 'Firebase', 'Stripe', 'Google Maps API'],
    metrics: [
      { label: 'Users', value: '30,000+' },
      { label: 'Vehicles', value: '5,000+' },
      { label: 'Bookings', value: '20,000+' }
    ]
  },
  { 
    title: 'HealthTok', 
    images: [
      { type: 'image', src: '/images/health_tok.jpg', alt: 'HealthTok Main Screen' }
    ],
    tags: ['Health','WebRTC'], 
    desc: 'Telemedicine app w/ smartwatch integration.', 
    link: 'https://github.com/vdotok/Android-DoctorPatientApp',
    detailedDesc: 'HealthTok is a telemedicine platform that connects patients with healthcare providers through video consultations. The app integrates with smartwatches for health monitoring and data collection.',
    features: [
      'Video consultations',
      'Smartwatch integration',
      'Health data tracking',
      'Prescription management',
      'Appointment scheduling'
    ],
    techStack: ['Android', 'WebRTC', 'Firebase', 'HealthKit'],
    metrics: [
      { label: 'Users', value: '20,000+' },
      { label: 'Doctors', value: '1,000+' },
      { label: 'Consultations', value: '50,000+' }
    ]
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

export default function ProjectsCarousel() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <style>{swiperStyles}</style>
      
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
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my most impactful work, demonstrating innovation and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]} 
            slidesPerView={3} 
            spaceBetween={30}
            loop 
            navigation 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="relative"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  variants={item}
                  className="group relative bg-[#151b3d] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-white/20 border border-white/5 cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredProject(idx)}
                  onHoverEnd={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-[300px] overflow-hidden">
                    {project.images.map((media, mediaIdx) => (
                      <div
                        key={mediaIdx}
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          media.type === 'video' && hoveredProject === idx
                            ? 'opacity-100'
                            : media.type === 'image' && (hoveredProject !== idx || !project.images.some(m => m.type === 'video'))
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      >
                        {media.type === 'video' ? (
                          <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                      </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {project.title}
                        </motion.h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIdx) => (
                            <motion.span
                              key={tagIdx}
                              className="px-3 py-1 rounded-full bg-white/10 text-white text-sm border border-white/10 group-hover:border-white/20 group-hover:text-white transition-colors"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        <motion.p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                          {project.desc}
                        </motion.p>
                        <div className="flex gap-4">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white text-[#0a0f2b] rounded-lg hover:bg-gray-100 transition-colors border border-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            Visit Project
                          </motion.a>
                          <Link to={`/project/${idx}`}>
                            <motion.button
                              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                              whileHover={{ scale: 1.05 }}
                            >
                              View Details
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#151b3d] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FaTimes className="text-white" size={20} />
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Media Section */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="relative h-[400px] rounded-xl overflow-hidden bg-white/5">
                    {selectedProject.images.map((media, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: media.type === 'video' && isVideoPlaying
                            ? 1
                            : media.type === 'image' && !isVideoPlaying
                            ? 1
                            : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        {media.type === 'video' ? (
                          <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            controls
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                          />
                        ) : (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.images.map((media, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVideoPlaying(media.type === 'video')}
                        className={`flex-1 h-24 rounded-lg overflow-hidden relative group ${
                          (media.type === 'video' && isVideoPlaying) ||
                          (media.type === 'image' && !isVideoPlaying)
                            ? 'ring-2 ring-white'
                            : ''
                        }`}
                      >
                        {media.type === 'video' ? (
                          <>
                            <img
                              src={media.src}
                              alt={media.alt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                              <FaPlay className="text-white" />
                            </div>
                          </>
                        ) : (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl font-bold text-white mb-2"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {selectedProject.tags?.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="px-3 py-1 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-300 mb-6"
                    >
                      {selectedProject.detailedDesc}
                    </motion.p>
                  </div>

                  {selectedProject.features && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                          >
                            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {selectedProject.techStack && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + idx * 0.1 }}
                            className="px-3 py-1 rounded-full bg-white/5 text-white text-sm border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {selectedProject.metrics && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">Metrics</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedProject.metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + idx * 0.1 }}
                            className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
                          >
                            <div className="text-2xl font-bold text-white mb-1">
                              {metric.value}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-white text-[#0a0f2b] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Visit Project
                    </motion.a>
                    {selectedProject.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaGithub />
                        View Code
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}