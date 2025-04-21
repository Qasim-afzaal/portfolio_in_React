import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; import 'swiper/css/navigation'; import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const projects = [
  { title: 'Convierge', img: '/assets/images/convierge.png', tags: ['Real Estate','AI','Flutter'], desc: 'AI-driven real estate platform with agent chat.', link: 'https://convierge.ai/' },
  { title: 'The Gift Guide', img: '/assets/images/thegiftguide.png', tags: ['E-Commerce','AI'], desc: 'Smart gift recommendations & seamless checkout.', link: 'https://thegiftguide.com/' },
  { title: 'CarryMe', img: '/assets/images/carryme.png', tags: ['Logistics','Maps'], desc: 'Global delivery & logistics app.', link: 'https://linkedin.com/company/carrymeaesier' },
  { title: 'SparkdAI', img: '/assets/images/sparkdai.png', tags: ['Social','AI'], desc: 'AI-powered messenger with subscription tiers.', link: 'https://apps.apple.com/pk/app/sparkdai/id6504047689' },
  { title: 'Armada', img: '/assets/images/armada.png', tags: ['Mobility','Rental'], desc: 'Hourly car rental marketplace.', link: '#' },
  { title: 'HealthTok', img: '/assets/images/healthtok.png', tags: ['Health','WebRTC'], desc: 'Telemedicine app w/ smartwatch integration.', link: 'https://github.com/vdotok/Android-DoctorPatientApp' }
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#3f8cff]">Selected Projects</h2>
        <Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={1} spaceBetween={20}
          loop navigation pagination={{ clickable: true }} autoplay={{ delay:3000 }}
          breakpoints={{640:{slidesPerView:1.2},768:{slidesPerView:2},1024:{slidesPerView:3}}}>
          {projects.map((p,idx)=>(
            <SwiperSlide key={idx}>
              <div className="bg-[#151b3d] rounded-2xl overflow-hidden shadow relative group">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.map((t,i)=><span key={i} className="px-2 py-0.5 rounded-full bg-gray-700 text-[#3f8cff] text-xs">{t}</span>)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-sm text-gray-200">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-2 text-xs text-[#3f8cff] underline">View Project</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}