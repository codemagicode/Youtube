import React from 'react';
import { useCurrentFrame, interpolate, random } from 'remotion';

interface GlitchEffectProps {
  children: React.ReactNode;
  intensity?: number;
  active?: boolean;
}

export const GlitchEffect: React.FC<GlitchEffectProps> = ({
  children,
  intensity = 1,
  active = true
}) => {
  const frame = useCurrentFrame();

  if (!active || (frame % 5 > 1)) return <>{children}</>;

  const rX = (random(frame + 'r') - 0.5) * 20 * intensity;
  const rY = (random(frame + 'r2') - 0.5) * 10 * intensity;
  const gX = (random(frame + 'g') - 0.5) * 15 * intensity;
  const bX = (random(frame + 'b') - 0.5) * 25 * intensity;

  return (
    <div style={{ position: 'relative' }}>
      {/* Red Channel */}
      <div style={{
        position: 'absolute', top: rY, left: rX, opacity: 0.5,
        color: 'red', filter: 'drop-shadow(0 0 0 red) contrast(200%)'
      }}>
        {children}
      </div>
      {/* Green Channel */}
      <div style={{
        position: 'absolute', top: 0, left: gX, opacity: 0.5,
        color: 'green', filter: 'drop-shadow(0 0 0 green) contrast(200%)'
      }}>
        {children}
      </div>
      {/* Blue Channel */}
      <div style={{
        position: 'absolute', top: -rY / 2, left: bX, opacity: 0.5,
        color: 'blue', filter: 'drop-shadow(0 0 0 blue) contrast(200%)'
      }}>
        {children}
      </div>
      {/* Main Content (Base) */}
      <div style={{ position: 'relative', filter: 'grayscale(50%)' }}>
        {children}
      </div>
    </div>
  );
};
