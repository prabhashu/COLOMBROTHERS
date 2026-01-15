import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, SearchIcon, UserIcon, HeartIcon, ShoppingCartIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const infoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const {
    cartCount
  } = useCart();
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-700 hover:text-red-600';
  };
  const handleShopMouseEnter = () => {
    if (shopTimeoutRef.current) {
      clearTimeout(shopTimeoutRef.current);
    }
    setShopDropdownOpen(true);
  };
  const handleShopMouseLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 300);
  };
  const handleInfoMouseEnter = () => {
    if (infoTimeoutRef.current) {
      clearTimeout(infoTimeoutRef.current);
    }
    setInfoDropdownOpen(true);
  };
  const handleInfoMouseLeave = () => {
    infoTimeoutRef.current = setTimeout(() => {
      setInfoDropdownOpen(false);
    }, 300);
  };
  return <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button className="md:hidden mr-4 p-2 text-gray-600 hover:text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-gray-900 group-hover:text-gray-700 transition-colors">
                  COLOM
                </span>
                <span className="text-red-600 group-hover:text-red-700 transition-colors">
                  BROTHERS
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium text-sm uppercase tracking-wide transition-colors ${isActive('/')}`}>
              Home
            </Link>

            {/* Shop Dropdown */}
            <div className="relative" onMouseEnter={handleShopMouseEnter} onMouseLeave={handleShopMouseLeave}>
              <button className={`font-medium text-sm uppercase tracking-wide transition-colors flex items-center ${isActive('/shop')}`}>
                Shop
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {shopDropdownOpen && <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link to="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    All Products
                  </Link>
                  <Link to="/shop?category=Arrack" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Arrack
                  </Link>
                  <Link to="/shop?category=Beer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Beer
                  </Link>
                  <Link to="/shop?category=Spirits" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Spirits
                  </Link>
                  <Link to="/shop?category=Wine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Wine
                  </Link>
                  <Link to="/shop?category=Toddy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Toddy
                  </Link>
                </div>}
            </div>

            {/* Info Dropdown */}
            <div className="relative" onMouseEnter={handleInfoMouseEnter} onMouseLeave={handleInfoMouseLeave}>
              <button className="font-medium text-sm uppercase tracking-wide transition-colors text-gray-700 hover:text-red-600 flex items-center">
                Info
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              {infoDropdownOpen && <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    About Us
                  </Link>
                  <Link to="/shipping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Shipping & Delivery
                  </Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    FAQ
                  </Link>
                </div>}
            </div>

            <Link to="/contact" className={`font-medium text-sm uppercase tracking-wide transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <SearchIcon className="w-5 h-5 text-gray-700" />
            </button>
            <Link to="/account" className="hidden md:flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <UserIcon className="w-5 h-5 text-gray-700" />
            </Link>
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full relative transition-colors">
              <HeartIcon className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">
                0
              </span>
            </button>
            <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative transition-colors group">
              <ShoppingCartIcon className="w-5 h-5 text-gray-700 group-hover:text-red-600 transition-colors" />
              {cartCount > 0 && <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>}
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <nav className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-1">
              <Link to="/" className="text-gray-900 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                HOME
              </Link>
              <Link to="/shop" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                SHOP ALL
              </Link>
              <Link to="/shop?category=Arrack" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 px-6 py-2 rounded-md text-sm" onClick={() => setMobileMenuOpen(false)}>
                Arrack
              </Link>
              <Link to="/shop?category=Beer" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 px-6 py-2 rounded-md text-sm" onClick={() => setMobileMenuOpen(false)}>
                Beer
              </Link>
              <Link to="/shop?category=Spirits" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 px-6 py-2 rounded-md text-sm" onClick={() => setMobileMenuOpen(false)}>
                Spirits
              </Link>
              <Link to="/shop?category=Wine" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 px-6 py-2 rounded-md text-sm" onClick={() => setMobileMenuOpen(false)}>
                Wine
              </Link>
              <Link to="/about" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                ABOUT US
              </Link>
              <Link to="/shipping" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                SHIPPING
              </Link>
              <Link to="/faq" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link to="/contact" className="text-gray-700 hover:bg-gray-50 hover:text-red-600 font-medium px-4 py-3 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                CONTACT
              </Link>
            </div>
          </nav>}
      </div>
    </header>;
}