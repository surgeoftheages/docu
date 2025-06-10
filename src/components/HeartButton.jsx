import React from "react";

export default function HeartButton() {
    const [likes, setLikes] = React.useState(0);
  
    return (
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button
          onClick={() => setLikes(likes + 1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '2rem',
            color: likes > 0 ? 'red' : 'gray',
          }}
          aria-label="Like"
        >
          ❤️
        </button>
        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#444' }}>
          {likes} {likes === 1 ? 'like' : 'likes'}
        </div>
      </div>
    );
  }