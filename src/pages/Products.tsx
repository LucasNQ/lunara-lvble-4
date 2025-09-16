
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useProducts } from '@/hooks/useProducts';

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const { products } = useProducts();

  const categories = [
    'Todos',
    'Cabelos', 
    'Skincare'
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);


  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20">
          {/* Page Header */}
          <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-4 mb-6">
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </Button>
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Todos os <span className="text-gradient">Produtos</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Garanta já os queridinhos que transformaram a vida de milhares de mulheres.
              </p>
            </div>
          </section>

          {/* Category Filter */}
          <section className="py-8 md:py-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-4xl mx-auto overflow-hidden">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      relative px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm font-bold rounded-full transition-all duration-300 ease-in-out
                      md:hover:scale-105 md:hover:shadow-lg focus:outline-none
                      ${selectedCategory === category 
                        ? 'btn-gradient text-white shadow-lg md:transform md:scale-105' 
                        : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white/90 md:hover:bg-white border border-gray-200 hover:border-pink-300 md:hover:border-gray-300 shadow-sm hover:shadow-md'
                      }
                    `}
                  >
                    <span className="relative z-10">{category}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    priority={index < 3}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Products;
