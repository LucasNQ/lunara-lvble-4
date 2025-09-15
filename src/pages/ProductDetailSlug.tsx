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
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const {
    getProductBySlug
  } = useProducts();
  const {
    addToCart
  } = useCart();
  const product = slug ? getProductBySlug(slug) : null;

  // Get available options for this product
  const productOptions = product ? productKits[product.id] || [] : [];
  const [selectedOption, setSelectedOption] = useState<ProductOption>(productOptions[0] || {
    id: 'default',
    label: 'Produto Individual',
    price: product?.price || 0,
    originalPrice: product?.originalPrice || 0,
    checkoutLink: ''
  });
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
        description: `Finalizando compra: ${selectedOption.label}`
      });
    } else {
      toast({
        title: "Link não disponível",
        description: "Este produto está temporariamente indisponível para compra.",
        variant: "destructive"
      });
    }
  };
  const description = productDescriptions[product.id] || "Produto de alta qualidade para cuidados pessoais e beleza. Aprovado por especialistas e com garantia de satisfação.";
  return <>
      <SEOHead title={`${product.name} - Lunara Cosméticos`} description={`${product.name} por apenas R$ ${product.price.toFixed(2).replace('.', ',')}. ${description.substring(0, 120)}...`} keywords={`${product.name.toLowerCase()}, produtos de beleza, cosméticos, lunara, cuidados pessoais`} ogImage={product.image} canonicalUrl={`https://lunara.com.br/produto/${product.slug}`} />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 pt-24 pb-8 max-w-6xl">
          <Button variant="outline" onClick={() => navigate('/products')} className="mb-6 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Voltar aos Produtos
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Images */}
            <div className="order-1 lg:order-1">
              <ProductGalleryEnhanced images={product.images} productName={product.name} />
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
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
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
                      {Math.round((productOptions.length > 0 ? selectedOption.originalPrice - selectedOption.price : product.originalPrice - product.price) / (productOptions.length > 0 ? selectedOption.originalPrice : product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  
                 {/* Installments */}
                  <div className="flex items-center gap-2 text-lg text-gray-600 mb-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                    parcelado em até 12x
                  </div>
                  </div>

                  {/* Payment Options Button */}
                  <Button variant="outline" onClick={() => setIsPaymentModalOpen(true)} className="w-auto border border-gray-400 text-black hover:bg-gray-50 rounded-md font-normal text-sm flex items-center gap-2 mt-1 py-1 px-3">
                    <span className="text-lg">+</span>
                    Formas de Pagamento
                  </Button>


                {/* Option Selector */}
                {productOptions.length > 0 && <ProductOptionSelector options={productOptions} selectedOption={selectedOption} onOptionChange={setSelectedOption} />}

                {/* Main Action Button */}
                <Button onClick={handleAddToCart} className="w-full btn-gradient text-white text-xl py-6 rounded-lg font-bold flex items-center justify-center gap-3 shadow-lg">
                  <ShoppingCart className="w-6 h-6" />
                  ADICIONAR AO CARRINHO
                </Button>

                {/* Payment Methods */}
                <div className="space-y-1 p-4 rounded-lg shadow-md bg-white border border-gray-100">
                  <div className="text-center font-semibold text-gray-800 text-xs">
                    FORMAS DE PAGAMENTO
                  </div>
                  <div className="flex justify-center">
                    <img src="/lovable-uploads/6c9e9b29-c188-44a5-8f34-a987698599fd.png" alt="Formas de pagamento: Visa, Mastercard, Hipercard, Elo, American Express, PIX e Boleto" className="max-w-full h-auto" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Product Description - Collapsible */}
          <CollapsibleDescription description={description} />
        </main>

        {/* Sticky Purchase Button */}
        <StickyPurchaseButton selectedOption={selectedOption} productName={product.name} onAddToCart={handleAddToCart} />

        <Footer />
      </div>

      {/* Payment Options Modal */}
      <PaymentOptionsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>;
};
export default ProductDetailSlug;