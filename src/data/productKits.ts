import { ProductOption } from '@/components/ProductQuantitySelector';

export const productKits: Record<number, ProductOption[]> = {
  // Pente Alisador Portátil
  10: [
    {
      id: "1-unit",
      label: "1x Pente Alisador",
      price: 109.99,
      originalPrice: 159.90,
      discount: "Economia de R$ 49,91",
      checkoutLink: 'https://app.coinzz.com.br/checkout/1-pente-por-10999-0/686064d3cfacb'
    },
    {
      id: "2-units",
      label: "2x Pente Alisador",
      price: 159.99,
      originalPrice: 189.99,
      discount: "Economia de R$ 30,00",
      badge: "Oferta limitada",
      badgeColor: "bg-orange-500",
      checkoutLink: 'https://app.coinzz.com.br/checkout/2-pentes-por-15999-0/686064d3cfacb'
    }
  ],

  // Progressiva Vegetal Havana
  4: [
    {
      id: "1-unit",
      label: "1x Progressiva Vegetal (500ml)",
      price: 150.00,
      originalPrice: 197.00,
      discount: "Economia de R$ 47,00",
      checkoutLink: 'https://app.coinzz.com.br/checkout/prog-150-0/6855d3d1b5816'
    },
    {
      id: "2-units",
      label: "2x Progressiva Vegetal (500ml)",
      price: 220.00,
      originalPrice: 277.00,
      discount: "Economia de R$ 57,00",
      badge: "Promoção",
      badgeColor: "bg-green-500",
      checkoutLink: 'https://app.coinzz.com.br/checkout/2-prog-220-0/6855d3d1b5816'
    },
    {
      id: "3-units",
      label: "3x Progressiva Vegetal (500ml)",
      price: 291.00,
      originalPrice: 330.00,
      discount: "Economia de R$ 39,00",
      checkoutLink: 'https://app.coinzz.com.br/checkout/3-prog-291-0/6855d3d1b5816'
    }
  ],

  // Máscara Karseell Original Collagen
  11: [
    {
      id: "1-unit",
      label: "1x Máscara Karseell (500g) + Brinde",
      price: 170.00,
      originalPrice: 189.00,
      discount: "Economia de R$ 19,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=playgege&ck=che4615q&af=afixj79yne'
    },
    {
      id: "2-units",
      label: "2x Máscara Karseell (500g) + Brinde",
      price: 240.00,
      originalPrice: 297.90,
      discount: "Economia de R$ 57,90",
      badge: "Mais Vendido",
      badgeColor: "bg-yellow-500",
      checkoutLink: 'https://ev.braip.com/ref?pl=plar6ozr&ck=che4615q&af=afixj79yne'
    },
    {
      id: "3-units",
      label: "3x Máscara Karseell (500g) + Brinde",
      price: 330.00,
      originalPrice: 409.99,
      discount: "Economia de R$ 79,99",
      checkoutLink: 'https://ev.braip.com/ref?pl=plakg68l&ck=che4615q&af=afixj79yne'
    }
  ],

  // Kit SOS Crescimento
  12: [
    {
      id: "1-kit",
      label: "1x Kit SOS Crescimento (1 Mês de Tratamento)",
      price: 179.00,
      originalPrice: 229.00,
      discount: "Economia de R$ 50,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla4kw4v&ck=cheon6kw&af=afig57gg5o'
    },
    {
      id: "2-kits",
      label: "2x Kits SOS Crescimento (2 Meses de Tratamento)",
      price: 279.00,
      originalPrice: 307.00,
      discount: "Economia de R$ 28,00",
      checkoutLink: 'https://ev.braip.com/ref?pl=pla1nwn1&ck=cheon6kw&af=afig57gg5o'
    },
    {
      id: "3-kits",
      label: "2x Kits SOS Crescimento (3 Meses de Tratamento)",
      price: 299.00,
      originalPrice: 345.00,
      discount: "Economia de R$ 46,00",
      badge: "Combo Promocional",
      badgeColor: "bg-red-500",
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