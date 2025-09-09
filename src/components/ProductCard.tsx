import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import OptimizedImage from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = () => {
    navigate(`/produto/${product.slug}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleProductClick}
    >
      <div className="relative overflow-hidden rounded-t-lg flex-shrink-0 bg-gray-50">
        <div className="w-full h-48 xs:h-52 sm:h-60 md:h-64 lg:h-72 p-3 sm:p-4">
          <OptimizedImage
            src={product.image}
            alt={`${product.name} - Produto de cuidado e beleza`}
            className="group-hover:scale-105 transition-transform duration-500 w-full h-full"
            width={400}
            height={400}
            priority={priority}
          />
        </div>
        <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white`}>
          {product.badge}
        </Badge>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Product minicopy or fallback descriptions */}
        {product.minicopy ? (
          <p className="text-sm text-gray-600 mb-3 italic">
            {product.minicopy}
          </p>
        ) : (
          <>
            {product.id === 6 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                ✨ Pele uniforme e iluminada em poucas semanas
              </p>
            )}
            {product.id === 2 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                💖 Fios mais fortes, pele radiante e unhas resistentes
              </p>
            )}
            {product.id === 4 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                💆‍♀️ Cabelos lisos, sem frizz, com brilho de salão — sem formol
              </p>
            )}
            {product.id === 10 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                ✨ Cabelos lisos em minutos, em casa ou onde você estiver.
              </p>
            )}
            {product.id === 8 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                💄 Depilação facial rápida, sem dor e sem irritação, cabe na sua bolsa.
              </p>
            )}
            {product.id === 3 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                🫦 Mais conforto, hidratação e prazer na sua rotina íntima.
              </p>
            )}
            {product.id === 5 && (
              <p className="text-sm text-gray-600 mb-3 italic">
                🌷 Um só aparelho para depilar cada parte do corpo sem dor e sem cortes.
              </p>
            )}
          </>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-500 fill-yellow-500 brightness-110 saturate-150'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating} ({product.reviews})
            {product.id === 6 && <span className="text-green-600 font-medium"> | +500 vendas nesta semana</span>}
            {product.id === 2 && <span className="text-green-600 font-medium"> | +450 vendas nesta semana</span>}
            {product.id === 4 && <span className="text-green-600 font-medium"> | +300 vendas nesta semana</span>}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-sm sm:text-base text-gray-600 mb-1">
            De <span className="line-through">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span> por
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl sm:text-3xl font-bold text-pink-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-xs sm:text-sm text-green-600 font-medium">
              | Economize R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          {/* Additional info for specific products */}
          <div className="space-y-1">
            <div className="text-xs text-gray-600 flex items-center gap-1">
              🚚 <span>Frete Grátis Brasil</span>
            </div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              ✅ <span>Garantia 7 dias</span>
            </div>
            {product.extraInfo && (
              <div className="text-xs text-amber-600 font-medium flex items-center gap-1">
                <span>{product.extraInfo}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className={`w-full btn-gradient text-white rounded-full font-semibold text-xs sm:text-sm py-2 sm:py-3 leading-tight`}
        >
          {product.customButtonText || (
            product.id === 6 ? 'Quero Minha Pele sem Manchas' : 
            product.id === 2 ? 'Começar meu Tratamento' :
            product.id === 4 ? 'Quero meu Cabelo Liso Agora' :
            product.id === 10 ? 'Quero Meu Cabelo Liso em Qualquer Lugar' :
            product.id === 8 ? 'Remover Pelos sem Irritação' :
            product.id === 3 ? 'Quero Mais Conforto e Prazer' :
            product.id === 5 ? 'Quero minha Depilação Completa Já' : 'Adicionar ao Carrinho'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;