import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
// Using verification badge from uploads
const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    id: 1,
    name: 'Larissa Oliveira',
    location: 'Porto Alegre, RS',
    rating: 5,
    text: 'Eu estava desesperada com a queda de  cabelo. Depois do TopHair Gummy, meus fios ficaram muito mais fortes, com mais volume e quase não caem mais. E o melhor: é gostoso de tomar. Agora não vivo sem!',
    image: '/lovable-uploads/9be13760-8166-4b43-9434-6abe230e4589.png',
    product: 'TopHair Gummy'
  }, {
    id: 2,
    name: 'Amanda Costa',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Sempre tive medo da progressiva por causa dos danos. Mas a Progressiva Vegetal Sem Formol foi uma surpresa: meu cabelo ficou lisinho, com brilho incrível e sem cheiro forte de química. Recomendo de olhos fechados!',
    image: '/lovable-uploads/3b943cd3-0e01-4490-a657-f24b38f4ae64.png',
    product: 'Progressiva Vegetal Havana'
  }, {
    id: 3,
    name: 'Júlia Fernandes',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Eu já tinha tentado de tudo contra manchas de acne, sem resultado. Quando comecei o Clareador de Manchas de Pele, fiquei chocada: minha pele ficou uniforme, iluminada e livre das marcas. Produto incrível!',
    image: '/lovable-uploads/58b7463a-c562-44db-b910-a8a905eb62cc.png',
    product: 'Clareador de Manchas de Pele'
  }, {
    id: 4,
    name: 'Renata Silva',
    location: 'Belo Horizonte, MG',
    rating: 5,
    text: 'Sempre sofri pra depilar o rosto, até encontrar o Batom Depilador. Ele é super fácil de usar, não causa dor nem irritação. Minha pele ficou lisinha em minutos. Amei!',
    image: '/lovable-uploads/19fd8c76-8f84-4be9-a64d-83af04878208.png',
    product: 'Batom Depilador DepilaPlus'
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  return <section id="depoimentos" className="pt-8 pb-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 lg:mb-16 fade-in">
          <h2 className="md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 lg:mb-6 text-3xl">
            O que nossas <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">Mais de 10.000 mulheres já transformaram seus cabelos e sua pele com a Lunara! Veja histórias reais de quem confiou na gente.</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {testimonials.map(testimonial => <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                    <Card className="mx-auto max-w-3xl shadow-lg">
                      <CardContent className="p-4 md:p-6 lg:p-8">
                        <div className="text-center">
                          {/* Quote Icon */}
                          <Quote className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-pink-300 mx-auto mb-3 md:mb-4 lg:mb-6" />
                          
                          {/* Rating */}
                          <div className="flex justify-center mb-4 md:mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-sm md:text-base lg:text-xl xl:text-2xl text-gray-700 italic mb-4 md:mb-6 lg:mb-8 leading-relaxed px-2">
                            "{testimonial.text}"
                          </blockquote>

                           {/* Customer Info */}
                           <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                             <OptimizedImage src={testimonial.image} alt={`Foto de ${testimonial.name}, cliente satisfeita`} className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0" width={64} height={64} />
                             <div className="text-center md:text-left min-w-0">
                               <div className="flex items-center justify-center md:justify-start gap-1 mb-1 flex-wrap">
                                 <span className="text-xs md:text-sm">📸</span>
                                 <h4 className="font-bold text-gray-800 text-xs md:text-base">
                                   {testimonial.name} – {testimonial.location}
                                 </h4>
                               </div>
                               <div className="flex items-center justify-center md:justify-start gap-1 mb-1">
                                 <span className="text-xs md:text-sm text-gray-600">Cliente Verificada</span>
                                 <img src="/lovable-uploads/e5bc6017-5786-4d67-a89d-28203bee7026.png" alt="Selo de verificação" className="w-3 h-3 md:w-4 md:h-4" />
                               </div>
                               <div className="flex items-center justify-center md:justify-start gap-1">
                                 <span className="text-xs md:text-sm">👉</span>
                                 <p className="text-xs md:text-sm text-pink-600 font-medium">
                                   Comprou: {testimonial.product}
                                 </p>
                               </div>
                             </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>

            {/* Navigation Buttons - Positioned to the sides of the card */}
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="absolute left-2 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="absolute right-2 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10 rounded-full w-10 h-10 md:w-12 md:h-12">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-8 md:mt-12 lg:mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">+10.000</p>
                <p className="text-gradient text-sm md:text-base">clientes satisfeitas</p>
              </div>
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">98%</p>
                <p className="text-gradient text-sm md:text-base">de aprovação</p>
              </div>
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">7 dias</p>
                <p className="text-gradient text-sm md:text-base">de garantia</p>
              </div>
              <div className="text-center">
                <p className="text-gradient font-bold text-lg md:text-xl lg:text-2xl">Resultados</p>
                <p className="text-gradient text-sm md:text-base">comprovados</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;