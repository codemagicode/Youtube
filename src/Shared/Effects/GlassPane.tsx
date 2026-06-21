import React from 'react';
import { AbsoluteFill } from 'remotion';

interface GlassPaneProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  blur?: number;
  opacity?: number;
}

export const GlassPane: React.FC<GlassPaneProps> = ({
  children,
  style = {},
  blur = 25,
  opacity = 0.1
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        borderRadius: 60,
        // Inset shadow from top-left for depth
        boxShadow: `
                    inset 20px 20px 40px rgba(255, 255, 255, 0.2),
                    0 10px 30px rgba(0, 0, 0, 0.6)
                `,
        // border: '1px solid rgba(255, 255, 255, 1)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* The "Glow" on top-left corner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 60,
          pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 25%)',
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', width: '100%' }}>
        {children}
      </div>
    </AbsoluteFill>
  );
};
