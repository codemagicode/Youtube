import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

interface HandshakeProps {
  leftAsset: React.ReactNode;
  rightAsset: React.ReactNode;
  startFrame: number;
}

export const SpringHandshake: React.FC<HandshakeProps> = ({ leftAsset, rightAsset, startFrame }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Entry Animation
  const entry = spring({
    frame: frame - startFrame,
    fps,
    config: {
      stiffness: 100,
      damping: 10,
    },
  });

  const contactFrame = startFrame + 20;

  // Impact Shake
  const shake = spring({
    frame: frame - contactFrame,
    fps,
    config: {
      mass: 0.5,
      stiffness: 200,
      damping: 5,
    },
  });

  const shakeRange = [0, 1, 2, 3, 4, 5];
  const shakeValues = [0, -10, 8, -6, 4, 0];
  const impactDelta = interpolate(shake, shakeRange, shakeValues);

  const leftX = interpolate(entry, [0, 1], [-200, width / 2 - 120]);
  const rightX = interpolate(entry, [0, 1], [width + 200, width / 2 + 120]);

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'absolute',
          left: leftX + impactDelta,
          transform: `translateY(${impactDelta * 0.5}px) rotate(${impactDelta * 0.5}deg)`,
        }}
      >
        {leftAsset}
      </div>
      <div
        style={{
          position: 'absolute',
          left: rightX - impactDelta,
          transform: `translateY(${-impactDelta * 0.5}px) rotate(${-impactDelta * 0.5}deg)`,
        }}
      >
        {rightAsset}
      </div>

      {/* Impact Sparkle/Flash */}
      {frame >= contactFrame && frame < contactFrame + 10 && (
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: interpolate(frame - contactFrame, [0, 10], [0.8, 0]),
            transform: `scale(${interpolate(frame - contactFrame, [0, 10], [0.5, 2])})`,
            filter: 'blur(20px)',
          }}
        />
      )}
    </div>
  );
};
