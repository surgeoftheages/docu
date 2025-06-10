import React from 'react';

export default function ImageWithLightbox({ img }) {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setVisible(false);
    }
  }, [open]);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          src={img}
          alt="Thumbnail"
          onClick={() => setOpen(true)}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer',
          }}
        />
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'zoom-out',
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontSize: '2rem',
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 1001,
              lineHeight: '1',
            }}
          >
            &times;
          </div>

          <img
            src={img}
            alt="Full View"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80vw',
              maxHeight: '80vh',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transform: visible ? 'scale(2)' : 'scale(1)',
              transformOrigin: 'center',
              borderRadius: '1rem',
              boxShadow: '0 0 20px black',
            }}
          />
        </div>
      )}
    </>
  );
}
