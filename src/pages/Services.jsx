import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiSmartphone, FiMonitor, FiSettings } from 'react-icons/fi';

const services = [
  {
    title: 'Point of Sale (POS) & Business Operations',
    description: 'Streamline your business with our advanced POS systems and operational management solutions. From inventory tracking to sales analytics, we help you optimize every aspect of your business operations.',
    features: ['Real-time Analytics', 'Inventory Management', 'Multi-location Support', 'Payment Integration'],
    icon: FiShoppingCart,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Mobile App Development',
    description: 'Transform your ideas into powerful mobile applications. We create native iOS and Android apps, as well as cross-platform solutions that deliver exceptional user experiences across all devices.',
    features: ['Native iOS & Android', 'Cross-platform Solutions', 'UI/UX Design', 'App Store Optimization'],
    icon: FiSmartphone,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    title: 'Custom Web Applications',
    description: 'Build scalable, responsive web applications tailored to your specific needs. From simple websites to complex enterprise solutions, we deliver cutting-edge web technologies.',
    features: ['Responsive Design', 'Modern Frameworks', 'API Integration', 'Performance Optimization'],
    icon: FiMonitor,
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Get bespoke software solutions designed specifically for your business challenges. We analyze your requirements and deliver efficient, scalable software that grows with your business.',
    features: ['Custom Development', 'System Integration', 'Database Design', 'Ongoing Support'],
    icon: FiSettings,
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-50 dark:bg-slate-900/20'
  }
];

function Services() {
  return (
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 min-h-screen">
        {/* Intro Section */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
          >
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-6 tracking-wide">
              WHAT WE DO
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Crafting Digital Excellence
              <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              One Solution at a Time
            </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We specialize in creating innovative technology solutions that drive business growth.
              From point-of-sale systems to custom applications, we transform your digital vision into reality.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12 lg:gap-16`}
                >
                  {/* Content Side */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                          <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                              viewport={{ once: true }}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                          </motion.div>
                      ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
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
        </div>

        {/* Call to Action */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital goals and drive growth.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
  );
}

export default Services;