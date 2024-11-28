import React from 'react';
import { useState, useEffect } from 'react';

const BackTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const showThreshold = 400;
  
        setIsVisible(scrollY > showThreshold);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <button
      className={`fixed bottom-20 right-6 bg-hoverblue hover:bg-blue px-2 py-2 rounded ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="white" d="M231.39 123.06A8 8 0 0 1 224 128h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 0l96 96a8 8 0 0 1 1.73 8.72"/></svg>
    </button>
  )
}

export default BackTopButton