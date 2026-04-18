import { useCurrentFrame, interpolate } from 'remotion';
import React from 'react';

export const MetallicText: React.FC<{ text: string; style?: React.CSSProperties }> = ({ text, style }) => {
    const frame = useCurrentFrame();
    const loopDuration = 360; // 2 seconds at 60fps

    // Progress from 0 to 1
    const progress = (frame % loopDuration) / loopDuration;

    // Background position sweeping across the text
    const bgX = interpolate(progress, [0, 1], [-200, 200]);

    return (
        <div
            style={{
                fontWeight: 900,
                fontSize: 150,
                textTransform: 'uppercase',
                fontFamily: '"Cinzel", "Montserrat", sans-serif',
                color: 'transparent',
                backgroundImage: `linear-gradient(
          -45deg, 
          #555 0%,
          #888 20%, 
          #e0e0e0 40%, 
          #ffffff 50%, 
          #e0e0e0 60%, 
          #888 80%,
          #555 100%
        )`,
                backgroundColor: '#555',
                backgroundSize: '200% auto',
                backgroundPositionX: `${bgX}%`,
                backgroundPositionY: 'center',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 30px 40px rgba(0,0,0,0.9)) drop-shadow(0px 10px 10px rgba(0,0,0,0.5))',
                ...style,
            }}
        >
            {text}
        </div>
    );
};
