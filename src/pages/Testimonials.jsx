import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What our clients say about us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6">
                "{testimonials[currentIndex].content}"
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-dark dark:hover:bg-primary-light transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:bg-primary-dark dark:hover:bg-primary-light transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;