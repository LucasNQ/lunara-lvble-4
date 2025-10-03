import React from 'react';
import { Shield, Leaf, Scissors, Timer, Truck } from 'lucide-react';
// Custom SVG Icons
const LeafIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" stroke="#22c55e" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" stroke="#22c55e" />
  </svg>;
const ScissorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" className="w-8 h-8">
    <circle cx="6" cy="6" r="3" stroke="#ef4444" />
    <circle cx="6" cy="18" r="3" stroke="#ef4444" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" stroke="#4a5568" />
    <line x1="15.5" y1="4.5" x2="8.5" y2="11.5" stroke="#4a5568" />
    <line x1="15.5" y1="19.5" x2="8.5" y2="12.5" stroke="#4a5568" />
  </svg>;
const ShieldCheckIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="#3b82f6" />
    <path d="m9 12 2 2 4-4" stroke="#22c55e" />
  </svg>;
const HourglassIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M5 22h14" stroke="#fbbf24" />
    <path d="M5 2h14" stroke="#fbbf24" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" stroke="#fbbf24" />
    <path d="M7 22v-4.172a2 2 0 0 1 .586-1.414L12 12 7.586 7.414A2 2 0 0 1 7 6.172V2" stroke="#fbbf24" />
  </svg>;
const TruckIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M14 18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" stroke="#ef4444" />
    <path d="M15 18H9" stroke="#ef4444" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" stroke="#ef4444" />
    <circle cx="17" cy="18" r="2" stroke="#ef4444" />
    <circle cx="7" cy="18" r="2" stroke="#ef4444" />
  </svg>;
const BenefitsSection = () => {
  const benefits = [{
    icon: LeafIcon,
    title: 'Livre de química Pesada',
    description: 'Cuide da sua beleza sem medo de agredir seu corpo'
  }, {
    icon: ScissorsIcon,
    title: 'Efeito de salão em Casa',
    description: 'Economize tempo e dinheiro'
  }, {
    icon: ShieldCheckIcon,
    title: 'Segurança Garantida',
    description: 'Aprovado e testado pela Anvisa'
  }, {
    icon: TruckIcon,
    title: 'Frete Grátis',
    description: 'Frete grátis e entrega rápida em todo Brasil'
  }];
  return <section id="beneficios" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="md:text-5xl font-bold text-gray-800 mb-6 text-4xl">
            O que faz milhares de mulheres <span className="text-gradient">escolherem a Lunara</span> todo mês
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nossos produtos foram criados para resolver os problemas que mais   incomodam as mulheres — frizz, manchas, queda de cabelo, e diversos outros!</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <div key={index} className={`group p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in fade-in-delay-${index % 3 + 1}`}>
                <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-100">
                    <IconComponent />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>;
        })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 gap-8 fade-in fade-in-delay-3">
          {[{
          number: '10.000+',
          label: 'Clientes Satisfeitas'
        }, {
          number: '24h',
          label: 'Suporte Dedicado'
        }].map((stat, index) => <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;