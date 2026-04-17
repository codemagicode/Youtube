import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

export type OscillatorType = 'horizontal' | 'vertical' | 'angle';

interface OscillatorProps {
  children: React.ReactNode;
  type?: OscillatorType;
  speed?: number; // Cycles per second (Hz)
  distance?: number; // Amplitude for translation
  degree?: number; // Amplitude for rotation
  count?: number; // Number of full cycles (to and fro)
  duration?: number; // Total duration in frames
  anchorPoint?: string; // CSS transform-origin
  style?: React.CSSProperties;
}

export const Oscillator: React.FC<OscillatorProps> = ({
  children,
  type = 'horizontal',
  speed = 1,
  distance = 50,
  degree = 15,
  count,
  duration,
  anchorPoint = 'center',
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate how many frames one full cycle takes: fps / speed
  const framesPerCycle = fps / speed;

  // Determine the end frame based on count and duration
  let endFrame = Infinity;
  if (count !== undefined) {
    endFrame = Math.min(endFrame, count * framesPerCycle);
  }
  if (duration !== undefined) {
    endFrame = Math.min(endFrame, duration);
  }

  // Clamp the current frame to the end frame for the calculation
  const effectiveFrame = Math.min(frame, endFrame);

  // Calculate normalized time based on effective frame and speed
  const time = (effectiveFrame / fps) * speed * Math.PI * 2;
  const oscillation = Math.sin(time);

  let transform = style.transform || '';

  if (type === 'horizontal') {
    const x = oscillation * distance;
    transform += ` translateX(${x}px)`;
  } else if (type === 'vertical') {
    const y = oscillation * distance;
    transform += ` translateY(${y}px)`;
  } else if (type === 'angle') {
    const angle = oscillation * degree;
    transform += ` rotate(${angle}deg)`;
  }

  return (
    <div
      style={{
        ...style,
        transform,
        transformOrigin: anchorPoint,
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};
