'use client';
import { useRef, useEffect } from 'react';

const useScrollSmoothController = (
  mainRef: React.RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    let isScrolling = false;
    let currentSection = 0;
    const sections = mainElement.querySelectorAll('section');

    const smoothScrollTo = (element: Element, duration: number) => {
      if (isScrolling) return;
      isScrolling = true;

      const start = mainElement.scrollLeft;
      const end =
        element.getBoundingClientRect().left +
        mainElement.scrollLeft -
        mainElement.getBoundingClientRect().left;
      const change = end - start;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          mainElement.scrollLeft = end;
          isScrolling = false;
          return;
        }

        // Easing function: easeInOutCubic
        let t = elapsedTime / duration;
        t = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        mainElement.scrollLeft = start + change * t;
        requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        currentSection++;
      } else if (e.deltaY < 0 && currentSection > 0) {
        currentSection--;
      }

      // Adjust this value to control the scroll speed (higher = slower)
      const scrollDuration = 1200;

      smoothScrollTo(sections[currentSection], scrollDuration);
    };

    mainElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      mainElement.removeEventListener('wheel', handleWheel);
    };
  }, [mainRef]);
};

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useScrollSmoothController(mainRef);

  return (
    <main
      ref={mainRef}
      className='flex h-[100dvh] overflow-x-scroll overflow-y-hidden'
    >
      <section className='relative h-[100dvh] w-[100dvw] shrink-0 bg-gradient-to-tr from-[#8EBBEF] to-[#BEEAFB] shadow-xl'>
        <div className='absolute top-[5%] left-[5%] m-12 text-4xl font-semibold'>
          3DSolution
        </div>

        <div className='absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 justify-end'>
          <div className='flex w-[80%] flex-col items-center gap-4'>
            <div className='text-[44px] font-medium'>
              Smart Solution, Real Impact
            </div>
            <div className='text-center text-[24px] font-medium'>
              Custom software solutions designed to scale,
              <br />
              simplify, and accelerate your business
            </div>
            <button className='w-fit rounded-full bg-[#38B6FF] px-4 py-2'>
              Contact us
            </button>
          </div>
        </div>
      </section>
      <section className='h-[100dvh] w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-[100dvh] w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-[100dvh] w-[100dvw] shrink-0 shadow-xl'></section>
      <section className='h-[100dvh] w-[100dvw] shrink-0 bg-[#38B6FF] shadow-xl'></section>
    </main>
  );
}
