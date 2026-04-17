import React from 'react';
import { AbsoluteFill, interpolateColors, useCurrentFrame } from 'remotion';

interface BlueprintEffectProps {
  children?: React.ReactNode;
  gridSize?: number;
}

export const BlueprintEffect: React.FC<BlueprintEffectProps> = ({
  children,
  gridSize = 60
}) => {
  const colors = ["#055219", "#003366", "#2a0552", "#055219"]
  const frame = useCurrentFrame()
  return (
    <AbsoluteFill style={{ backgroundColor: interpolateColors(frame, [150, 450, 750, 1050], colors,), overflow: 'hidden' }}>
      {/* The Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
        }}
      />
      {/* Smaller Sub-Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
          backgroundSize: `${gridSize / 5}px ${gridSize / 5}px`,
        }}
      />

      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </div>

      {/* Blueprint Text Details */}
      <div style={{ position: 'absolute', bottom: 40, left: 40, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', fontSize: 24 }}>
        PROJECT: HANDSHAKE_ENGINE<br />
        DOC_REF: META_JSON_V1.2<br />
        SCALE: 1:1
      </div>
    </AbsoluteFill>
  );
};
