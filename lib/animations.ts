import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideIn = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideIn}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleUp: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleUp}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default { FadeIn, SlideIn, ScaleUp };