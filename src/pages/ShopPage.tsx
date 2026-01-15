import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { FilterIcon, ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ShopPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Arrack', 'Beer', 'Spirits', 'Wine', 'Toddy'];

  const filteredProducts = useMemo(() => {
    let result = products;
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    // Sort
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 text-white py-12 mb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Our Collection
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Explore our premium selection of spirits, beers, and wines. From
            local favorites to international classics.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters - Desktop */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
            className="hidden lg:block w-64 flex-shrink-0 space-y-8"
          >
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === category} 
                      onChange={() => setSelectedCategory(category)} 
                      className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500" 
                    />
                    <span className={`ml-3 transition-colors duration-200 ${selectedCategory === category ? 'text-red-600 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                Price Range
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="200" 
                  value={priceRange[1]} 
                  onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600" 
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
              <button onClick={() => setShowFilters(!showFilters)} className="flex items-center text-gray-700 font-medium">
                <FilterIcon className="w-5 h-5 mr-2" />
                Filters
                <motion.div animate={{ rotate: showFilters ? 180 : 0 }}>
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </motion.div>
              </button>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border-none bg-transparent text-gray-700 font-medium focus:ring-0">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Mobile Filters Expanded Animation */}
            <AnimatePresence>
              {showFilters && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white px-4 pb-4 rounded-b-lg shadow-sm space-y-6 overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <button 
                          key={category} 
                          onClick={() => setSelectedCategory(category)} 
                          className={`px-3 py-1 rounded-full text-sm transition-all ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      Price Range: ${priceRange[1]}
                    </h3>
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      value={priceRange[1]} 
                      onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">
                Showing {filteredProducts.length} results
              </p>
              <div className="hidden lg:flex items-center">
                <span className="text-gray-500 mr-3">Sort by:</span>
                <select 
                  value={sortBy} 
                  onChange={e => setSortBy(e.target.value)} 
                  className="border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Grid Animation */}
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <motion.div
                      layout
                      key={product.id}
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="col-span-full text-center py-20 bg-white rounded-lg border border-dashed border-gray-300"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      No products found
                    </h3>
                    <p className="text-gray-500 mt-1">
                      Try adjusting your filters or search criteria.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedCategory('All');
                        setPriceRange([0, 200]);
                      }} 
                      className="mt-4 text-red-600 hover:text-red-700 font-medium"
                    >
                      Clear all filters
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}