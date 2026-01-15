import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { AwardIcon, UsersIcon, TruckIcon, ShieldCheckIcon } from 'lucide-react';
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

export function AboutPage() {
  const team = [
    {
      name: 'Michael Colom',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'David Colom',
      role: 'Co-Founder & Master Sommelier',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'James Chen',
      role: 'Beverage Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: AwardIcon,
      title: 'Quality First',
      description: 'We source only the finest spirits from trusted distilleries worldwide.'
    },
    {
      icon: UsersIcon,
      title: 'Customer Focused',
      description: "Your satisfaction is our priority. We're here to help you find the perfect drink."
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Same-day delivery available in Colombo. Nationwide shipping within 2-3 days.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Safe',
      description: 'All transactions are encrypted and your data is protected with industry-leading security.'
    }
  ];

  const journey = [
    { year: '1985', title: 'The Beginning', desc: 'Michael and David Colom open their first store in Colombo, focusing on premium imported spirits.' },
    { year: '1995', title: 'Expansion', desc: 'Opened three additional locations and became the exclusive distributor for several international brands.' },
    { year: '2010', title: 'Going Digital', desc: 'Launched our e-commerce platform, bringing premium spirits to customers nationwide with convenient delivery.' },
    { year: '2023', title: 'Today', desc: 'Serving over 50,000 customers with 500+ premium brands and same-day delivery in major cities.' }
  ];

  const stats = [
    { value: '38+', label: 'Years Experience' },
    { value: '500+', label: 'Premium Brands' },
    { value: '50k+', label: 'Happy Customers' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1920&h=800&fit=crop" 
            alt="Bar background" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three generations of passion, expertise, and dedication to bringing
            you the world's finest spirits since 1985.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Family Tradition
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Colom Brothers started as a small family-owned shop in the heart
              of Colombo in 1985. Founded by two brothers, Michael and David
              Colom, with a shared passion for quality spirits and exceptional
              customer service, we have grown into one of Sri Lanka's most
              trusted liquor distributors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              What began as a modest storefront has evolved into a comprehensive
              online platform, serving thousands of customers across the
              country. Our commitment remains unchanged: to provide authentic,
              premium beverages with the personal touch that has defined us for
              nearly four decades.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We believe that every bottle tells a story. That's why we
              personally travel to distilleries, vineyards, and breweries around
              the world to hand-select products that meet our exacting
              standards.
            </p>
            <Link to="/shop">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="lg">Explore Our Collection</Button>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop" 
              alt="Store interior" 
              className="relative rounded-2xl shadow-xl w-full" 
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Values
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map(value => (
              <motion.div key={value.title} variants={fadeInUp} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Meet Our Team
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={member.name} 
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats - Now Animated */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Our Journey
        </motion.h2>
        
        <motion.div 
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {journey.map((item) => (
            <motion.div key={item.year} variants={fadeInUp} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-red-600">{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-2 relative z-10 ring-4 ring-white"></div>
              {/* Note: If you want a vertical line connecting these, you'd add a border-l to the parent container 
                  or an absolute positioned line. Keeping it simple for now. */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}