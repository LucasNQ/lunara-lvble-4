import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export interface ProductOption {
  id: string;
  label: string;
  price: number;
  originalPrice: number;
  discount?: string;
  popular?: boolean;
  checkoutLink: string;
  badge?: string;
  badgeColor?: string;
}

interface ProductQuantitySelectorProps {
  options: ProductOption[];
  selectedOption: ProductOption;
  onOptionChange: (option: ProductOption) => void;
}

const ProductQuantitySelector = ({ 
  options, 
  selectedOption, 
  onOptionChange 
}: ProductQuantitySelectorProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Escolha sua opção:
        </label>
        <Select 
          value={selectedOption.id} 
          onValueChange={(value) => {
            const option = options.find(opt => opt.id === value);
            if (option) onOptionChange(option);
          }}
        >
          <SelectTrigger className="w-full h-auto p-4 border-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border-2 border-gray-200 shadow-lg">
            {options.map((option) => (
              <SelectItem 
                key={option.id} 
                value={option.id}
                className="p-4 focus:bg-pink-50 hover:bg-pink-50 cursor-pointer"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{option.label}</span>
                      {option.popular && (
                        <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                          MAIS VENDIDO
                        </Badge>
                      )}
                    </div>
                    {option.discount && (
                      <span className="text-green-600 text-sm font-medium">
                        {option.discount}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-pink-600">
                      R$ {option.price.toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      R$ {option.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {/* Selected Option Summary */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-gray-800">{selectedOption.label}</div>
            {selectedOption.discount && (
              <div className="text-green-600 text-sm font-medium">
                {selectedOption.discount}
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-pink-600">
              R$ {selectedOption.price.toFixed(2).replace('.', ',')}
            </div>
            <div className="text-xs text-gray-600 mt-0.5">
              R$ {selectedOption.price.toFixed(2).replace('.', ',')} à vista
            </div>
            <div className="text-sm text-gray-500 line-through">
              R$ {selectedOption.originalPrice.toFixed(2).replace('.', ',')}
            </div>
            <div className="text-green-600 font-semibold text-sm">
              Economia: R$ {(selectedOption.originalPrice - selectedOption.price).toFixed(2).replace('.', ',')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantitySelector;