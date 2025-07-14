import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function LightboxGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: '/img/siddhar-thaengaai-swami.jpg',
      alt: 'Siddhar Thaengaai Swami',
      title: 'Siddhar Thaengaai Swami',
    },
    {
      src: '/img/exampleimg.png',
      alt: 'Example Image',
      title: 'Sample Example Image',
    },
    {
      src: '/img/siddhar-thaengaai-swami.jpg',
      alt: 'Siddhar Again',
      title: 'Siddhar Again',
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{
              width: '200px',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
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
              style={{ maxHeight: '80vh', maxWidth: '90vw', objectFit: 'contain' }}
            />
          ),
        }}
      />
    </div>
  );
}
