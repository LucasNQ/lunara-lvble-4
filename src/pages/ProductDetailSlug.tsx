import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, ShoppingCart, ExternalLink, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGalleryEnhanced from '@/components/ProductGalleryEnhanced';
import { ProductOption } from '@/components/ProductQuantitySelector';
import ProductOptionSelector from '@/components/ProductOptionSelector';
import StickyPurchaseButton from '@/components/StickyPurchaseButton';
import PaymentOptionsModal from '@/components/PaymentOptionsModal';
import CollapsibleDescription from '@/components/CollapsibleDescription';
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

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

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
              <div className="space-y-4">
                <Badge className={`${product.badgeColor} text-white mb-2`}>
                  {product.badge}
                </Badge>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {product.name}
                </h1>

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
                  <span className="text-lg text-gray-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price Section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-pink-600">
                      R$ {productOptions.length > 0 ? selectedOption.price.toFixed(2).replace('.', ',') : product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      R$ {productOptions.length > 0 ? selectedOption.originalPrice.toFixed(2).replace('.', ',') : product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <Badge className="bg-green-500 text-white">
                      {Math.round(((productOptions.length > 0 ? selectedOption.originalPrice - selectedOption.price : product.originalPrice - product.price) / (productOptions.length > 0 ? selectedOption.originalPrice : product.originalPrice)) * 100)}% OFF
                    </Badge>
                  </div>
                  
                  {/* Installments */}
                  <div className="text-lg text-gray-600">
                    ou parcelado em até 12x de R$ {(productOptions.length > 0 ? selectedOption.price / 12 : product.price / 12).toFixed(2).replace('.', ',')} sem juros
                  </div>
                </div>

                {/* Payment Options Button */}
                <Button 
                  variant="outline"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold py-3"
                >
                  Ver Formas de Pagamento
                </Button>

                {/* PIX Priority Box */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <div className="flex-1">
                      <div className="font-semibold text-green-800">PIX</div>
                      <div className="text-sm text-green-700">Envio Prioritário ao comprar pelo PIX</div>
                    </div>
                  </div>
                </div>

                {/* Option Selector */}
                {productOptions.length > 0 && (
                  <ProductOptionSelector
                    options={productOptions}
                    selectedOption={selectedOption}
                    onOptionChange={setSelectedOption}
                  />
                )}

                {/* Main Action Button */}
                <Button 
                  onClick={handleDirectPurchase}
                  className="w-full btn-gradient text-white text-xl py-6 rounded-full font-bold flex items-center justify-center gap-3 shadow-lg"
                >
                  <ExternalLink className="w-6 h-6" />
                  COMPRAR AGORA
                </Button>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <div className="text-center font-semibold text-gray-800">
                    FORMAS DE PAGAMENTO
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/6c9e9b29-c188-44a5-8f34-a987698599fd.png" 
                      alt="Formas de pagamento: Visa, Mastercard, Hipercard, Elo, American Express, PIX e Boleto"
                      className="max-w-full h-auto"
                    />
                  </div>
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
              </div>
            </div>
          </div>

          {/* Product Description - Collapsible */}
          <CollapsibleDescription description={description} />
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

      {/* Payment Options Modal */}
      <PaymentOptionsModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </>
  );
};

export default ProductDetailSlug;