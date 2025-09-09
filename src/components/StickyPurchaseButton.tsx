import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ProductOption } from './ProductQuantitySelector';

interface StickyPurchaseButtonProps {
  selectedOption: ProductOption;
  productName: string;
  onAddToCart: () => void;
}

const StickyPurchaseButton = ({ 
  selectedOption, 
  productName, 
  onAddToCart 
}: StickyPurchaseButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past half of the page content
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / documentHeight;
      setIsVisible(scrollPercentage > 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 animate-slide-in-bottom">
      <div className="container mx-auto max-w-6xl">
        <Button 
          onClick={onAddToCart}
          className="w-full btn-gradient text-white text-xl py-6 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6" />
          ADICIONAR AO CARRINHO
        </Button>
      </div>
    </div>
  );
};

export default StickyPurchaseButton;