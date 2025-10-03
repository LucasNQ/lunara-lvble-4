
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, ChevronDown, ChevronUp, Lock, ArrowLeft, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
import { productCheckoutLinks } from '@/config/checkoutLinks';
import OptimizedImage from './OptimizedImage';

const CartDrawer = () => {
  const { cartItems, removeFromCart, getTotalPrice, clearCart, isDrawerOpen, setIsDrawerOpen } = useCart();
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);

  const handleCoinzzCheckout = (item: any) => {
    // Use the saved checkout link from the cart item, or fallback to the original system
    const link = item.checkoutLink || productCheckoutLinks[item.id]?.coinzz;
    if (link) {
      window.open(link, '_blank');
      toast({
        title: "Redirecionando para checkout...",
        description: `Finalizando compra do produto: ${item.name}`,
      });
    } else {
      toast({
        title: "Link não disponível",
        description: `Este produto está temporariamente indisponível para compra.`,
        variant: "destructive",
      });
    }
  };

  const handleFinalizarCompra = () => {
    // For now, use the first item's checkout link since it's per item
    if (cartItems.length > 0) {
      handleCoinzzCheckout(cartItems[0]);
    }
  };

  if (cartItems.length === 0) {
    return (
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent side="right" className="w-[85vw] sm:w-[400px] max-w-[400px] p-0" hideCloseButton={true}>
          <SheetHeader className="px-4 py-3 border-b">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <SheetTitle>Carrinho</SheetTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-black hover:text-black hover:bg-gray-100 flex-shrink-0"
                onClick={() => setIsDrawerOpen(false)}
              >
                <X className="h-7 w-7 stroke-[3] font-bold" />
              </Button>
            </div>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center py-8 px-4 h-full">
            <p className="text-xl text-gray-600 text-center mb-8">
              Seu carrinho está vazio
            </p>
            <Button 
              onClick={() => setIsDrawerOpen(false)} 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg px-16 py-6 text-lg font-bold"
            >
              COMECE A COMPRAR
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetContent side="right" className="w-[85vw] sm:w-[400px] max-w-[400px] p-0 flex flex-col" hideCloseButton={true}>
        <SheetHeader className="px-4 pb-2 border-b flex-shrink-0">
          <div className="flex items-center justify-between w-full">
            <SheetTitle className="text-base font-bold flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Itens'}
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-black hover:text-black hover:bg-gray-100 flex-shrink-0"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X className="h-7 w-7 stroke-[3] font-bold" />
            </Button>
          </div>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {cartItems.map((item) => (
            <div key={item.id} className="py-3 border-b last:border-b-0">
               {/* Product Info */}
               <div className="flex items-start gap-3 mb-3">
                 <div className="w-14 h-14 flex-shrink-0">
                   <OptimizedImage
                     src={item.image}
                     alt={`${item.name} - Produto no carrinho`}
                     className="w-full h-full object-contain rounded-lg bg-gray-50"
                     width={56}
                     height={56}
                   />
                 </div>
                 
                  <div className="flex-1 min-w-0">
                   <h3 className="font-semibold text-sm leading-tight mb-1 break-words">
                     {item.name}
                   </h3>
                    <div className="flex items-center gap-2">
                      <p className="text-red-600 font-bold text-base">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      <p className="text-gray-500 text-sm line-through">
                        R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                 </div>
                 
                 <Button
                   variant="ghost"
                   size="icon"
                   className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                   onClick={() => removeFromCart(item.id)}
                 >
                   <Trash2 className="h-4 w-4" />
                 </Button>
               </div>
               
               {/* Individual Checkout Button */}
                <Button
                  onClick={() => handleCoinzzCheckout(item)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 mb-2"
                >
                  <Lock className="w-3 h-3" />
                  FINALIZAR COMPRA
                </Button>
             </div>
          ))}

          {/* Collapsible Delivery Info */}
          <div className="border-t pt-3 mt-2">
            <button
              onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
              className="flex items-center justify-between w-full p-3 text-sm font-medium text-blue-800 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <span>Como funciona a entrega?</span>
              {isDeliveryInfoOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            
            {isDeliveryInfoOpen && (
              <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs">
                <div className="space-y-1 text-blue-700">
                  <p>🚚 Frete Grátis para todo o Brasil</p>
                  <p>⚡ Pedido processado em até 24h úteis</p>
                  <p>📩 Código de rastreio enviado direto no seu e-mail</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-blue-800">👉 Clique em "Finalizar Compra" e receba com 100% de segurança.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <SheetFooter className="px-4 pb-4 border-t bg-gray-50 flex-shrink-0">
          <div className="space-y-3 w-full">
            <p className="text-base text-gray-600 text-center font-medium">A finalização da compra é feita individualmente para cada produto.</p>
            <Button
              onClick={() => setIsDrawerOpen(false)}
              variant="outline"
              className="w-full py-3 text-sm font-bold rounded-lg border-2 border-transparent bg-white text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 border-gradient flex items-center justify-center gap-2"
              style={{
                borderImage: 'linear-gradient(45deg, #ec4899, #9333ea) 1'
              }}
            >
              <ArrowLeft className="w-4 h-4 text-pink-500" />
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                CONTINUAR COMPRANDO
              </span>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
