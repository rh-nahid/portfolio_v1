import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Canadian University of Bangladesh , Dhaka',
    year: '2024 - Present',
    
  },
  {
    degree: 'Diploma in Computer Technology',
    school: 'National Polytechnic Institute ,Dhaka',
    year: '2019 - 2023',
    
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              ref={ref}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-8 relative"
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <div className="flex items-center text-purple-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.year}</span>
                </div>
                <h4 className="text-xl text-gray-300 mb-4">{edu.school}</h4>
                <p className="text-gray-400">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}