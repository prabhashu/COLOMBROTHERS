import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const accordionVariants = {
  collapsed: { 
    height: 0, 
    opacity: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
  },
  expanded: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }
  }
};

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      category: 'Orders & Delivery',
      questions: [
        {
          q: 'What are your delivery areas?',
          a: 'We deliver nationwide across Sri Lanka. Same-day delivery is available in Colombo and surrounding areas for orders placed before 2 PM. Other regions receive delivery within 2-3 business days.'
        },
        {
          q: 'What is the minimum order value?',
          a: 'The minimum order value is Rs. 2,000. Orders above Rs. 10,000 qualify for free delivery within Colombo.'
        },
        {
          q: 'Can I track my order?',
          a: "Yes! Once your order is dispatched, you'll receive a tracking number via SMS and email. You can track your order in real-time through our website."
        },
        {
          q: "What if I'm not home during delivery?",
          a: "Our delivery partner will call you 30 minutes before arrival. If you're unavailable, we can reschedule delivery or leave the package with a trusted neighbor (with your permission)."
        }
      ]
    },
    {
      category: 'Products & Pricing',
      questions: [
        {
          q: 'Are your products authentic?',
          a: 'Absolutely. We source all products directly from authorized distributors and manufacturers. Every bottle comes with authenticity guarantees and proper documentation.'
        },
        {
          q: 'Do you offer bulk discounts?',
          a: 'Yes! For orders of 6 or more bottles of the same product, we offer a 10% discount. Corporate and event orders receive special pricing - contact us for details.'
        },
        {
          q: 'How do I know if a product is in stock?',
          a: "Product availability is shown in real-time on each product page. If an item shows 'Out of Stock', you can click 'Notify Me' to receive an email when it's back in stock."
        },
        {
          q: 'Can I request a specific product not listed?',
          a: "Yes! Contact our customer service team with your request. If the product is available through our suppliers, we'll do our best to source it for you."
        }
      ]
    },
    {
      category: 'Payment & Security',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex), online banking, and cash on delivery. All online payments are processed through secure, encrypted gateways.'
        },
        {
          q: 'Is my payment information secure?',
          a: 'Yes. We use industry-standard SSL encryption and never store your complete card details. All transactions are processed through PCI-compliant payment gateways.'
        },
        {
          q: 'Can I pay cash on delivery?',
          a: 'Yes, cash on delivery is available for orders under Rs. 25,000. A small COD fee of Rs. 200 applies.'
        }
      ]
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We accept returns within 7 days of delivery for unopened, undamaged products in original packaging. Damaged or defective items can be returned within 48 hours of delivery.'
        },
        {
          q: 'How do refunds work?',
          a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned product. The amount will be credited to your original payment method.'
        },
        {
          q: 'What if my order arrives damaged?',
          a: "Please contact us immediately with photos of the damage. We'll arrange a replacement or full refund at no additional cost to you."
        }
      ]
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about ordering, delivery, and our
            products.
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((category, categoryIndex) => (
            <motion.div 
              key={category.category} 
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <motion.div 
                      key={questionIndex} 
                      initial={false}
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-red-200 transition-colors"
                    >
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)} 
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                      >
                        <span className={`font-semibold pr-8 transition-colors ${isOpen ? 'text-red-600' : 'text-gray-900'}`}>
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDownIcon className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-red-600' : 'text-gray-500'}`} />
                        </motion.div>
                      </button>

                      {/* Smooth Slide Animation for Answer */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            variants={accordionVariants}
                            initial="collapsed"
                            animate="expanded"
                            exit="collapsed"
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions - CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team
            is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              Contact Support
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+94112345678" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Call Us: +94 11 234 5678
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}