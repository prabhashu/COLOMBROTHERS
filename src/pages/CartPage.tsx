import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Trash2Icon, MinusIcon, PlusIcon, ArrowRightIcon, ShoppingBagIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart();
  const navigate = useNavigate();

  // Official Brand Logos (Direct Links)
  const paymentMethods = [
    { name: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'Amex', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg' },
    { name: 'PayPal', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' }
  ];

  // Empty Cart State
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShoppingBagIcon className="w-10 h-10 text-gray-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any drinks to your cart yet.
          </p>
          <Link to="/shop">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button fullWidth>Start Shopping</Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Active Cart State
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items List */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <div className="flex-1 w-full text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-red-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{item.category}</p>

                    <div className="flex items-center justify-center sm:justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="p-2 hover:bg-gray-50 text-gray-600 transition-colors disabled:opacity-50" 
                          disabled={item.quantity <= 1}
                        >
                          <MinusIcon className="w-4 h-4" />
                        </motion.button>
                        <span className="w-10 text-center font-medium text-gray-900 select-none">
                          {item.quantity}
                        </span>
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="p-2 hover:bg-gray-50 text-gray-600 transition-colors"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.1, color: "#DC2626" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)} 
                        className="ml-4 text-gray-400 hover:text-red-600 transition-colors p-2" 
                        aria-label="Remove item"
                      >
                        <Trash2Icon className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{cartTotal > 100 ? 'Free' : '$15.00'}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (Estimated)</span>
                  <span>${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <motion.span 
                    key={cartTotal}
                    initial={{ scale: 1.1, color: "#DC2626" }}
                    animate={{ scale: 1, color: "#111827" }}
                  >
                    $
                    {(cartTotal + (cartTotal > 100 ? 0 : 15) + cartTotal * 0.08).toFixed(2)}
                  </motion.span>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button fullWidth size="lg" onClick={() => navigate('/checkout')} className="group">
                  Proceed to Checkout
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* FIXED PAYMENT ICONS - FULL COLOR */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">We accept</p>
                <div className="flex justify-center gap-4 items-center">
                  {paymentMethods.map((method) => (
                    <div key={method.name} className="bg-white rounded p-1">
                      <img 
                        src={method.src} 
                        alt={method.name} 
                        // Removed 'grayscale' class, added 'hover:scale-110' for effect
                        className="h-8 w-auto object-contain hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}echo "# COLOMBROTHERS" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/prabhashu/COLOMBROTHERS.git
git push -u origin main