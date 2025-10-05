import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
const Footer = () => {
  return <footer id="contato" style={{ backgroundColor: '#935aee' }} className="text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Lunara</h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base px-2 sm:px-0">Aqui você cuida da sua beleza com praticidade, economia e garantia de satisfação.</p>
            <div className="flex space-x-3 justify-center sm:justify-start pt-2">
              <a href="https://www.facebook.com/profile.php?id=61574815833708" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/lunaracosmeticos.store?igsh=ZWVvMjVremhsM280" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Formas de pagamento */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Formas de pagamento</h4>
            <div className="flex justify-center sm:justify-start">
              <div className="max-w-[200px]">
                <OptimizedImage src="/lovable-uploads/payment-methods.webp" alt="Formas de pagamento aceitas - Visa, Mastercard, American Express, Diners, Elo, Alelo, Hipercard, Banco do Brasil, PIX, Boleto" className="w-full h-auto object-contain" width={200} height={120} />
              </div>
            </div>
          </div>

          {/* Segurança */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Segurança</h4>
            <div className="flex gap-2 justify-center sm:justify-start items-center">
              <div className="max-w-[140px]">
                <OptimizedImage src="/lovable-uploads/google-safe.webp" alt="Site seguro com certificado SSL 256 bits e Google Safe Browsing" className="w-full h-auto object-contain" width={140} height={60} />
              </div>
              <div className="max-w-[80px]">
                <OptimizedImage src="/lovable-uploads/reclame-aqui.webp" alt="Verificada por Reclame Aqui" className="w-full h-auto object-contain" width={80} height={40} />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">(31) 98472-3813</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">lunarahairs@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">Belo Horizonte, MG 30110-001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Lunara. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
              <Link to="/privacy-policy" className="hover:text-white transition-colors py-1">
                Política de Privacidade
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors py-1">
                Termos de Uso
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors py-1">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;