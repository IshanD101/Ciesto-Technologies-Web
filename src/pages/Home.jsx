import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG Icons as React components
const ShoppingCartIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 5.2A2 2 0 007 21h10a2 2 0 002-2v0a2 2 0 00-2-2H7" />
    </svg>
);

const SettingsIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const keyServices = [
  {
    title: 'Point of Sale (POS) Systems',
    description: 'Streamline your business operations with our advanced POS solutions. Real-time analytics, inventory management, and seamless payment integration.',
    features: ['Real-time Analytics', 'Inventory Management', 'Payment Integration'],
    icon: ShoppingCartIcon,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Bespoke software designed for your unique business challenges. Scalable solutions that grow with your business needs.',
    features: ['Custom Development', 'System Integration', 'Ongoing Support'],
    icon: SettingsIcon,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
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
        {/* Hero Section with Enhanced Blue Gradient */}
        <section className="relative h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.05)_180deg,transparent_360deg)] animate-spin" style={{animationDuration: '20s'}}></div>
          </div>

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-ping" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-indigo-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-cyan-300 rounded-full opacity-40 animate-ping" style={{animationDelay: '1.5s', animationDuration: '3s'}}></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Moving Light Rays */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-transparent rotate-12 animate-pulse" style={{animationDuration: '4s'}}></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/10 via-transparent to-transparent -rotate-12 animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
          </div>

          <div className="container mx-auto px-4 z-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center"
            >
              <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              >
                We Code Your Vision
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent animate-pulse"
                    style={{animationDuration: '3s'}}
                >
                  into Reality
                </motion.span>
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Transform your ideas into powerful digital solutions with our expert team of developers and designers.
              </motion.p>
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <button
                    className="group px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-2xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                <button
                    className="group px-10 py-4 bg-transparent border-2 border-white/60 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="group-hover:text-cyan-200 transition-colors duration-300">Explore Services</span>
                </button>
              </motion.div>
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

        {/* Key Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 relative">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4 tracking-wide">
                OUR SPECIALTIES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Solutions That Drive Success
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We focus on two core areas where we excel at delivering exceptional results
              </p>
            </motion.div>

            <div className="space-y-16">
              {keyServices.map((service, index) => (
                  <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
                  >
                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.features.map((feature, featureIndex) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </motion.div>
                        ))}
                      </div>

                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                      >
                        <button
                            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          Learn More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </motion.div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 flex justify-center">
                      <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`relative ${service.bgColor} p-12 rounded-3xl shadow-2xl w-full max-w-md`}
                      >
                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-sm"></div>

                        {/* Main Icon */}
                        <div className={`mx-auto w-32 h-32 rounded-3xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-xl mb-6`}>
                          <service.icon className="w-16 h-16 text-white" />
                        </div>

                        {/* Stats/Numbers */}
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                          </div>
                          <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">99%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Success</div>
                          </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
                        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
                      </motion.div>
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* Call to Action within Services */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
                  Let's discuss how we can help transform your business with our specialized solutions.
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <button
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
                  >
                    Contact Us Today
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
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