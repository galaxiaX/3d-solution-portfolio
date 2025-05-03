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
      <section className='grid h-[100dvh] w-[100dvw] shrink-0 grid-cols-2 shadow-xl'>
        <div className='grid grid-rows-2'>
          <div className='h-full w-full shrink-0 bg-red-400'></div>
          <div className='h-full w-full shrink-0 bg-blue-400'></div>
        </div>
        <div className='flex flex-col gap-16 p-20'>
          <div className='text-6xl font-medium text-[#38b6ff]'>About Us</div>

          <div className='text-lg text-[#535353]'>
            At 3DSolution, we are dedicated to pioneering innovative solutions
            in the tech industry. With a focus on software development, cloud
            services, and solution service, we aim to transform businesses by
            delivering cutting-edge products and services that drive efficiency
            and growth.
            <br />
            <br />
            Our team is comprised of skilled professionals who share a passion
            for pushing the boundaries of what&apos;s possible. By embracing the
            latest technologies, we provide our clients with personalized
            solutions that meet their unique needs and challenges.
            <br />
            <br />
            With a strong commitment to quality, reliability, and customer
            satisfaction, we strive to build lasting relationships with our
            clients and partners. At 3DSolution, we don&apos;t just provide
            services – we create opportunities for success.
          </div>
        </div>
      </section>
      <section className='flex h-[100dvh] w-[100dvw] shrink-0 items-center justify-center shadow-xl'>
        <div className='grid h-full max-h-[60%] w-full max-w-[90%] grid-cols-4 grid-rows-2 gap-2'>
          <div className='col-span-2 shrink-0 p-16 text-6xl font-medium text-[#38b6ff]'>
            Our services
          </div>
          <div className='relative shrink-0 bg-red-400'>
            <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
              IT System Consulting Service
            </div>
          </div>
          <div className='relative row-span-2 shrink-0 bg-red-400'>
            <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
              System Development Service
            </div>
          </div>
          <div className='shrink-0'></div>
          <div className='relative shrink-0 bg-red-400'>
            <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
              Fintech Solution
            </div>
          </div>
          <div className='relative shrink-0 bg-red-400'>
            <div className='absolute bottom-[32px] w-full text-center text-white drop-shadow-2xl'>
              Mobile Application
              <br />
              Development Service
            </div>
          </div>
        </div>
      </section>
      <section className='grid h-[100dvh] w-[100dvw] shrink-0 grid-cols-11 shadow-xl'>
        <div className='col-span-5 p-16 text-6xl font-medium text-[#38b6ff]'>
          Contact
        </div>
        <div className='col-span-6 bg-blue-400'></div>
      </section>
      <section className='relative h-[100dvh] w-[100dvw] shrink-0 bg-[#38B6FF] shadow-xl'>
        <div className='absolute top-[5%] left-[5%] m-12 text-4xl font-semibold'>
          3DSolution
        </div>

        <div className='grid h-full w-full grid-cols-5 gap-12 p-[7%] font-medium text-white'>
          <div className='col-span-2'></div>
          <div className='col-span-3 min-h-[300px] pr-48 text-4xl'>
            Your final impact statement goes here. Make it memorable!
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-lg'>connect with us</div>
            <div className='flex flex-col gap-2 text-sm'>
              <div>Instagram</div>
              <div>Twitter</div>
              <div>Facebook</div>
              <div>LinkedIn</div>
            </div>
          </div>
          <div className='flex flex-col gap-4'></div>
          <div className='flex flex-col gap-4'>
            <div className='text-lg'>our locations</div>
            <div className='flex flex-col gap-2 text-sm'>
              <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-lg'>our locations 2</div>
            <div className='flex flex-col gap-2 text-sm'>
              <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-lg'>our locations 3</div>
            <div className='flex flex-col gap-2 text-sm'>
              <div>Add your location 123 Anywhere St., Any City, ST 12345</div>
            </div>
          </div>
          <div className='col-span-5 text-xl font-semibold'>
            hello@reallygreatsite.com
          </div>
        </div>
      </section>
    </main>
  );
}
