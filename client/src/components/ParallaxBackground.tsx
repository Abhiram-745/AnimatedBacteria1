import { useEffect, useState } from 'react';
import heroImage from '@assets/generated_images/Salmonella_bacteria_microscopy_hero_background_65e8d3b6.png';
import layer1Image from '@assets/generated_images/Deep_parallax_background_layer_3838f932.png';
import layer2Image from '@assets/generated_images/Bacteria_parallax_layer_background_3e2583d5.png';

interface ParallaxBackgroundProps {
  isHero?: boolean;
}

export default function ParallaxBackground({ isHero = false }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isHero) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${layer1Image})`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url(${layer2Image})`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />
    </div>
  );
}
