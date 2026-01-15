import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define Animation Variants for cleaner code
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
};

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or your order? We're here to help.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Contact Info (Staggered List) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </motion.h2>
            
            <div className="space-y-8">
              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Liquor Street, Colombo 03
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone Number</h3>
                  <p className="text-gray-600">+94 11 234 5678</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full text-red-600 mr-4">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-600">info@colombrothers.com</p>
                  <p className="text-gray-600">support@colombrothers.com</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['FB', 'IG', 'TW'].map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, backgroundColor: "#DC2626", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer text-gray-600 font-medium"
                  >
                    {social}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Success Message Animation */
                <motion.div 
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <SendIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you as soon as possible.
                  </p>
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                  >
                    <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                /* Form Animation */
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white transition-all focus:shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white transition-all focus:shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white transition-all focus:shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white transition-all focus:shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none bg-white resize-none transition-all focus:shadow-sm"></textarea>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" fullWidth size="lg">
                      Send Message
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}