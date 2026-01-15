import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, StarIcon, EyeIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
interface ProductCardProps {
  product: Product;
}
export function ProductCard({
  product
}: ProductCardProps) {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };
  return <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              -{product.discount}%
            </span>}
          {product.isNew && <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              NEW
            </span>}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="primary" size="sm" className="rounded-full !p-3" onClick={handleAddToCart} aria-label="Add to cart">
            <ShoppingCartIcon className="w-5 h-5" />
          </Button>
          <Link to={`/product/${product.id}`}>
            <Button variant="secondary" size="sm" className="rounded-full !p-3 bg-white text-gray-900 hover:bg-gray-100" aria-label="View details">
              <EyeIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-medium">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="block group-hover:text-red-600 transition-colors">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />)}
          </div>
          <span className="text-xs text-gray-400 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-red-600">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>}
          </div>
        </div>
      </div>
    </div>;
}