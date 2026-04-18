import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

export const SlotMachine: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const f = Math.max(0, frame - delay);

    // Fake items to spin through
    const items = [
        { bg: '#FF5F56', text: 'Translate Word' },
        { bg: '#FFBD2E', text: 'Build Sentence' },
        { bg: '#27C93F', text: 'Listen to Audio' },
        { bg: '#A6ACCD', text: 'Multiple Choice' },
        { bg: '#C3E88D', text: 'Fill in Blanks' },
        { bg: '#FF5F56', text: 'Translate Word' }, // duplicate at end for seamless looping wrap
    ];

    const itemHeight = 120;

    // Logic: Spin rapidly from frames 10 to 60, then slow down and settle on an item.
    // Move down by full height of the list several times
    const totalSpins = 3;
    const listHeight = itemHeight * (items.length - 1);
    const targetEndOffset = listHeight * totalSpins + (itemHeight * 1); // Land on "Build Sentence" (index 1)

    const spinOffset = interpolate(f, [10, 80], [0, targetEndOffset], {
        easing: Easing.bezier(0.1, 0.8, 0.2, 1),
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    });

    const moduloOffset = spinOffset % listHeight;

    // Render 3 slots to show the window (previous, current, next)
    return (
        <div style={{
            width: 450,
            height: 250,
            background: 'linear-gradient(180deg, #111 0%, #222 50%, #111 100%)',
            borderRadius: 16,
            border: '4px solid #444',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8), inset 0 0 30px rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* Target Marker Overlay */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '100%',
                height: itemHeight,
                transform: 'translateY(-50%)',
                borderTop: '2px solid #00FFAA',
                borderBottom: '2px solid #00FFAA',
                background: 'linear-gradient(90deg, rgba(0,255,170,0.1) 0%, rgba(0,255,170,0) 100%)',
                pointerEvents: 'none',
                zIndex: 5
            }} />

            {/* Reel content */}
            <div style={{
                position: 'absolute',
                top: '50%', // Start centered
                transform: `translateY(calc(-50% + ${-moduloOffset}px))`,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center'
            }}>
                {items.map((it, i) => (
                    <div key={i} style={{
                        height: itemHeight,
                        width: '90%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: '#fff',
                        background: it.bg,
                        borderRadius: 12,
                        margin: '10px 0',
                        boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.2)'
                    }}>
                        {it.text}
                    </div>
                ))}
            </div>

            {/* Inner shadow mask over spinning elements */}
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 30px 40px #111, inset 0 -30px 40px #111', pointerEvents: 'none' }} />
        </div>
    );
};
