'use client';

import { useRef, useState } from 'react';
import { useScrollSmoothController } from '@/hooks/useScrollSmoothController';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Location from '@/sections/Location';
import Nav from '@/sections/Nav';
import Services from '@/sections/Services';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useScrollSmoothController(mainRef, setActiveSection);

  return (
    <main
      ref={mainRef}
      onScroll={() => setShowMenu(false)}
      className={`flex h-[100dvh] overflow-x-scroll overflow-y-hidden ${showMenu ? 'scroll-smooth' : ''}`}
    >
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
