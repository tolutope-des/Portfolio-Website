import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { CursorVariant } from '../types';

interface CustomCursorProps {
  variant: CursorVariant;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ variant }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  const variants = {
    [CursorVariant.DEFAULT]: {
      height: 16,
      width: 16,
      backgroundColor: "var(--foreground)",
      opacity: 1,
      border: "1px solid var(--background)",
    },
    [CursorVariant.HOVER]: {
      height: 64,
      width: 64,
      backgroundColor: "transparent",
      border: "1px solid var(--foreground)",
      opacity: 1,
    },
    [CursorVariant.TEXT]: {
      height: 32,
      width: 4,
      backgroundColor: "var(--foreground)",
      opacity: 1,
    },
    [CursorVariant.BUTTON]: {
        height: 16,
        width: 16,
        backgroundColor: "transparent",
        border: "2px solid var(--foreground)",
        scale: 2.5,
        opacity: 1,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.div 
        className="-translate-x-1/2 -translate-y-1/2 rounded-full"
        variants={variants}
        animate={variant}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </motion.div>
  );
};

export default CustomCursor;