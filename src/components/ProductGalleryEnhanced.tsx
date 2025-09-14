import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ProductGalleryEnhancedProps {
  images: string[];
  productName: string;
}

const ProductGalleryEnhanced = ({ images, productName }: ProductGalleryEnhancedProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomImageIndex, setZoomImageIndex] = useState(0);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(prev => prev + 1);
    }
    if (isRightSwipe && selectedImageIndex > 0) {
      setSelectedImageIndex(prev => prev - 1);
    }
  };

  const openZoom = (index: number) => {
    setZoomImageIndex(index);
    setIsZoomOpen(true);
  };

  const handleZoomTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleZoomTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleZoomTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && zoomImageIndex < images.length - 1) {
      setZoomImageIndex(prev => prev + 1);
    }
    if (isRightSwipe && zoomImageIndex > 0) {
      setZoomImageIndex(prev => prev - 1);
    }
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          ref={mainImageRef}
          className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => openZoom(selectedImageIndex)}
        >
          <OptimizedImage
            src={images[selectedImageIndex]}
            alt={`${productName} - Imagem ${selectedImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
            width={600}
            height={600}
            priority
          />
          
          {/* Zoom Icon */}
          <div className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors">
            <Search className="w-5 h-5" />
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}

        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="w-full">
            <div 
              className="flex gap-2 overflow-x-auto pb-2 flex-nowrap scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index
                      ? 'border-primary shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <OptimizedImage
                    src={image}
                    alt={`${productName} - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={64}
                    height={64}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-white">
          <div className="relative w-full h-[95vh] flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 bg-gray-400/80 hover:bg-gray-500/80 text-white rounded-full w-10 h-10"
              onClick={() => setIsZoomOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onTouchStart={handleZoomTouchStart}
              onTouchMove={handleZoomTouchMove}
              onTouchEnd={handleZoomTouchEnd}
            >
              <OptimizedImage
                src={images[zoomImageIndex]}
                alt={`${productName} - Zoom ${zoomImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                width={1200}
                height={1200}
              />
              
              {/* Image Counter in Zoom */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
                  {zoomImageIndex + 1} / {images.length}
                </div>
              )}

            </div>

            {/* Thumbnail Navigation in Zoom */}
            {images.length > 1 && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setZoomImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      zoomImageIndex === index
                        ? 'border-gray-800 shadow-md'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${productName} - Miniatura Zoom ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductGalleryEnhanced;