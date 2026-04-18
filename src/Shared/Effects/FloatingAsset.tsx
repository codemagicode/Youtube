import React from 'react';
import { useCurrentFrame } from 'remotion';

interface FloatingAssetProps {
  children: React.ReactNode;
  magnitude?: number;
  speed?: number;
  rotationMagnitude?: number;
}

export const FloatingAsset: React.FC<FloatingAssetProps> = ({
  children,
  magnitude = 15,
  speed = 1,
  rotationMagnitude = 2
}) => {
  const frame = useCurrentFrame();
  const time = frame / 30 * speed;

  const translateY = Math.sin(time) * magnitude;
  const rotate = Math.cos(time * 0.8) * rotationMagnitude;
  const scale = 1 + Math.sin(time * 1.2) * 0.02; // Subtle pulsing

  return (
    <div
      style={{
        transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};
