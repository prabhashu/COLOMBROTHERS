import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { StarIcon, MinusIcon, PlusIcon, TruckIcon, ShieldCheckIcon, HeartIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Product not found
        </h2>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // You could trigger a toast animation here
  };

  return (
    <div className="bg-white min-h-screen py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex text-sm text-gray-500 mb-8"
        >
          <Link to="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-red-600 transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Product Image */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="space-y-4"
          >
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 relative group">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
              
              {/* Discount Badge Animation */}
              {product.discount && (
                <motion.span 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm"
                >
                  -{product.discount}% OFF
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* RIGHT: Product Info */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="mb-2">
              <span className="text-red-600 font-medium uppercase tracking-wide text-sm">
                {product.category}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </motion.h1>

            <motion.div variants={fadeInUp} className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm border-l border-gray-300 pl-4">
                {product.reviews} Reviews
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </motion.p>

            {/* Actions Area */}
            <motion.div variants={fadeInUp} className="border-t border-b border-gray-100 py-6 mb-8 space-y-6">
              <div className="flex items-center gap-6">
                
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="p-3 hover:bg-gray-50 text-gray-600 transition-colors focus:outline-none"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </motion.button>
                  <span className="w-12 text-center font-medium text-gray-900 select-none">
                    {quantity}
                  </span>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)} 
                    className="p-3 hover:bg-gray-50 text-gray-600 transition-colors focus:outline-none"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Add to Cart Button */}
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button onClick={handleAddToCart} size="lg" className="w-full">
                    Add to Cart
                  </Button>
                </motion.div>

                {/* Wishlist Button */}
                <motion.button 
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3.5 border rounded-lg transition-colors focus:outline-none ${isLiked ? 'border-red-200 bg-red-50 text-red-600' : 'border-gray-300 hover:bg-gray-50 text-gray-600'}`}
                >
                  <HeartIcon className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                </motion.button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <TruckIcon className="w-5 h-5 text-red-600" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-red-600" />
                <span>Secure payment guaranteed</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}