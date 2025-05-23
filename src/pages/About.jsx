import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiTarget, FiEye, FiAward, FiDollarSign, FiClock, FiUsers } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With over 15 years of experience in software development and business leadership, Sarah leads our company vision and strategy.',
    expertise: 'Business Strategy'
  },
  {
    name: 'Michael Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A tech innovator with expertise in cloud architecture and AI, Michael drives our technological advancement and innovation.',
    expertise: 'Technology Leadership'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design & Co-Founder',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Emily brings creative excellence to our projects, ensuring exceptional user experiences across all platforms.',
    expertise: 'UI/UX Design'
  },
  {
    name: 'David Park',
    role: 'Lead Developer & Co-Founder',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A full-stack expert specializing in scalable applications, David leads our development team with technical excellence.',
    expertise: 'Full-Stack Development'
  }
];

const whyUsReasons = [
  {
    icon: FiHeart,
    title: 'Passionate Commitment',
    description: 'We pour our hearts into every project, treating your success as our own.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: FiClock,
    title: '5+ Years Experience',
    description: 'Since 2020, we\'ve delivered exceptional results across diverse industries.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Excellence',
    description: 'Premium quality solutions at prices that make sense for your business.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FiUsers,
    title: 'Personal Touch',
    description: 'As a small team, you get direct access to founders and decision-makers.',
    color: 'from-purple-500 to-indigo-500'
  }
];

function About() {
  return (
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 min-h-screen">

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
          >
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-6 tracking-wide">
              WHO WE ARE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              More Than Just Developers
              <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              We're Your Digital Partners
            </span>
            </h1>
          </motion.div>
        </div>

        {/* Our Story Section */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    It all started in 2020 when four college friends decided to turn their shared passion for technology into something meaningful. What began as late-night coding sessions in a small apartment has grown into Ciesto Technologies – a company built on friendship, trust, and the belief that great software comes from genuine care.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We're not just business partners; we're friends who genuinely enjoy working together and solving complex problems. This unique bond translates into better communication, faster decision-making, and a level of dedication that's hard to find elsewhere.
                  </p>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-3xl p-8 text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2020</div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium mb-4">Founded by Friends</div>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <FiTarget className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-95">
                To empower businesses with innovative, affordable technology solutions that drive growth and success. We believe every company, regardless of size, deserves access to cutting-edge software that transforms their operations and enhances their competitive edge.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/70 rounded-full"></div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                  <FiEye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the go-to technology partner for businesses seeking personalized, high-quality software solutions. We envision a future where technology seamlessly enhances human potential, and we want to be the bridge that makes this vision a reality for our clients.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">25+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Clients</div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">5+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Meet the Founders Section */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Founders</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Four friends who turned their shared vision into a thriving technology company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="relative overflow-hidden">
                      <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">{member.role}</p>
                        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                          {member.expertise}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>

        {/* Why Us Section */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're more than just developers – we're your dedicated partners in digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsReasons.map((reason, index) => (
                <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{reason.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
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
            className="container mx-auto px-4"
        >
          <div className="bg-gradient-to-r from-slate-800 to-gray-800 dark:from-gray-800 dark:to-slate-800 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Friends?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the difference of working with a team that genuinely cares about your success.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-gray-800 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
  );
}

export default About;