import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { ProductOption } from './ProductQuantitySelector';

interface StickyPurchaseButtonProps {
  selectedOption: ProductOption;
  productName: string;
  onDirectPurchase: () => void;
  onAddToCart: () => void;
}

const StickyPurchaseButton = ({ 
  selectedOption, 
  productName, 
  onDirectPurchase, 
  onAddToCart 
}: StickyPurchaseButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 animate-slide-in-bottom">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-gray-800 truncate text-sm">
              {productName}
            </div>
            <div className="text-xs text-gray-600 truncate">
              {selectedOption.label}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-pink-600">
                R$ {selectedOption.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-sm text-gray-500 line-through">
                R$ {selectedOption.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={onAddToCart}
              variant="outline"
              size="sm"
              className="border-pink-500 text-pink-600 hover:bg-pink-50"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline ml-1">Carrinho</span>
            </Button>
            <Button
              onClick={onDirectPurchase}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              size="sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="ml-1">Comprar Agora</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPurchaseButton;