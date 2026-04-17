import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const TerminalWindow: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const f = Math.max(0, frame - delay);
    const appear = spring({ fps, frame: f, config: { damping: 14 } });

    // Generating fake scrolling JSON lines
    const lines = [
        `{`,
        `  "version": "1.2.0",`,
        `  "lessons": [`,
        `    { "id": "L1", "title": "Greetings" },`,
        `    { "id": "L2", "title": "Food" }`,
        `  ],`,
        `  "status": "ready",`,
        `  "timestamp": 170923049`,
        `}`
    ];

    return (
        <div style={{
            width: 700,
            height: 500,
            background: 'rgba(20, 20, 30, 0.75)',
            backdropFilter: 'blur(20px)',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transform: `scale(${appear}) translateY(${interpolate(appear, [0, 1], [50, 0])}px)`,
            opacity: appear,
            boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            {/* MacOS Header Bar */}
            <div style={{
                height: 50,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#FF5F56', marginRight: 8 }} />
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#FFBD2E', marginRight: 8 }} />
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#27C93F' }} />
                <div style={{ flex: 1, textAlign: 'center', color: '#888', fontFamily: 'monospace', fontSize: 16 }}>
                    node ~/kannada-teacher/generate.js
                </div>
            </div>

            {/* Code Area */}
            <div style={{
                flex: 1,
                padding: 30,
                fontFamily: '"Fira Code", monospace',
                fontSize: 22,
                color: '#A6ACCD',
                position: 'relative',
            }}>
                {lines.map((line, idx) => {
                    const lineDelay = idx * 8;
                    const showLine = f > lineDelay;
                    return showLine ? (
                        <div key={idx} style={{
                            marginBottom: 10,
                            whiteSpace: 'pre',
                            color: line.includes('"') ? '#C3E88D' : line.includes('{') || line.includes('[') ? '#89DDFF' : '#A6ACCD'
                        }}>
                            {line}
                        </div>
                    ) : null;
                })}
            </div>
        </div>
    );
};
