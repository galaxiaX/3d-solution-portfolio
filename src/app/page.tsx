'use client';

import { useEffect, useRef, useState } from 'react';
import { useScrollSmoothController } from '@/hooks/useScrollSmoothController';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Location from '@/sections/Location';
import Nav from '@/sections/Nav';
import Services from '@/sections/Services';
import { motion, useScroll } from 'framer-motion';
import { followingDotCursor } from 'cursor-effects';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();

    window.addEventListener('resize', checkIsDesktop);

    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  useScrollSmoothController(mainRef, setActiveSection);

  const { scrollXProgress, scrollYProgress } = useScroll({
    container: mainRef,
    axis: isDesktop ? 'x' : 'y'
  });

  useEffect(() => {
    if (!mainRef.current) return;
    if (isDesktop) followingDotCursor();
  }, [isDesktop, mainRef]);

  return (
    <main
      ref={mainRef}
      onScroll={() => setShowMenu(false)}
      className={`flex h-[100dvh] overflow-y-scroll max-md:flex-col max-md:scroll-smooth md:overflow-x-scroll md:overflow-y-hidden ${showMenu ? 'scroll-smooth' : ''}`}
    >
      <motion.div
        className='fixed top-0 right-0 left-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-[#38b6ff] to-[#8EBBEF]'
        style={{ scaleX: isDesktop ? scrollXProgress : scrollYProgress }}
      />

      <Nav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeSection={activeSection}
      />
      <Hero />
      <About />
      <Services />
      <Location />
      <Contact />
    </main>
  );
}
