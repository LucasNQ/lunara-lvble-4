import { useMemo } from 'react';
import { Product } from '@/contexts/CartContext';

export const useProducts = () => {
  const products: Product[] = useMemo(() => [
    {
      id: 12,
      name: "Kit SOS Crescimento Capilar",
      price: 179.00,
      originalPrice: 229.00,
      image: "/lovable-uploads/8f040543-3824-44e8-be55-131034df6ce3.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/8f040543-3824-44e8-be55-131034df6ce3.png",
        "/lovable-uploads/07046e8b-1f36-4709-a349-ccb29661a667.png",
        "/lovable-uploads/3cd0e289-6d5d-48cd-a84c-0a55da8be7c9.png",
        "/lovable-uploads/4af7aa72-7478-45bf-9ba2-31819c123c6e.png",
        "/lovable-uploads/dcb39001-c099-4e4e-868d-9694ef97cdf3.png"
      ],
      rating: 4.9,
      reviews: 1072,
      badge: "Clínica em Casa",
      badgeColor: "bg-red-500",
      slug: "kit-3-produtos",
      minicopy: "💆‍♀️ 7 ativos contra queda e falhas — clínica capilar em casa!",
      customButtonText: "Iniciar Meu Tratamento",
      extraInfo: "Cupom CLIENTE10: ganhe 10% OFF"
    },
    {
      id: 13,
      name: "Rosa Amazônica",
      price: 197.00,
      originalPrice: 247.00,
      image: "/lovable-uploads/6f37d876-cd4c-4c1c-8134-8cb7b4a19b8d.png",
      category: "Skincare",
      images: [
        "/lovable-uploads/6f37d876-cd4c-4c1c-8134-8cb7b4a19b8d.png",
        "/lovable-uploads/301de960-2270-4dc7-9d66-87a76c4ac564.png",
        "/lovable-uploads/89a41d0a-e561-44ec-bb0f-42331d65a98a.png",
        "/lovable-uploads/445f51d4-0392-493c-9974-cb366278ffe9.png",
        "/lovable-uploads/9c7bcf2a-5924-4122-9f8a-2698dd13022b.png"
      ],
      rating: 4.8,
      reviews: 823,
      badge: "11 em 1 Exclusivo",
      badgeColor: "bg-pink-500",
      slug: "rosa-amazonica-serum-11-em-1",
      minicopy: "🌸 11 benefícios em 1 sérum poderoso",
      customButtonText: "Ganhar Meu Glow Natural",
      extraInfo: "🔥 Leve 2, Pague 1 – Oferta Relâmpago"
    },
    {
      id: 14,
      name: "Amora Miúra + VIT - 60 Cápsulas / 30 Dias",
      price: 97.90,
      originalPrice: 137.90,
      image: "/lovable-uploads/5f027912-d056-44a2-a0b8-e90868d07a0e.png",
      category: "Skincare",
      images: [
        "/lovable-uploads/5f027912-d056-44a2-a0b8-e90868d07a0e.png",
        "/lovable-uploads/f4c6ee76-771b-4d92-9e24-063a7ee6cc1d.png",
        "/lovable-uploads/85c63495-c156-4d25-aa5d-931814d8cb99.png"
      ],
      rating: 4.7,
      reviews: 712,
      badge: "Alívio Natural da Menopausa",
      badgeColor: "bg-purple-500",
      slug: "amora-miura-vit",
      minicopy: "🍇 Equilíbrio e bem-estar sem hormônios",
      customButtonText: "Aliviar Meus Sintomas Já",
      extraInfo: "💰 Kit 3 meses por R$187,90 (economize ainda mais)"
    },
    {
      id: 11,
      name: "Máscara Karseell Original Collagen - 500g",
      price: 160.00,
      originalPrice: 189.00,
      image: "/lovable-uploads/6d30666c-b4ce-498e-addb-c1d7b76ad4e9.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/6d30666c-b4ce-498e-addb-c1d7b76ad4e9.png",
        "/lovable-uploads/4db1b939-ad5a-41e2-81c2-1a4efb1f5447.png",
        "/lovable-uploads/b06295ff-e7b1-4b64-9deb-08579e11f2f8.png",
        "/lovable-uploads/5ee8a1ce-0424-42db-94df-4b06a0742531.png",
        "/lovable-uploads/05e00818-91f9-4cd0-932a-07b948dce20f.png",
        "/lovable-uploads/74dcd28a-406e-40ec-82ba-eaae18086424.png",
        "/lovable-uploads/2cdc1769-b03e-422b-972b-4bf9f20aa107.png",
        "/lovable-uploads/3094b33f-72e9-403d-b61f-6c3731c696ee.png",
        "/lovable-uploads/b3c0b236-bad7-4c78-ac7f-5cfcbb61453b.png"
      ],
      rating: 4.7,
      reviews: 703,
      badge: "Brinde Exclusivo",
      badgeColor: "bg-yellow-500",
      slug: "o-tratamento-que-transforma-cabelos-ressecados-em-fios-sedosos-desde-o-primeiro-uso",
      minicopy: "✨ Hidratação profunda e brilho desde a 1ª aplicação",
      customButtonText: "Resgatar a Saúde dos Meus Fios",
      extraInfo: "🎁 Brinde: Óleo Karseell 50ml"
    },
    {
      id: 4,
      name: "Progressiva Vegetal Havana",
      price: 150.00,
      originalPrice: 197.00,
      image: "/lovable-uploads/77966a1c-ed1a-466c-8409-d3c586b9a24c.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/77966a1c-ed1a-466c-8409-d3c586b9a24c.png",
        "/lovable-uploads/e305af6d-f14d-4b93-bc0e-9881a85b906e.png",
        "/lovable-uploads/dd7305ac-c697-45fe-a913-f1f1b5ccaea6.png",
        "/lovable-uploads/31651d9f-c5ca-49e0-939a-c069b7808002.png",
        "/lovable-uploads/7ba57dbe-6727-4638-a387-220637b0f3a3.png"
      ],
      rating: 4.6,
      reviews: 514,
      badge: "Sem Formol",
      badgeColor: "bg-green-500",
      slug: "progressiva-vegetal-havana"
    },
    {
      id: 10,
      name: "Pente Alisador Portátil",
      price: 109.99,
      originalPrice: 159.90,
      image: "/lovable-uploads/7f1b5d3a-1e8c-4d2b-b461-39eb3eb10dcf.png",
      category: "Cabelos",
      images: [
        "/lovable-uploads/7f1b5d3a-1e8c-4d2b-b461-39eb3eb10dcf.png",
        "/lovable-uploads/95b2c441-1687-4339-94fb-25163a088821.png",
        "/lovable-uploads/b657aab5-ac9c-428a-bd80-1f9f389fb57d.png",
        "/lovable-uploads/d813c7be-668c-4b10-a217-535eb8483752.png",
        "/lovable-uploads/abe0f5f7-03f5-42b9-b26a-3dc77d8c8253.png"
      ],
      rating: 4.5,
      reviews: 492,
      badge: "Queridinho",
      badgeColor: "bg-purple-400",
      slug: "pente-alisador-portatil"
    }
  ], []);

  const getProductById = (id: number) => {
    return products.find(product => product.id === id);
  };

  const getProductBySlug = (slug: string) => {
    return products.find(product => product.slug === slug);
  };

  const getFeaturedProducts = (count: number = 3) => {
    return products.slice(0, count);
  };

  return {
    products,
    getProductById,
    getProductBySlug,
    getFeaturedProducts
  };
};