import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

export const ConnectionLine: React.FC<{
    delay?: number;
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
    color?: string;
}> = ({ delay = 0, startX = 0, startY = 100, endX = 600, endY = 100, color = "#00FFAA" }) => {
    const frame = useCurrentFrame();
    const f = Math.max(0, frame - delay);

    // Calculate Euclidean distance for SVG length
    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));

    // The line draws itself between frames 0 to 30
    const progress = interpolate(f, [0, 30], [0, distance], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.out(Easing.ease)
    });

    // A glowing pulse travels along the line endlessly
    const dashOffset = (f * 15) % distance;

    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                {/* Shadow base path (drawn first) */}
                <line
                    x1={startX} y1={startY}
                    x2={endX} y2={endY}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* Animated growing main line */}
                <line
                    x1={startX} y1={startY}
                    x2={endX} y2={endY}
                    stroke={color}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={distance}
                    strokeDashoffset={distance - progress}
                    style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                />

                {/* Moving data packets (show only after line is drawn) */}
                {f > 30 && (
                    <line
                        x1={startX} y1={startY}
                        x2={endX} y2={endY}
                        stroke="#FFF"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`20 ${distance - 20}`}
                        strokeDashoffset={-dashOffset}
                        style={{ filter: `drop-shadow(0 0 15px #FFF) drop-shadow(0 0 25px ${color})` }}
                    />
                )}
            </svg>
        </div>
    );
};
