// components/IntroLoader.jsx
import { motion } from "framer-motion";

const IntroLoader = ({ onComplete }) => {
  const letterAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const name = "Shreyansh Nanavati".split(" ");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background dark:bg-background-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.645, 0.045, 0.355, 1] }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center space-y-1">
        {name.map((word, wordIndex) => (
          <div key={wordIndex} className="overflow-hidden">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.75,
                delay: wordIndex * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              variants={letterAnimation}
            >
              <span className="text-5xl md:text-7xl font-bold font-poppins tracking-tight bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                {word}
              </span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default IntroLoader;