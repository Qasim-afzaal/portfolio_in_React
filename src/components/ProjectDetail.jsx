import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  { 
    title: 'Converge', 
    images: [
      { type: 'image', src: '/images/converge.png', alt: 'Converge Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/converge-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['Real Estate','AI','Flutter'], 
    desc: 'AI-driven real estate platform with agent chat.', 
    link: 'https://converge.ai/',
    detailedDesc: 'Converge is an innovative real estate platform that leverages artificial intelligence to connect buyers and sellers with real estate agents. The platform features an intelligent chat system that helps users find their perfect property match.'
  },
  { 
    title: 'The Gift Guide', 
    images: [
      { type: 'image', src: '/images/the_gift_guid.png', alt: 'The Gift Guide Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/giftguide-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['E-Commerce','AI'], 
    desc: 'Smart gift recommendations & seamless checkout.', 
    link: 'https://thegiftguide.com/',
    detailedDesc: 'The Gift Guide revolutionizes gift shopping with AI-powered recommendations. The platform analyzes user preferences and occasions to suggest perfect gifts, making the shopping experience seamless and personalized.'
  },
  { 
    title: 'CarryMe', 
    images: [
      { type: 'image', src: '/images/carryme.jpg', alt: 'CarryMe Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/carryme-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['Logistics','Maps'], 
    desc: 'Global delivery & logistics app.', 
    link: 'https://linkedin.com/company/carrymeaesier',
    detailedDesc: 'CarryMe is a comprehensive logistics solution that connects shippers with carriers globally. The platform features real-time tracking, route optimization, and secure payment processing.'
  },
  { 
    title: 'SparkdAI', 
    images: [
      { type: 'image', src: '/images/sparkd_ai.jpg', alt: 'SparkdAI Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/sparkdai-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['Social','AI'], 
    desc: 'AI-powered messenger with subscription tiers.', 
    link: 'https://apps.apple.com/pk/app/sparkdai/id6504047689',
    detailedDesc: 'SparkdAI is a next-generation messaging platform that incorporates AI to enhance communication. Features include smart replies, content suggestions, and premium subscription tiers.'
  },
  { 
    title: 'Armada', 
    images: [
      { type: 'image', src: '/images/armada_car.jpg', alt: 'Armada Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/armada-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['Mobility','Rental'], 
    desc: 'Hourly car rental marketplace.', 
    link: '#',
    detailedDesc: 'Armada is a peer-to-peer car rental platform that allows users to rent vehicles by the hour. The platform includes insurance coverage, real-time availability, and secure payment processing.'
  },
  { 
    title: 'HealthTok', 
    images: [
      { type: 'image', src: '/images/health_tok.jpg', alt: 'HealthTok Main Screen' }
    ],
    videos: [
      { src: 'https://example.com/healthtok-demo.mp4', title: 'Platform Overview' }
    ],
    tags: ['Health','WebRTC'], 
    desc: 'Telemedicine app w/ smartwatch integration.', 
    link: 'https://github.com/vdotok/Android-DoctorPatientApp',
    detailedDesc: 'HealthTok is a telemedicine platform that connects patients with healthcare providers through video consultations. The app integrates with smartwatches for health monitoring and data collection.'
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

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects[parseInt(projectId)];

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#0a0f2b] text-[#e5ecff] flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-[#3f8cff] hover:underline">Back to Home</Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0f2b] text-[#e5ecff] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center text-[#3f8cff] hover:underline mb-8 group">
            <motion.span
              className="mr-2"
              whileHover={{ x: -5 }}
            >
              ←
            </motion.span>
            Back to Projects
          </Link>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="space-y-6"
            variants={item}
          >
            <motion.h1 
              className="text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={item}
            >
              {project.tags?.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-300"
              variants={item}
            >
              {project.detailedDesc}
            </motion.p>
            
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-white text-[#0a0f2b] rounded-lg hover:bg-gray-100 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
            >
              <span>Visit Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            variants={item}
          >
            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <motion.div 
                className="space-y-4"
                variants={item}
              >
                <h2 className="text-2xl font-bold text-[#3f8cff]">Screenshots</h2>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-xl overflow-hidden"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <motion.div 
                        className="relative aspect-video rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}

            {/* Video Gallery */}
            {project.videos && project.videos.length > 0 && (
              <motion.div 
                className="space-y-4"
                variants={item}
              >
                <h2 className="text-2xl font-bold text-[#3f8cff]">Demo Videos</h2>
                <div className="grid gap-4">
                  {project.videos.map((video, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden bg-[#151b3d]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <video
                        src={video.src}
                        title={video.title}
                        className="w-full h-full object-cover"
                        controls
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
} 