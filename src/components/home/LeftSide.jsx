import React from "react";
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LeftSide = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section ref={ref} className="flex flex-col items-center">
      <motion.h5
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="text-white text-xl ml-3"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.3 }}
        >
          <span className="text-5xl p-2">👋</span> I'm
        </motion.div>
        <motion.p
          className="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        >
          Bhupesh Kumar
        </motion.p>
      </motion.h5>
      <motion.h1
        className="relative text-white text-xl mt-4"
        initial="hidden"
        animate={controls}
        variants={textVariants}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
      >
        <Typewriter
          options={{
            strings: [
              "Fullstack developer",
              "React developer",
              "MERN developer",
              "React Native developer",
            ],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriter-text",
          }}
        />
      </motion.h1>
      <button className="download-cv-button mt-4 rounded-xl">
        Download CV
      </button>
    </section>
  );
};

export default LeftSide;
