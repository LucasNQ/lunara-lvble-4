import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CreditCard, Smartphone, FileText } from 'lucide-react';

interface PaymentOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentOptionsModal = ({ isOpen, onClose }: PaymentOptionsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Formas de Pagamento</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Smartphone className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">PIX</h3>
              <p className="text-sm text-gray-600">Pagamento instantâneo</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Cartão de Crédito</h3>
              <p className="text-sm text-gray-600">Parcelado em até 12x sem juros</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <FileText className="w-6 h-6 text-orange-600" />
            <div>
              <h3 className="font-semibold">Boleto Bancário</h3>
              <p className="text-sm text-gray-600">Prazo de 3 dias úteis</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentOptionsModal;