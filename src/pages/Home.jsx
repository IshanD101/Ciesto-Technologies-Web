import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'SaaS Platforms',
    description: 'Scalable software-as-a-service solutions for your business needs.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions to meet your specific requirements.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Tech Consulting',
    description: 'Expert guidance on technology strategy and implementation.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, TechStart',
    content: 'Working with Ciesto Technologies was a game-changer for our business. Their expertise and dedication to quality are unmatched.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Lisa Chen',
    role: 'Founder, InnovateCo',
    content: 'The team at Ciesto delivered our project on time and exceeded our expectations. Their attention to detail is impressive.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Mark Johnson',
    role: 'CTO, DataFlow',
    content: 'Exceptional service and technical expertise. Ciesto Technologies helped us transform our digital presence.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
      <div>
        {/* Hero Section with Blue Gradient */}
        <section className="relative h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                We Code Your Vision
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                into Reality
              </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your ideas into powerful digital solutions with our expert team of developers and designers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                    to="/contact"
                    className="px-10 py-4 bg-white text-blue-800 font-bold text-lg rounded-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Get Started
                </Link>
                <Link
                    to="/services"
                    className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-blue-800 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Creative Curvy Divider */}
        <div className="relative">
          <svg className="w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
                d="M0,0 C150,100 300,0 600,50 C900,100 1050,0 1200,20 L1200,120 L0,120 Z"
                fill="white"
                className="dark:fill-gray-900"
            />
            <path
                d="M0,20 C150,80 300,20 600,70 C900,120 1050,20 1200,40 L1200,120 L0,120 Z"
                fill="rgb(239 246 255)"
                className="dark:fill-gray-800"
                fillOpacity="0.5"
            />
          </svg>
        </div>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 relative">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions for your digital needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                  <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Trusted by leading companies worldwide
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 ring-4 ring-blue-200 dark:ring-blue-800">
                    <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </motion.div>

              <div className="flex justify-center mt-10 space-x-3">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            currentTestimonial === index
                                ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Home;