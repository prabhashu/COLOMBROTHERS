import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const categories = [{
  name: 'Beer',
  products: 11,
  image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop',
  color: 'bg-amber-900/80'
}, {
  name: 'Arrack',
  products: 3,
  image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop',
  color: 'bg-yellow-700/80'
}, {
  name: 'Spirits',
  products: 15,
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop',
  color: 'bg-orange-800/80'
}, {
  name: 'Wine',
  products: 8,
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop',
  color: 'bg-red-900/80'
}];
export function ProductCategories() {
  return <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Product category
            </h2>
            <p className="text-gray-600">Explore Our Amazing Selection</p>
          </div>
          <Link to="/shop" className="flex items-center text-red-600 hover:text-red-700 font-medium">
            View All
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => <Link key={category.name} to={`/shop?category=${category.name}`} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="aspect-square relative">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${category.color} flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-90`}>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">
                    {category.products} products
                  </p>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}