
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Como funciona a entrega?',
      answer: '🚚 Frete grátis e entrega rápida em todo o Brasil. Você compra online com segurança e recebe no conforto da sua casa — simples assim.'
    },
    {
      question: 'Os produtos são seguros para todos os tipos de cabelo?',
      answer: '🌱 Sim! Fórmulas seguras, aprovadas pela Anvisa e desenvolvidas para diferentes tipos de fios. Milhares de clientes já usaram com resultados incríveis. Faça sempre o teste de mecha e, se precisar, nosso suporte ajuda você.'
    },
    {
      question: 'Quanto tempo dura o efeito da progressiva?',
      answer: '💆‍♀️ Até 6 meses de cabelo liso e brilhante, seguindo nosso passo a passo. Dura mais do que muitas progressivas comuns — sem cheiro forte e sem formol.'
    },
    {
      question: 'Como aplicar os produtos em casa?',
      answer: '📖 Praticidade é a nossa proposta: cada produto vem com instruções claras e vídeos explicativos. Você não precisa ser expert — só reservar um tempinho pra você e seguir o guia. Se precisar entre em contato Conosco🥰'
    },
    {
      question: 'Qual a diferença entre progressiva e relaxamento?',
      answer: 'A progressiva alisa e reduz o frizz, enquanto o relaxamento amacia a curvatura natural. Quer ajuda pra escolher? Nosso suporte orienta você no que for melhor pro seu cabelo.'
    },
    {
      question: 'O frete é grátis mesmo?',
      answer: '✅ Sim, 100% grátis para todo o Brasil. Sem taxas escondidas, sem surpresas no checkout (etapa do pagamento).'
    },
    {
      question: 'Posso parcelar a compra?',
      answer: '💳 Claro! Aceitamos cartão de crédito e parcelamento em várias vezes. Você escolhe a forma de pagamento que cabe no seu bolso.'
    }
  ];

  return (
    <section id="contato" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos produtos e processos.
            Se você ainda tem alguma dúvida entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-0 fade-in fade-in-delay-${(index % 3) + 1}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-pink-50/50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 fade-in fade-in-delay-3">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5531984723813?text=Oi!+Estava+no+site+da+Lunara+e+estou+com+algumas+dúvidas.+Voc%C3%AA+pode+me+ajudar?+"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 inline-block"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
