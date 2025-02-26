import { useEffect, useCallback } from 'react';

const Stars = () => {
  const createStar = useCallback(() => {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random size (slightly larger range for more variety)
    const size = `${0.2 + Math.random() * 2.5}px`;
    star.style.width = size;
    star.style.height = size;
    
    // Longer, smoother animation duration and delay
    star.style.setProperty('--twinkle-duration', `${4 + Math.random() * 6}s`);
    star.style.setProperty('--twinkle-delay', `${Math.random() * 5}s`);
    
    return star;
  }, []);

  useEffect(() => {
    const background = document.createElement('div');
    background.className = 'starry-background';
    
    // Create stars
    for (let i = 0; i < 200; i++) {
      background.appendChild(createStar());
    }
    
    document.body.insertBefore(background, document.body.firstChild);
    
    return () => {
      document.body.removeChild(background);
    };
  }, [createStar]);

  return null;
};

export default Stars;
