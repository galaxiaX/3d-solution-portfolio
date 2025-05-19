import { useEffect } from 'react';

export const useScrollSmoothController = (
  mainRef: React.RefObject<HTMLElement | null>,
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
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

      // Update active section
      const sectionId = sections[currentSection].id;
      setActiveSection(sectionId || '');

      // Adjust this value to control the scroll speed (higher = slower)
      const scrollDuration = 1200;

      smoothScrollTo(sections[currentSection], scrollDuration);
    };

    // Function to detect current section on scroll
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollPosition = mainElement.scrollLeft;
      let newActiveSection = '';

      // Find which section is most visible
      sections.forEach((section, index) => {
        const sectionLeft =
          section.getBoundingClientRect().left +
          mainElement.scrollLeft -
          mainElement.getBoundingClientRect().left;
        const sectionRight =
          sectionLeft + section.getBoundingClientRect().width;

        if (
          scrollPosition >= sectionLeft - 100 &&
          scrollPosition < sectionRight - 100
        ) {
          currentSection = index;
          newActiveSection = section.id || '';
        }
      });

      if (newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    mainElement.addEventListener('wheel', handleWheel, { passive: false });
    mainElement.addEventListener('scroll', handleScroll);

    // Initial detection of active section
    setTimeout(handleScroll, 100);

    return () => {
      mainElement.removeEventListener('wheel', handleWheel);
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, [mainRef, setActiveSection]);
};
