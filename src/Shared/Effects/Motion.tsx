import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring, Easing } from 'remotion';

export type MotionEffect =
  | 'fade'
  | 'scale'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'spring-scale'
  | 'bounce';

interface MotionProps {
  children: React.ReactNode;
  in?: MotionEffect[];
  out?: MotionEffect[];
  inStart?: number;
  inDuration?: number;
  outStart?: number;
  outDuration?: number;
  style?: React.CSSProperties;
}

export const Motion: React.FC<MotionProps> = ({
  children,
  in: inEffects = [],
  out: outEffects = [],
  inStart = 0,
  inDuration = 30,
  outStart,
  outDuration = 30,
  style = {},
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Default outStart to end of composition minus outDuration if not provided
  const actualOutStart = outStart ?? (durationInFrames - outDuration);

  // Initial values
  let opacity = 1;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;

  // --- IN ANIMATIONS ---
  const inProgress = interpolate(frame, [inStart, inStart + inDuration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const inSpring = spring({
    frame: frame - inStart,
    fps,
    config: { stiffness: 100, damping: 10 },
  });

  if (inEffects.includes('fade')) {
    opacity *= inProgress;
  }
  if (inEffects.includes('scale')) {
    scale *= interpolate(inProgress, [0, 1], [0.5, 1]);
  }
  if (inEffects.includes('spring-scale')) {
    scale *= interpolate(inSpring, [0, 1], [0, 1]);
  }
  if (inEffects.includes('slide-up')) {
    translateY += interpolate(inProgress, [0, 1], [100, 0]);
  }
  if (inEffects.includes('slide-down')) {
    translateY += interpolate(inProgress, [0, 1], [-100, 0]);
  }
  if (inEffects.includes('slide-left')) {
    translateX += interpolate(inProgress, [0, 1], [100, 0]);
  }
  if (inEffects.includes('slide-right')) {
    translateX += interpolate(inProgress, [0, 1], [-100, 0]);
  }
  if (inEffects.includes('bounce')) {
    translateY += Math.abs(Math.sin(inProgress * Math.PI)) * -50 * (1 - inProgress);
  }

  // --- OUT ANIMATIONS ---
  const outProgress = interpolate(frame, [actualOutStart, actualOutStart + outDuration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (frame >= actualOutStart) {
    if (outEffects.includes('fade')) {
      opacity *= (1 - outProgress);
    }
    if (outEffects.includes('scale')) {
      scale *= interpolate(outProgress, [0, 1], [1, 0.5]);
    }
    if (outEffects.includes('slide-up')) {
      translateY += interpolate(outProgress, [0, 1], [0, -100]);
    }
    if (outEffects.includes('slide-down')) {
      translateY += interpolate(outProgress, [0, 1], [0, 100]);
    }
    if (outEffects.includes('slide-left')) {
      translateX += interpolate(outProgress, [0, 1], [0, -100]);
    }
    if (outEffects.includes('slide-right')) {
      translateX += interpolate(outProgress, [0, 1], [0, 100]);
    }
  }

  return (
    <div
      style={{
        ...style,
        opacity,
        transform: `
                    ${style.transform || ''} 
                    translate(${translateX}px, ${translateY}px) 
                    scale(${scale})
                `,
      }}
    >
      {children}
    </div>
  );
};
