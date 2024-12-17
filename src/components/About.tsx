import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocLaZu4P0_GWZexETNwRb1Yn0ni2_QKwiA8PvF13FNXaFsCPIvlx=s360-c-no"
              alt="Profile"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300"
          >
            <p className="text-lg mb-6">
              Hello! I'm a passionate Full Stack Developer with 5 years of experience in creating
              beautiful and functional web applications. I specialize in modern web technologies
              and love bringing ideas to life through code.
            </p>
            <p className="text-lg mb-6">
              My journey in tech started when I built my first website at the age of 15.
              Since then, I've been constantly learning and evolving with the ever-changing
              landscape of web development.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through technical blog posts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}