import React, { useMemo } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, random } from 'remotion';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  seed: string;
}

const Particle: React.FC<ParticleProps> = ({ x, y, size, delay, duration, drift, seed }) => {
  const frame = useCurrentFrame();
  const relativeFrame = frame - delay;

  if (relativeFrame < 0 || relativeFrame > duration) return null;

  const opacity = interpolate(
    relativeFrame,
    [0, duration * 0.2, duration * 0.8, duration],
    [0, 0.8, 0.5, 0],
    { extrapolateRight: 'clamp' }
  );

  const verticalSpeed = 200 + random(seed + 'v') * 100;
  const translateY = interpolate(
    relativeFrame,
    [0, duration],
    [0, -verticalSpeed],
    { extrapolateRight: 'clamp' }
  );

  const translateX = interpolate(
    relativeFrame,
    [0, duration],
    [0, drift],
    { extrapolateRight: 'clamp' }
  );

  const scale = interpolate(
    relativeFrame,
    [0, duration],
    [0.8, 3.5],
    { extrapolateRight: 'clamp' }
  );

  const blur = interpolate(
    relativeFrame,
    [0, duration],
    [4, 20],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: 'rgba(220, 220, 220, 0.9)',
        borderRadius: '50%',
        opacity,
        filter: `blur(${blur}px)`,
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      }}
    />
  );
};

export const SmokeParticles: React.FC<{ count?: number; x?: number; y?: number }> = ({
  count = 50,
  x,
  y
}) => {
  const { width, height } = useVideoConfig();

  // Default to center if not provided
  const centerX = x ?? width / 2;
  const centerY = y ?? height / 2;

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      seed: `smoke-${i}`,
      x: centerX + (random(`x-${i}`) - 0.5) * 60,
      y: centerY + (random(`y-${i}`) - 0.5) * 30,
      size: 15 + random(`s-${i}`) * 20,
      delay: i * 1.5, // Staggered spawn
      duration: 80 + random(`d-${i}`) * 60,
      drift: (random(`dr-${i}`) - 0.5) * 150,
    }));
  }, [count, centerX, centerY]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
};
