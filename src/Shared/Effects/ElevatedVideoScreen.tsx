import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { AbsoluteFill, Html5Video as Video } from 'remotion';

interface ElevatedVideoScreenProps {
  videoSrc: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  gapSize?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffset?: { x: number; y: number };
  gradientColors?: string[];
  gradientDirection?: 'to right' | 'to left' | 'to top' | 'to bottom' | '45deg' | '135deg';
  gradientSpeed?: number;
  backgroundType?: 'gradient' | 'pulsing-light' | 'image'; // Added backgroundType
  pulseColors?: string[];
  pulseFrequency?: number;
  pulseAmplitude?: number;
  backgroundImageSrc?: string;
  backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
  backgroundSize?: 'auto' | 'cover' | 'contain' | string;
  imageAnimationSpeed?: number;
}

export const ElevatedVideoScreen: React.FC<ElevatedVideoScreenProps> = ({
  videoSrc,
  width = 1280,
  height = 720,
  borderRadius = 30,
  gapSize = 40,
  shadowColor = 'rgba(0, 0, 0, 0.4)',
  shadowBlur = 40,
  shadowOffset = { x: 0, y: 20 },
  backgroundType = 'gradient', // Default backgroundType
  gradientColors = ['#ff00cc', '#3333ff'], // Example vibrant colors
  gradientDirection = 'to right',
  gradientSpeed = 10, // Speed of gradient animation in frames
}) => {
  const frame = useCurrentFrame();

  // Calculate dynamic gradient position for animation
  const gradientPosition = interpolate(
    frame % gradientSpeed,
    [0, gradientSpeed - 1],
    [0, 100],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const gradientStyle: React.CSSProperties = {
    background: `linear-gradient(${gradientDirection}, ${gradientColors.map((color, i) =>
      `${color} ${((gradientPosition + (i * 100 / gradientColors.length)) % 100)}%`
    ).join(', ')})`,
    backgroundSize: '200% 200%', // For better animation effect with percentage stops
  };

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Ensure nothing overflows the parent
      }}
    >
      <div
        style={{
          width: width + gapSize * 2,
          height: height + gapSize * 2,
          borderRadius: borderRadius + gapSize, // Larger border radius for the background container
          position: 'relative',
          overflow: 'hidden', // Contain the gradient animation
          boxShadow: `${shadowOffset.x}px ${shadowOffset.y}px ${shadowBlur}px ${shadowColor}`,
          // Apply the animated gradient to the background
          ...gradientStyle,
        }}
      >
        {/* The video element */}
        <Video
          src={videoSrc}
          style={{
            position: 'absolute',
            top: gapSize,
            left: gapSize,
            width: width,
            height: height,
            borderRadius: borderRadius,
            objectFit: 'cover', // Ensures the video covers the area without distortion
            zIndex: 1, // Place video above the gradient background
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
