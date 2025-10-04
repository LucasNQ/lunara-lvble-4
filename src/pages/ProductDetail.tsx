import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGalleryEnhanced from '@/components/ProductGalleryEnhanced';
import ProductQuantitySelector, { ProductOption } from '@/components/ProductQuantitySelector';
import StickyPurchaseButton from '@/components/StickyPurchaseButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowLeft, ExternalLink } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { useProducts } from '@/hooks/useProducts';
import { productDescriptions } from '@/data/productDescriptions';
import { productKits } from '@/data/productKits';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { getProductById } = useProducts();
  const product = getProductById(Number(id));
  
  // Get available options for this product
  const productOptions = productKits[Number(id)] || [];
  const [selectedOption, setSelectedOption] = useState<ProductOption>(
    productOptions[0] || {
      id: 'default',
      label: 'Produto Individual',
      price: product?.price || 0,
      originalPrice: product?.originalPrice || 0,
      checkoutLink: ''
    }
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    // Extract quantity from option label (e.g., "2x Kits..." -> 2)
    const quantityMatch = selectedOption.label.match(/^(\d+)x/);
    const initialQuantity = quantityMatch ? parseInt(quantityMatch[1]) : 1;
    
    // Create a modified product with selected option data and unique identifier
    const productToAdd = {
      ...product,
      id: Number(`${product.id}${selectedOption.id.replace(/\D/g, '')}`), // Create unique ID based on product + option
      name: selectedOption.label,
      price: selectedOption.price,
      originalPrice: selectedOption.originalPrice,
      selectedOptionId: selectedOption.id, // Store the option ID for reference
      initialQuantity
    };
    addToCart(productToAdd);
  };

  const handleDirectPurchase = () => {
    if (selectedOption.checkoutLink) {
      window.open(selectedOption.checkoutLink, '_blank');
      toast({
        title: "Redirecionando para checkout...",
        description: `Finalizando compra: ${selectedOption.label}`,
      });
    } else {
      toast({
        title: "Link não disponível",
        description: "Este produto está temporariamente indisponível para compra.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="sm:py-12 bg-gradient-to-r from-pink-50 to-purple-50 py-0">
          <div className="container mx-auto px-4 bg-white">
            <div className="flex items-center gap-4 mb-6">
              <Link to="/products">
                <Button variant="outline" className="flex items-center gap-2 shadow-lg">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar aos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Gallery */}
              <div className="order-1 lg:order-1">
                <ProductGalleryEnhanced images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="order-2 lg:order-2 space-y-6">
                {/* Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    {product.name}
                  </h1>
                  {product.badge && (
                    <Badge className={`${product.badgeColor} text-white mb-4`}>
                      {product.badge}
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Quantity/Kit Selector */}
                {productOptions.length > 0 && (
                  <ProductQuantitySelector
                    options={productOptions}
                    selectedOption={selectedOption}
                    onOptionChange={setSelectedOption}
                  />
                )}

                {/* Default Price Display (if no options available) */}
                {productOptions.length === 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl sm:text-4xl font-bold text-pink-600">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      R$ {product.price.toFixed(2).replace('.', ',')} à vista
                    </div>
                    <div className="text-green-600 font-semibold text-lg">
                      Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')}
                    </div>
                    <div className="text-sm text-gray-600">
                      À vista, ou parcelado em até 12x
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleDirectPurchase}
                    className="w-full btn-gradient text-white rounded-full font-semibold py-4 text-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Comprar Agora
                  </Button>
                  
                  <Button 
                    onClick={handleAddToCart}
                    variant="outline"
                    className="w-full border-2 border-pink-500 text-pink-600 hover:bg-pink-50 rounded-full font-semibold py-4 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>

                {/* Mini Copy */}
                {product.minicopy && (
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                    <p className="text-center font-medium text-gray-700">
                      {product.minicopy}
                    </p>
                  </div>
                )}

                {/* Extra Info */}
                {product.extraInfo && (
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-center text-yellow-800 font-medium text-sm">
                      {product.extraInfo}
                    </p>
                  </div>
                )}

                {/* Description */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-3">Sobre o produto</h3>
                  <div 
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: productDescriptions[product.id] || 
                        "Este é um produto de alta qualidade desenvolvido especialmente para cuidados de beleza. Com resultados comprovados e aprovação de milhares de clientes satisfeitas." 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Purchase Button */}
      <StickyPurchaseButton
        selectedOption={selectedOption}
        productName={product.name}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </div>
  );
};

export default ProductDetail;