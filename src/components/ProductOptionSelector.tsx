import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ProductOption } from './ProductQuantitySelector';

interface ProductOptionSelectorProps {
  options: ProductOption[];
  selectedOption: ProductOption;
  onOptionChange: (option: ProductOption) => void;
}

const ProductOptionSelector = ({ options, selectedOption, onOptionChange }: ProductOptionSelectorProps) => {
  const handleValueChange = (value: string) => {
    const option = options.find(opt => opt.id === value);
    if (option) {
      onOptionChange(option);
    }
  };

  if (options.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-lg">Opções:</h3>
      </div>
      
      <Select value={selectedOption.id} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full h-auto p-4 border-2 border-gray-200">
          <SelectValue>
            <div className="flex items-center justify-between w-full">
              <div className="text-left">
                <div className="font-semibold">{selectedOption.label}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold text-pink-600">
                    R$ {selectedOption.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    R$ {selectedOption.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              {selectedOption.popular && (
                <Badge className="bg-orange-500 text-white">Mais Popular</Badge>
              )}
            </div>
          </SelectValue>
        </SelectTrigger>
        
        <SelectContent className="w-full">
          {options.map((option) => (
            <SelectItem key={option.id} value={option.id} className="p-4">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="font-semibold">{option.label}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-bold text-pink-600">
                        R$ {option.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        R$ {option.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    {option.discount && (
                      <div className="text-sm text-green-600 font-medium mt-1">
                        {option.discount}
                      </div>
                    )}
                  </div>
                  {option.popular && (
                    <Badge className="bg-orange-500 text-white ml-2">Mais Popular</Badge>
                  )}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductOptionSelector;