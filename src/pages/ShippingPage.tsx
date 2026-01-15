import React from 'react';
import { TruckIcon, ClockIcon, MapPinIcon, PackageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export function ShippingPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Shipping & Delivery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fast, reliable delivery across Sri Lanka with real-time tracking.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Delivery Options */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-red-200 shadow-lg">
              <TruckIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Same-Day Delivery
            </h2>
            <p className="text-gray-600 mb-6">
              Available in Colombo and surrounding areas for orders placed
              before 2:00 PM. Perfect for last-minute needs or special
              occasions.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Order before 2 PM for same-day delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Delivery between 4 PM - 9 PM</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Rs. 500 delivery fee (free over Rs. 10,000)</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-gray-200 shadow-lg">
              <ClockIcon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Standard Delivery
            </h2>
            <p className="text-gray-600 mb-6">
              Nationwide delivery across Sri Lanka. Reliable service with
              real-time tracking for all your orders.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>2-3 business days nationwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Real-time tracking available</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">•</span>
                <span>Rs. 300 delivery fee (free over Rs. 10,000)</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Delivery Zones */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Delivery Zones
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { zone: "Zone 1 - Colombo", time: "Same-day delivery available", areas: ["Colombo 1-15", "Dehiwala", "Mount Lavinia", "Nugegoda", "Maharagama"] },
                { zone: "Zone 2 - Suburbs", time: "1-2 business days", areas: ["Gampaha", "Kaduwela", "Homagama", "Kelaniya", "Ja-Ela"] },
                { zone: "Zone 3 - Nationwide", time: "2-3 business days", areas: ["Kandy", "Galle", "Negombo", "Kurunegala", "All other areas"] }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="flex items-center mb-4">
                    <MapPinIcon className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.zone}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.time}
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.areas.map(area => (
                      <li key={area}>• {area}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            How Delivery Works
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: "1", title: "Place Order", desc: "Select your products and complete checkout with your delivery address." },
              { step: "2", title: "Order Confirmed", desc: "Receive instant confirmation via email and SMS with order details." },
              { step: "3", title: "Out for Delivery", desc: "Track your order in real-time. Driver calls 30 minutes before arrival." },
              { step: "4", title: "Delivered", desc: "Receive your order safely packaged. Enjoy your premium spirits!" }
            ].map((item) => (
              <motion.div key={item.step} variants={fadeInUp} className="text-center group">
                <motion.div 
                  variants={scaleIn}
                  className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300"
                >
                  <span className="text-2xl font-bold text-red-600 group-hover:text-white transition-colors duration-300">{item.step}</span>
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Packaging */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <PackageIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Secure Packaging</h2>
              <p className="text-gray-300 mb-6">
                Every order is carefully packaged to ensure your products arrive
                in perfect condition. We use protective materials and discrete
                packaging for your privacy.
              </p>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Bubble wrap and protective inserts",
                  "Sturdy corrugated boxes",
                  "Discrete, unmarked packaging",
                  "Temperature-controlled for sensitive items"
                ].map((text, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="text-red-500 mr-2">✓</span>
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&h=400&fit=crop" 
                alt="Secure packaging" 
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}