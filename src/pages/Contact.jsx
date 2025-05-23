import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'hello@ciesto.com',
    description: 'Send us an email anytime',
    color: 'from-blue-500 to-cyan-500',
    href: 'mailto:hello@ciesto.com'
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Call us during business hours',
    color: 'from-green-500 to-emerald-500',
    href: 'tel:+15551234567'
  },
  {
    icon: FiMessageCircle,
    title: 'WhatsApp',
    value: '+1 (555) 123-4567',
    description: 'Chat with us instantly',
    color: 'from-emerald-500 to-teal-500',
    href: 'https://wa.me/15551234567'
  }
];

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in POS systems, mobile app development, custom web applications, and bespoke software solutions. Our team handles everything from initial consultation to post-launch support.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, mobile apps typically require 8-12 weeks, and complex enterprise solutions can take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes! We offer comprehensive support packages including bug fixes, security updates, feature enhancements, and technical support. We believe in long-term partnerships with our clients.'
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile methodology with regular client communication. Our process includes discovery, planning, design, development, testing, and deployment. You\'ll receive regular updates and can provide feedback throughout.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We have extensive experience integrating with existing systems, APIs, and databases. We can modernize your current setup or build new solutions that work seamlessly with your existing infrastructure.'
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We provide transparent, competitive pricing based on project scope and requirements. We offer both fixed-price projects and hourly rates, depending on your needs. All costs are discussed upfront with no hidden fees.'
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10 min-h-screen">

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
          >
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-6 tracking-wide">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Let's Start Something
              <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your ideas into reality? We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
                <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group block"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{info.value}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                  </div>
                </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Send us a Message</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">We'll get back to you within 24 hours</p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="space-y-6">
                <div>
                  <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Full Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                      placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Email Address
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg"
                      placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 text-lg resize-none"
                      placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 text-lg shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to know about working with us</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                        {faq.question}
                      </h3>
                      {openFaq === index ? (
                          <FiChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      ) : (
                          <FiChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      )}
                    </button>

                    <motion.div
                        initial={false}
                        animate={{
                          height: openFaq === index ? 'auto' : 0,
                          opacity: openFaq === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
}

export default Contact;