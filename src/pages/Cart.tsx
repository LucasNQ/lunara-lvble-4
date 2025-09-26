
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Trash2, ShoppingBag, ArrowLeft, Info } from 'lucide-react';
import { useCart, CartItem } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { productCheckoutLinks } from '@/config/checkoutLinks';
import OptimizedImage from '@/components/OptimizedImage';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalPrice,
    clearCart
  } = useCart();
  
  const [openTooltips, setOpenTooltips] = useState<{[key: number]: boolean}>({});


  const handleCoinzzCheckout = (item: CartItem) => {
    // Use the saved checkout link from the cart item, or fallback to the original system
    const link = item.checkoutLink || productCheckoutLinks[item.id]?.coinzz;
    if (link) {
      window.open(link, '_blank');
      toast({
        title: "Redirecionando para checkout...",
        description: `Finalizando compra do produto: ${item.name}`
      });
    } else {
      toast({
        title: "Link não disponível",
        description: `Este produto está temporariamente indisponível para compra.`,
        variant: "destructive",
      });
    }
  };


  return (
    <TooltipProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        
        <main className="pt-20">
          {/* Page Header */}
          <section className="py-8 sm:py-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2">
                    <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Voltar</span>
                  </Button>
                </Link>
              </div>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                <span className="text-gradient">Sua Transformação</span> <span className="text-gray-800">Começa Aqui</span>
              </h1>
            <p className="text-base sm:text-xl text-gray-600">
              {cartItems.length > 0 ? `${cartItems.length} ${cartItems.length === 1 ? 'produto' : 'produtos'} no seu carrinho` : 'Seu carrinho está vazio'}
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-8 sm:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-12 px-4">
                <ShoppingBag className="w-16 sm:w-24 h-16 sm:h-24 text-gray-300 mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">Seu carrinho está vazio</h3>
                <p className="text-gray-600 text-center mb-6 sm:mb-8 max-w-md text-sm sm:text-base px-2 leading-tight">
                  Parece que você ainda não adicionou nenhum produto ao seu carrinho. 
                  Que tal dar uma olhada em nossos produtos incríveis?
                </p>
                <Link to="/products">
                  <Button className="btn-gradient text-white rounded-full px-6 sm:px-8 py-3 text-sm sm:text-base touch-manipulation">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="w-full">
                {/* Cart Items */}
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-hidden mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Produtos no Carrinho</h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {cartItems.map(item => {
                      const links = productCheckoutLinks[item.id];
                      const isDepiladorLaserFlex = item.id === 11;
                      return (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-3 sm:p-4 md:p-6">
                          {/* Product Info */}
                          <div className="flex items-start gap-3 sm:gap-4 mb-4">
                            <div className="w-16 h-16 flex-shrink-0">
                              <OptimizedImage 
                                src={item.image} 
                                alt={`${item.name} - Produto no carrinho`} 
                                className="w-full h-full object-contain rounded-lg bg-gray-50"
                                width={64}
                                height={64}
                              />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 mb-1 break-words leading-tight">
                                {item.name}
                              </h3>
                              <p className="text-pink-600 font-bold text-base sm:text-lg md:text-xl">
                                R$ {item.price.toFixed(2).replace('.', ',')}
                              </p>
                              <p className="text-gray-600 text-xs sm:text-sm">Quantidade: 1</p>
                            </div>
                            
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-red-500 hover:text-red-700 flex-shrink-0" 
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>

                           {/* Delivery Info Tooltip */}
                          <div className="flex items-center justify-between mb-4">
                            <Tooltip 
                              open={openTooltips[item.id] || false}
                              onOpenChange={(open) => setOpenTooltips(prev => ({...prev, [item.id]: open}))}
                            >
                              <TooltipTrigger asChild>
                                <button 
                                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-xs underline"
                                  onClick={() => setOpenTooltips(prev => ({...prev, [item.id]: !prev[item.id]}))}
                                >
                                  <Info className="w-3 h-3" />
                                  <span>Como funciona a entrega?</span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs p-3 text-sm bg-white border border-gray-200 shadow-lg z-50">
                                <div className="space-y-1 text-blue-700">
                                  <p className="font-bold">💡 Como funciona a entrega:</p>
                                  <div className="h-2"></div>
                                  <p>🚚 Frete Grátis para todo o Brasil</p>
                                  <p>⚡ Pedido processado em até 24h úteis</p>
                                  <p>📩 Código de rastreio enviado direto no seu e-mail</p>
                                  <div className="h-2"></div>
                                  <p className="font-medium">👉 Clique em "Finalizar Compra" e receba com 100% de segurança.</p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </div>

                          {/* Checkout Button for this product */}
                          <div>
                            {links?.coinzz || item.checkoutLink ? (
                              <div>
                                <Button 
                                  onClick={() => handleCoinzzCheckout(item)} 
                                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-sm sm:text-base font-bold rounded-lg touch-manipulation border-2 border-pink-400 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 animate-pulse"
                                >
                                  {isDepiladorLaserFlex ? 'Finalizar Compra' : 'Finalizar Compra'}
                                </Button>
                                <p className="text-xs text-gray-600 mt-2 text-center px-1 leading-tight">
                                  {isDepiladorLaserFlex ? 'Frete grátis para todo o Brasil' : 'Entrega para todo o Brasil'}
                                </p>
                              </div>
                            ) : (
                              <div className="text-center py-4 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-lg">
                                <p className="font-medium text-gray-700 mb-1">Produto temporariamente indisponível</p>
                                <p>Link de checkout será adicionado em breve</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Button 
                      variant="outline" 
                      onClick={clearCart} 
                      className="text-red-600 hover:text-red-700 text-sm sm:text-base px-4 py-2 order-2 sm:order-1 w-full sm:w-auto"
                    >
                      Limpar Carrinho
                    </Button>
                    
                    <div className="text-center sm:text-right order-1 sm:order-2">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3">
                        💖 Seu investimento em Autocuidado:
                      </p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 my-3">
                        R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                      </p>
                      <p className="text-xs text-gray-600 mt-3">(cada compra é finalizada separadamente)</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/products">
                    <Button variant="outline" className="text-sm sm:text-base py-2 sm:py-3 px-6">
                      Continuar Comprando
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </TooltipProvider>
  );
};

export default Cart;
