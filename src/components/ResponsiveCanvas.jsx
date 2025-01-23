// src/components/ResponsiveCanvas.jsx
import React, { useRef, useEffect } from 'react';

const ResponsiveCanvas = ({ width, height, children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full" // Use Tailwind's classes for full-width/height
    >
      {children}
    </canvas>
  );
};

export default ResponsiveCanvas;