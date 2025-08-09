import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function LightboxGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: '/img/exampleimg.png',
      alt: 'Siddhar Thaengaai Swami',
      title: 'Siddhar Thaengaai Swami',
    },
    {
      src: '/img/exampleimg.png',
      alt: 'Example Image',
      title: 'Sample Example Image',
    },
    {
      src: '/img/exampleimg.png',
      alt: 'Siddhar Again',
      title: 'Siddhar Again',
    },
  ];

  return (
    <>
      <style>{`
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 1rem;
          justify-content: center;
        }
        .gallery-image {
          width: calc(33.333% - 10px);
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .gallery-image {
            width: 100% !important;
          }
        }
      `}</style>

      <div className="gallery-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="gallery-image"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={images}
        render={{
          slide: ({ slide }) => (
            <img
              src={slide.src}
              alt={slide.alt}
              style={{
                maxHeight: '80vh',
                maxWidth: '90vw',
                objectFit: 'contain',
              }}
            />
          ),
        }}
      />
    </>
  );
}
