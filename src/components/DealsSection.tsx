import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from 'lucide-react';
const deals = [{
  id: 1,
  name: 'Premium Whiskey',
  originalPrice: 89.99,
  salePrice: 69.99,
  discount: 22,
  image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=400&fit=crop'
}, {
  id: 2,
  name: 'Craft Beer Pack',
  originalPrice: 45.99,
  salePrice: 34.99,
  discount: 24,
  image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop'
}, {
  id: 3,
  name: 'Premium Vodka',
  originalPrice: 59.99,
  salePrice: 44.99,
  discount: 25,
  image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=400&fit=crop'
}, {
  id: 4,
  name: 'Red Wine Selection',
  originalPrice: 79.99,
  salePrice: 59.99,
  discount: 25,
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop'
}];
export function DealsSection() {
  return <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Deals of the week
            </h2>
            <p className="text-gray-600">View the latest deals and save</p>
          </div>
          <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
            View All
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>
        {/* Deals Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map(deal => <div key={deal.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img src={deal.image} alt={deal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{deal.discount}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {deal.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-red-600">
                      ${deal.salePrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Navigation Arrows */}
          <button className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors duration-200">
            <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
          </button>
          <button className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors duration-200">
            <ChevronRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>;
}