import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold">
                <span className="text-white">COLOM</span>
                <span className="text-red-600">BROTHERS</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your premium destination for the finest spirits, wines, and beers.
              Delivering quality and tradition to your doorstep since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-red-500 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-red-500 transition-colors">
                  My Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-red-500 transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-red-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Liquor Street, Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@colombrothers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Colom Brothers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
            <Link to="/shipping" className="text-gray-500 hover:text-white text-sm">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}