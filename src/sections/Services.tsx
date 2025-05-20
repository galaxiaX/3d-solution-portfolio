'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ImageServices1 from '@/assets/images/services/pexels-divinetechygirl-1181263.jpg';
import ImageServices2 from '@/assets/images/services/pexels-mikhail-nilov-7988089.jpg';
import ImageServices3 from '@/assets/images/services/pexels-leeloothefirst-8938734.jpg';
import ImageServices4 from '@/assets/images/services/pexels-divinetechygirl-1181244.jpg';

const FadeBackground = ({ height = '100%' }: { height: string }) => {
  return (
    <div
      style={{ height }}
      className='absolute bottom-0 h-[50%] w-full bg-gradient-to-t from-black to-transparent'
    />
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id='services'
      ref={sectionRef}
      className='flex w-[100dvw] shrink-0 md:h-[100dvh] md:items-center md:justify-center md:shadow-xl'
    >
      <div className='grid h-full w-full shrink-0 gap-2 overflow-visible max-md:p-[7%] md:max-h-[60%] md:max-w-[90%] md:grid-cols-4 md:grid-rows-2 [&>*]:overflow-hidden [&>*>img]:duration-300 [&>*>img]:hover:scale-110'>
        <div className='col-span-2 shrink-0 text-6xl font-medium text-[#38b6ff] max-md:py-16 md:p-16'>
          Our services
        </div>

        {/* First image - slide from top */}
        <motion.div
          className='relative w-full shrink-0 max-md:aspect-square'
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={ImageServices1}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            alt='image-services-1'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[16px] w-full text-center text-white drop-shadow-2xl max-md:text-sm md:bottom-[32px]'>
            IT System Consulting Service
          </div>
        </motion.div>

        {/* Second image - slide from right */}
        <motion.div
          className='relative w-full shrink-0 max-md:aspect-square md:row-span-2'
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src={ImageServices2}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            alt='image-services-2'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[16px] w-full text-center text-white drop-shadow-2xl max-md:text-sm md:bottom-[32px]'>
            System Development Service
          </div>
        </motion.div>

        <div className='max-md:hidden md:shrink-0' />

        {/* Third image - slide from left */}
        <motion.div
          className='relative w-full shrink-0 max-md:aspect-square'
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          <Image
            src={ImageServices3}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            alt='image-services-3'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[16px] w-full text-center text-white drop-shadow-2xl max-md:text-sm md:bottom-[32px]'>
            Fintech Solution
          </div>
        </motion.div>

        {/* Fourth image - slide from bottom */}
        <motion.div
          className='relative w-full shrink-0 max-md:aspect-square'
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          <Image
            src={ImageServices4}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            alt='image-services-4'
          />
          <FadeBackground height='50%' />
          <div className='absolute bottom-[16px] w-full text-center text-white drop-shadow-2xl max-md:text-sm md:bottom-[32px]'>
            Mobile Application
            <br />
            Development Service
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
