import { ProductOption } from '@/components/ProductQuantitySelector';

export const productKits: Record<number, ProductOption[]> = {
  // Pente Alisador Portátil
  10: [
    {
      id: "1-unit",
      label: "1 Pente Alisador",
      price: 109.99,
      originalPrice: 159.90,
      checkoutLink: 'https://app.coinzz.com.br/checkout/1-pente-por-10999-0/686064d3cfacb'
    },
    {
      id: "2-units",
      label: "2 Pentes Alisadores",
      price: 189.99,
      originalPrice: 319.80,
      discount: "Economia de R$ 129,81",
      popular: true,
      checkoutLink: 'https://app.coinzz.com.br/checkout/2-pentes-por-18999-0/686064d3cfacb'
    },
    {
      id: "3-units",
      label: "3 Pentes Alisadores + Brinde",
      price: 249.99,
      originalPrice: 479.70,
      discount: "Economia de R$ 229,71 + Brinde Grátis",
      checkoutLink: 'https://app.coinzz.com.br/checkout/3-pentes-por-24999-0/686064d3cfacb'
    }
  ],

  // Progressiva Vegetal Havana
  4: [
    {
      id: "1-unit",
      label: "1 Progressiva Vegetal (500ml)",
      price: 150.00,
      originalPrice: 197.00,
      checkoutLink: 'https://app.coinzz.com.br/checkout/prog-150-57/6855d3d1b5816'
    },
    {
      id: "2-units",
      label: "2 Progressivas Vegetais",
      price: 270.00,
      originalPrice: 394.00,
      discount: "Economia de R$ 124,00",
      popular: true,
      checkoutLink: 'https://app.coinzz.com.br/checkout/2-prog-270-0/6855d3d1b5816'
    },
    {
      id: "kit-completo",
      label: "Kit Completo: 2 Progressivas + Shampoo Preparador",
      price: 320.00,
      originalPrice: 450.00,
      discount: "Economia de R$ 130,00 + Shampoo Grátis",
      checkoutLink: 'https://app.coinzz.com.br/checkout/kit-prog-320-0/6855d3d1b5816'
    }
  ],

  // Máscara Karseell Original Collagen
  11: [
    {
      id: "1-unit",
      label: "1 Máscara Karseell (500g)",
      price: 160.00,
      originalPrice: 189.00,
      checkoutLink: 'https://pay.braip.co/ref?pl=playgege&ck=che4615q&af=afixj79yne'
    },
    {
      id: "2-units",
      label: "2 Máscaras Karseell",
      price: 280.00,
      originalPrice: 378.00,
      discount: "Economia de R$ 98,00",
      popular: true,
      checkoutLink: 'https://pay.braip.co/ref?pl=playgege2&ck=che4615q&af=afixj79yne'
    },
    {
      id: "kit-tratamento",
      label: "Kit Tratamento: 2 Máscaras + Óleo Reparador",
      price: 320.00,
      originalPrice: 420.00,
      discount: "Economia de R$ 100,00 + Óleo Grátis",
      checkoutLink: 'https://pay.braip.co/ref?pl=playgegekit&ck=che4615q&af=afixj79yne'
    }
  ],

  // Kit SOS Crescimento
  12: [
    {
      id: "1-kit",
      label: "1 Kit SOS Crescimento (30 dias)",
      price: 179.00,
      originalPrice: 229.00,
      discount: "Economia de R$ 50,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla4kw4v&ck=cheon6kw&af=afig57gg5o'
    },
    {
      id: "2-kits",
      label: "2 Kits SOS Crescimento (60 dias)",
      price: 279.00,
      originalPrice: 307.00,
      discount: "Economia de R$ 28,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla1nwn1&ck=cheon6kw&af=afig57gg5o'
    },
    {
      id: "3-kits",
      label: "2 Kits SOS Crescimento + 3 Brindes (80 dias)",
      price: 299.00,
      originalPrice: 345.00,
      discount: "Economia de R$ 46,00",
      badge: "Combo Promocional",
      badgeColor: "bg-orange-500",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla0wk4m&ck=cheon6kw&af=afig57gg5o'
    }
  ],

  // Rosa Amazônica
  13: [
    {
      id: "1-unit",
      label: "1x Rosa Amazônica (1 Mês de Tratamento)",
      price: 197.00,
      originalPrice: 227.00,
      discount: "Economia de R$ 30,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=plazl6do&ck=chezlmgr&af=afie0488o8'
    },
    {
      id: "2-units",
      label: "2x Rosa Amazônica (2 Meses de Tratamento)",
      price: 197.00,
      originalPrice: 297.00,
      discount: "Economia de R$ 100,00",
      badge: "Oferta limitada",
      badgeColor: "bg-red-500",
      checkoutLink: 'https://ev.braip.com/ref?pl=plamoxem&ck=chezlmgr&af=afie0488o8'
    },
    {
      id: "5-units",
      label: "5x Rosa Amazônica (5 Meses de Tratamento)",
      price: 397.00,
      originalPrice: 459.90,
      discount: "Economia de R$ 62,90",
      checkoutLink: 'https://ev.braip.com/ref?pl=plalyrxk&ck=chezlmgr&af=afie0488o8'
    }
  ],

  // Amora Miúra + VIT
  14: [
    {
      id: "1-month",
      label: "1x Amora Miúra + VIT (1 Mês de Tratamento)",
      price: 97.90,
      originalPrice: 137.90,
      discount: "Economia de R$ 40,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=playy0kk&ck=cheyn1wv&af=afie0me6g9'
    },
    {
      id: "2-months",
      label: "2x Amora Miúra + VIT (2 Meses de Tratamento)",
      price: 97.90,
      originalPrice: 157.90,
      discount: "Economia de R$ 60,00",
      badge: "Compre 1,Leve 2",
      badgeColor: "bg-orange-500",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla9p0nq&ck=cheyn1wv&af=afie0me6g9'
    },
    {
      id: "3-months",
      label: "3x Amora Miúra + VIT (3 Meses de Tratamento)",
      price: 187.90,
      originalPrice: 219.99,
      discount: "Economia de R$ 32,09",
      checkoutLink: 'https://ev.braip.com/ref?pl=plarg8k8&ck=cheyn1wv&af=afie0me6g9'
    }
  ]
};