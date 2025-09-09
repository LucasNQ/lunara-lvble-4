import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGalleryEnhanced from '@/components/ProductGalleryEnhanced';
import ProductQuantitySelector, { ProductOption } from '@/components/ProductQuantitySelector';
import StickyPurchaseButton from '@/components/StickyPurchaseButton';
import { productDescriptions } from '@/data/productDescriptions';
import { productKits } from '@/data/productKits';
import SEOHead from '@/components/SEOHead';

const ProductDetailSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getProductBySlug } = useProducts();
  const { addToCart } = useCart();

  const product = slug ? getProductBySlug(slug) : null;
  
  // Get available options for this product
  const productOptions = product ? productKits[product.id] || [] : [];
  const [selectedOption, setSelectedOption] = useState<ProductOption>(
    productOptions[0] || {
      id: 'default',
      label: 'Produto Individual',
      price: product?.price || 0,
      originalPrice: product?.originalPrice || 0,
      checkoutLink: ''
    }
  );

  React.useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    // Create a modified product with selected option data
    const productToAdd = {
      ...product,
      name: selectedOption.label,
      price: selectedOption.price,
      originalPrice: selectedOption.originalPrice
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

  const description = productDescriptions[product.id] || "Produto de alta qualidade para cuidados pessoais e beleza. Aprovado por especialistas e com garantia de satisfação.";

  return (
    <>
      <SEOHead
        title={`${product.name} - Lunara Cosméticos`}
        description={`${product.name} por apenas R$ ${product.price.toFixed(2).replace('.', ',')}. ${description.substring(0, 120)}...`}
        keywords={`${product.name.toLowerCase()}, produtos de beleza, cosméticos, lunara, cuidados pessoais`}
        ogImage={product.image}
        canonicalUrl={`https://lunara.com.br/produto/${product.slug}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 pt-24 pb-8 max-w-6xl">
          <Button
            variant="outline"
            onClick={() => navigate('/products')}
            className="mb-6 flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar aos Produtos
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="order-1 lg:order-1">
              <ProductGalleryEnhanced 
                images={product.images} 
                productName={product.name}
              />
            </div>

            {/* Product Info */}
            <div className="order-2 lg:order-2 space-y-6">
              <div>
                <Badge className={`${product.badgeColor} text-white mb-4`}>
                  {product.badge}
                </Badge>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
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
                  <span className="text-lg text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Quantity/Kit Selector */}
                {productOptions.length > 0 && (
                  <div className="mb-6">
                    <ProductQuantitySelector
                      options={productOptions}
                      selectedOption={selectedOption}
                      onOptionChange={setSelectedOption}
                    />
                  </div>
                )}

                {/* Default Price Display (if no options available) */}
                {productOptions.length === 0 && (
                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-pink-600">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-xl text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="text-lg text-green-600 font-medium">
                      Economia de R$ {(product.originalPrice - product.price).toFixed(2).replace('.', ',')} 
                      ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleDirectPurchase}
                    className="w-full btn-gradient text-white text-lg py-6 rounded-full font-semibold flex items-center justify-center gap-3"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {product.customButtonText || "Comprar Agora"}
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
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200 mt-4">
                    <p className="text-center font-medium text-gray-700">
                      {product.minicopy}
                    </p>
                  </div>
                )}

                {/* Extra Info */}
                {product.extraInfo && (
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 mt-4">
                    <p className="text-center text-yellow-800 font-medium text-sm">
                      {product.extraInfo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Description */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição do Produto</h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </CardContent>
          </Card>
        </main>

        {/* Sticky Purchase Button */}
        <StickyPurchaseButton
          selectedOption={selectedOption}
          productName={product.name}
          onDirectPurchase={handleDirectPurchase}
          onAddToCart={handleAddToCart}
        />

        <Footer />
      </div>
    </>
  );
};

export default ProductDetailSlug;