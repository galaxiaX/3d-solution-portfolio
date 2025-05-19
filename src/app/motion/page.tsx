'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FramerCursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Update mouse position
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // Cursor variants for different states
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 20
      }
    },
    button: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 28
      }
    }
  };

  // Handlers for cursor state changes
  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');
  const buttonEnter = () => setCursorVariant('button');
  const buttonLeave = () => setCursorVariant('default');

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-6'>
      {/* Custom cursor */}
      <motion.div
        className='cursor pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 rounded-full bg-white'
        variants={variants}
        animate={cursorVariant}
      />

      <div className='mb-12 w-full max-w-3xl text-center'>
        <h1
          className='mb-8 text-5xl font-bold text-white'
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Framer Motion Cursor Effect
        </h1>

        <p
          className='mb-12 text-xl text-gray-300'
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Move your cursor around the screen to see the cursor follow with a
          spring animation. Hover over text and buttons to see the cursor change
          appearance.
        </p>

        <div className='mb-12 flex flex-wrap justify-center gap-4'>
          <button
            className='rounded-lg border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-gray-900'
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Interactive Button
          </button>

          <button
            className='rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700'
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Hover Me
          </button>
        </div>
      </div>

      <div className='grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2'>
        <div
          className='rounded-xl bg-gray-800 p-6'
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h3 className='mb-3 text-2xl font-semibold text-white'>
            Interactive Text
          </h3>
          <p className='text-gray-300'>
            This text block changes the cursor when you hover over it. The
            cursor expands using a smooth spring animation.
          </p>
        </div>

        <div
          className='rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-6'
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h3 className='mb-3 text-2xl font-semibold text-white'>
            Dynamic Elements
          </h3>
          <p className='text-white'>
            Framer Motion makes it easy to create responsive, physics-based
            animations for cursor effects.
          </p>
        </div>
      </div>

      <div
        className='mt-12 text-center'
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <p className='text-gray-400'>
          This cursor effect uses Framer Motion&apos;s spring animations for a
          natural feel. The mixBlendMode property creates the inverted effect on
          hover.
        </p>
      </div>
    </div>
  );
};
export default FramerCursorEffect;
