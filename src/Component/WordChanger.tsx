import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const WordChanger:React.FC = () => {
  const words = ["Happy Valentine's day!", "Happy Anniversary!"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationComplete, setAnimationComplete] = useState<boolean>(true); // Control fade timing
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordRef.current && animationComplete) {
      gsap.fromTo(
        wordRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [currentIndex, animationComplete]);

  // Change word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationComplete(false); // Disable new animation while fading out
      gsap.to(wordRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
          setAnimationComplete(true); // Re-enable new animation
        },
      });
    }, 8000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <motion.div
      ref={wordRef}
      className="text-xl md:-ml-[10px] text-start ml-4 md:text-center text-white font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {words[currentIndex]}
    </motion.div>
  );
};

export default WordChanger;
