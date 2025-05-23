import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With over 15 years of experience in software development and business leadership, Sarah leads our company vision and strategy.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A tech innovator with expertise in cloud architecture and AI, Michael drives our technological advancement and innovation.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Emily brings creative excellence to our projects, ensuring exceptional user experiences across all platforms.'
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A full-stack expert specializing in scalable applications, David leads our development team with technical excellence.'
  }
];

function About() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Company Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Ciesto Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Founded in 2020, Ciesto Technologies has grown from a small team of passionate developers into a leading software development company. 
            We specialize in creating innovative digital solutions that help businesses thrive in the modern technological landscape. 
            Our commitment to excellence and customer satisfaction has earned us the trust of clients worldwide.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We envision a future where technology seamlessly enhances human potential. Our goal is to be at the forefront 
            of digital innovation, creating solutions that not only solve today's challenges but also shape tomorrow's 
            possibilities. Through continuous learning and adaptation, we strive to remain a trusted partner in our clients' 
            digital transformation journeys.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-primary-light dark:text-primary-dark font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;