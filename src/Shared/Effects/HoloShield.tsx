import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const HoloShield: React.FC<{
    delay?: number;
    width?: number;
    height?: number;
    color?: string;
    children?: React.ReactNode;
    rotateDirection?: 'clockwise' | 'anticlockwise'
}> = ({ delay = 0, width = 600, height = 600, color = '#00f3ff', children, rotateDirection = 'anticlockwise' }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const f = Math.max(0, frame - delay);

    // Growth animation
    const expand = spring({ fps, frame: f, config: { damping: 15, stiffness: 80 } });

    // Continuous pulsing opacity
    const pulse = Math.sin(f / 10) * 0.15 + 0.85; // Oscillates between 0.70 and 1.0
    
    const rotationSpeed = 1.5;
    const baseRotation = (f * rotationSpeed) % 360;
    const rotation = rotateDirection === 'clockwise' ? baseRotation : -baseRotation;

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
                transform: `rotate(${rotation}deg)`,
                boxShadow: `0 0 100px ${color}40`,
            }} />

            {/* Structured Hex Grid or Line Pattern Overlay */}
            <div style={{
              
                width: '90%',
                height: '90%',
                borderRadius: '50%',
                border: `13px dashed ${color}aa`,
                opacity: pulse * 0.8,
                transform: `rotate(${-rotation * 0.5}deg)`,
                padding: '20px'
            }} >
            {/* Inner Solid Barrier */}
            <div style={{
                width: '100%',
                aspectRatio: 1,
                borderRadius: '50%',
                background: `rgba(0, 50, 60, 0.4)`, // Dark cyan tint inside the barrier
                backdropFilter: 'blur(5px)',
                border: `30px solid ${color}`,
                boxShadow: `inset 0 0 60px ${color}80, 0 0 40px ${color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${rotation * 0.3}deg)`
            }}>
                {/* Render children inside the shield */}
                <div style={{ transform: `scale(${1 / Math.max(0.01, expand)})` }}>
                    {children}
                </div>
            </div>

            </div>

        </div>
    );
};

export const HoloShieldPoc = () => {
    return <div style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }} >
        <HoloShield rotateDirection='anticlockwise' >
            <HoloShield width={400} height={400} rotateDirection='clockwise' ></HoloShield>
        </HoloShield>
    </div>
}