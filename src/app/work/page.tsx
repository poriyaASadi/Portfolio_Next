'use client';
import projectsData from '../../assets/json/projectsData.json'
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const projects = [
  {
    id: 0,
    title: "Sichek.ir",
    description: "A full-featured admin dashboard with real-time analytics.",
    image: "/images/work/1.png",
    linkDemo: '',
    linkRepo: '',
  },
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-featured admin dashboard with real-time analytics.",
    image: "/images/work/1.png"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile-first app to log workouts and track progress.",
    image: "/images/work/1.png"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "Generates SEO-friendly content using OpenAI API.",
    image: "/images/work/1.png"
  },
  {
    id: 4,
    title: "Wrestling Academy Portal",
    description: "Platform for managing classes and athletes.",
    image: "/images/work/1.png"
  }
];

export default function WorkPage() {
  const swiperRef = useRef<any>(null);
  const swiperRef2 = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="font-embed overflow-y-auto text-white">

      <div className="max-w-full mx-auto container">
        <h2 className='text-3xl lg:text-4xl mt-4 px-2'>MY PROJECTS</h2>
        <p className='text-xs lg:text-sm text-green-400 px-2  mb-4'>Some of my projects</p>
        {/* اسلایدر */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={900}
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="rounded-xl shadow-light-50  overflow-hidden shadow-2xl"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className=''>
                <div className="relative  w-full h-[700px]   rounded-[3em] box-border ">
                  <img src={`/images/work/${index + 1}.png`} alt={project.name} className="w-full  h-full rounded-[2em] object-cover brightness-75" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute max-w-[325px] md:max-w-[700px]  w-full h-fit left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2   inset-0  rounded-[2em]  backdrop-blur-md  flex flex-col items-center justify-center p-3 py-6 lg:p-6 text-center">
                    <h2 className="text-3xl font-bold text-green-400 mb-3">{project.name}</h2>
                    <p className="leading-7 text-sm lg:text-base max-w-2xl opacity-90 ">{project.aboutproject}</p>
                    <ul className='flex items-center my-1.5 *:font-medium gap-2 flex-wrap *:text-sm *:text-green-400'>
                      {project.skills.map((item, index) => (
                        <li key={index}>({item})</li>
                      ))}
                    </ul>
                    <div className='flex items-center gap-3  *:text-black *:px-5 *:py-2 *:rounded-full  *:font-medium mt-3'>
                      <a href={project.linkonline} className=' *:text-black font-sans bg-transparent!' target='_blank'>
                        <ShimmerButton className=' font-sans bg-transparent!'>
                          Link Site
                        </ShimmerButton>
                      </a>
                      {
                        project.linkgithub && <a href={project.linkgithub} className='text-white! bg-green-600 text-sm' target='_blank'>Repo Site</a>
                      }
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* دات‌های پایین (پگینیشن کاستوم بدون خطا) */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex
                    ? 'bg-green-400 scale-125'
                    : 'bg-green-600 opacity-50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div> */}

          {/* دکمه‌های کنترلی */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="px-4 py-2 bg-white text-black hover:bg-green-500 rounded-[2em] duration-300 cursor-pointer transition"
            >
              ← Prev
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="px-4 py-2 bg-white text-black hover:bg-green-500 rounded-[2em] duration-300 cursor-pointer transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
      {/* ... */}

      <div className='container'>
        <h2 className='text-3xl lg:text-4xl mt-4 px-2'>N8N PROJECTS</h2>
        <p className='text-xs lg:text-sm text-green-400 px-2  mb-4'>Some of my workflows</p>
        <div className="max-w-full mx-auto text-center">
          {/* اسلایدر */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={900}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              onSwiper={(swiper) => (swiperRef2.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="rounded-xl shadow-light-50  overflow-hidden shadow-2xl"
            >
              {Array(7).fill(null).map((_, index) => (
                <SwiperSlide key={index} className=''>
                  <div className="relative  w-full h-[600px]   rounded-[3em] box-border ">
                    <img src={`/images/work/img2/1 (${index + 1}).png`} alt='n8n-img' className="w-full  h-full rounded-[2em] object-cover brightness-75" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


            {/* دکمه‌های کنترلی */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => swiperRef2.current?.slidePrev()}
                className="px-4 py-2 bg-white text-black hover:bg-green-500 rounded-[2em] duration-300 cursor-pointer transition"
              >
                ← Prev
              </button>
              <button
                onClick={() => swiperRef2.current?.slideNext()}
                className="px-4 py-2 bg-white text-black hover:bg-green-500 rounded-[2em] duration-300 cursor-pointer transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
        {/* <ul className='grid grid-cols-5 gap-4'>
          {Array(7).fill(null).map((_,index) => (
            <li key={index} className='rounded-[2em] h-[200px] border border-green-400 p-2'>
              <img src={`/images/work/img2/1 (${index + 1}).png`} alt="" className='w-full object-cover rounded-[2em] h-full' />
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}