import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'rakibulhasannahid7@gmail.com',
    link: 'mailto:rakibulhasannahid7@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    value: '+8801818961859',
    link: 'tel:+8801818961859',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    link: 'https://maps.app.goo.gl/ib5gepUezssf2JGSA',
  },
];

const socialLinks = [
  { icon: <Facebook size={24} />, link: 'https://www.facebook.com/rh.nahid.921/', label: 'Facebook' },
  { icon: <Linkedin size={24} />, link: 'https://www.linkedin.com/in/rh-nahid/', label: 'LinkedIn' },
  { icon: <Twitter size={24} />, link: 'https://x.com/RHNahid009', label: 'Twitter' },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-purple-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all transform hover:scale-110"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any platform!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-400" size={20} />
                  <p className="text-gray-300">Available for freelance work</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-purple-400" size={20} />
                  <p className="text-gray-300">Response time: within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}