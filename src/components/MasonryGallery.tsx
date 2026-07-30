import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  categories: string[];
}

export default function MasonryGallery({ images, categories }: MasonryGalleryProps) {
  const [activeTab, setActiveTab] = useState(categories[0] || '');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = images.filter((img) => img.category === activeTab);
  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  }, [filteredImages.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, goToPrev, goToNext]);

  return (
    <div className="masonry-gallery">
      {categories.length > 1 && (
        <div className="masonry-gallery__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`masonry-gallery__tab${cat === activeTab ? ' masonry-gallery__tab--active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="masonry-gallery__grid">
        {filteredImages.map((img, i) => (
          <div
            key={i}
            className="masonry-gallery__item"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="masonry-gallery__image"
              loading="lazy"
            />
            <div className="masonry-gallery__overlay">
              <p className="masonry-gallery__item-caption">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && createPortal(
        <div
          className="masonry-gallery__lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="masonry-gallery__lightbox-arrow masonry-gallery__lightbox-arrow--left"
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="masonry-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="masonry-gallery__lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="masonry-gallery__lightbox-image"
            />
            <p className="masonry-gallery__lightbox-caption">
              {selectedImage.caption}
            </p>
          </div>

          <button
            className="masonry-gallery__lightbox-arrow masonry-gallery__lightbox-arrow--right"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>,
        document.body
      )}
    </div>
  );
}