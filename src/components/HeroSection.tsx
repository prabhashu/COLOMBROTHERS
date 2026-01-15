import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&h=1080&fit=crop" alt="Premium drinks background" className="w-full h-full object-cover" />
        {/* Black Mask Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600 rounded-full">
                <p className="text-sm md:text-base text-red-500 font-semibold uppercase tracking-wider">
                  Special Offer End Summer
                </p>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Buy 6 Bottles
                <span className="block text-red-600 mt-2">Get a FREE</span>
                <span className="block text-white mt-2">Bottle Opener!</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                Stock up on your favorite drinks and enjoy this exclusive summer
                deal
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/shop">
                  <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    SHOP NOW
                  </button>
                </Link>
                <Link to="/shop">
                  <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold px-10 py-4 rounded-lg transition-all duration-200">
                    VIEW DEALS
                  </button>
                </Link>
              </div>

              <p className="text-sm text-gray-400 pt-2">
                *Offer valid until August 23rd. Terms and conditions apply.
              </p>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
                <img src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop" alt="Premium bottles" className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-200 border border-white/20" onClick={() => setCurrentSlide(prev => prev === 0 ? 2 : prev - 1)}>
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-200 border border-white/20" onClick={() => setCurrentSlide(prev => prev === 2 ? 0 : prev + 1)}>
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {[0, 1, 2].map(index => <button key={index} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-red-600 w-12' : 'bg-white/50 hover:bg-white/70 w-2'}`} onClick={() => setCurrentSlide(index)} />)}
      </div>
    </section>;
}