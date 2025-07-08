import React from 'react';

export default function ImageWithLightbox({ img }) {
  const [isLoaded, setLoad] = React.useState(false);

  // Style moved to a constant
  const imageStyle = {
    maxWidth: '100%',
    marginTop: '1rem',
    filter: isLoaded ? 'drop-shadow(0 0 0.75rem violet)' : 'none'
    };

  const handleImageClick = () => {
    console.log(`image ${img} is pressed`),
      setLoad(prev => !prev); // toggles true/false
  }

  return (
    <div>
      <div>
        <img src={img} alt="Preview" style={imageStyle} onClick={handleImageClick} />
      </div>

      {/*  set the loading */}
      {isLoaded && <p>Loading complete</p>}
      {isLoaded ? (
        <a href="https://google.com">bruh</a>
      ) : (
        <a href="https://managa"> 🥭</a>
      )}
    </div>
  );
}




