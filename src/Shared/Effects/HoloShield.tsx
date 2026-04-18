import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const HoloShield: React.FC<{
    delay?: number;
    width?: number;
    height?: number;
    color?: string;
    children?: React.ReactNode;
}> = ({ delay = 0, width = 600, height = 600, color = '#00f3ff', children }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const f = Math.max(0, frame - delay);

    // Growth animation
    const expand = spring({ fps, frame: f, config: { damping: 15, stiffness: 80 } });

    // Continuous pulsing opacity
    const pulse = Math.sin(f / 10) * 0.15 + 0.85; // Oscillates between 0.70 and 1.0
    const rotate = (f * 1.5) % 360; // Slow continuous rotation

    return (
        <div style={{
            position: 'relative',
            width,
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // Apply scaling to the whole container
            transform: `scale(${expand})`,
        }}>
            {/* Outer Glow Domain */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: `radial-gradient(circle, transparent 40%, ${color} 80%, transparent 100%)`,
                opacity: pulse * 0.4,
                filter: 'blur(10px)',
                transform: `rotate(${rotate}deg)`,
                boxShadow: `0 0 100px ${color}40`,
            }} />

            {/* Structured Hex Grid or Line Pattern Overlay */}
            <div style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                borderRadius: '50%',
                border: `3px dashed ${color}aa`,
                opacity: pulse * 0.8,
                transform: `rotate(${-rotate * 0.5}deg)`,
            }} />

            {/* Inner Solid Barrier */}
            <div style={{
                position: 'absolute',
                width: '88%',
                height: '88%',
                borderRadius: '50%',
                background: `rgba(0, 50, 60, 0.4)`, // Dark cyan tint inside the barrier
                backdropFilter: 'blur(5px)',
                border: `4px solid ${color}`,
                boxShadow: `inset 0 0 60px ${color}80, 0 0 40px ${color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Render children inside the shield */}
                <div style={{ transform: `scale(${1 / Math.max(0.01, expand)})` }}>
                    {children}
                </div>
            </div>
        </div>
    );
};
