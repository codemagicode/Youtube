import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

interface CameraShakeProps {
  children: React.ReactNode;
  intensity?: number;
  triggerFrame?: number;
  duration?: number;
}

export const CameraShake: React.FC<CameraShakeProps> = ({
  children,
  intensity = 1,
  triggerFrame = 0,
  duration = 30
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const relativeFrame = frame - triggerFrame;

  // If duration is 0, shake forever. Otherwise decay.
  const decay = duration === 0
    ? 1
    : interpolate(relativeFrame, [0, duration], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

  if (relativeFrame < 0 || (duration !== 0 && relativeFrame > duration)) {
    return <>{children}</>;
  }

  // High frequency jitter using prime-numbered frequencies to avoid patterns
  const xJitter = Math.sin(relativeFrame * 1.1) * Math.cos(relativeFrame * 0.7) * 30 * intensity * decay;
  const yJitter = Math.cos(relativeFrame * 0.9) * Math.sin(relativeFrame * 1.3) * 25 * intensity * decay;
  const rotation = Math.sin(relativeFrame * 1.7) * 3 * intensity * decay;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transform: `translate(${xJitter}px, ${yJitter}px) rotate(${rotation}deg)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  );
};
