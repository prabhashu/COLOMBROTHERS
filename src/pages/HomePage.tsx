import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProductCategories } from '../components/ProductCategories';
import { DealsSection } from '../components/DealsSection';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, ClockIcon, CreditCardIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

const scaleOnHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

export function HomePage() {
  // Get featured products
  const featuredProducts = products.slice(0, 4);

  // Data for features to make mapping/animating easier
  const features = [
    { icon: TruckIcon, title: "Free Shipping", text: "On orders over $100" },
    { icon: ShieldCheckIcon, title: "Secure Payment", text: "100% protected payments" },
    { icon: ClockIcon, title: "Fast Delivery", text: "Same day delivery available" },
    { icon: CreditCardIcon, title: "Easy Returns", text: "Hassle-free return policy" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section - Assuming HeroSection handles its own internal animation, 
          but we wrap it just in case */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <HeroSection />
      </motion.div>

      {/* Features Banner */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="bg-red-100 p-3 rounded-full text-red-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories with Fade In */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <ProductCategories />
      </motion.div>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">
                Hand-picked selections just for you
              </p>
            </motion.div>
            
            <Link to="/shop" className="flex items-center text-red-600 hover:text-red-700 font-medium group">
              <motion.span whileHover={{ x: -4 }}>View All Products</motion.span>
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProducts.map(product => (
              <motion.div key={product.id} variants={fadeInUp}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <DealsSection />
      </motion.div>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&h=600&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover" 
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Club
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Subscribe to our newsletter and get 10% off your first order plus
              exclusive offers.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-sm transition-all focus:bg-white/20" 
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-lg"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}