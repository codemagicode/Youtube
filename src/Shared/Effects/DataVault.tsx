import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const DataVault: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const f = Math.max(0, frame - delay);

    // Animation values
    const vaultScale = spring({ fps, frame: f, config: { damping: 12 } });
    const doorOpenRotation = interpolate(f, [20, 45], [0, -110], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const glowOpacity = interpolate(f, [40, 60], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

    return (
        <div style={{
            position: 'relative',
            width: 400,
            height: 400,
            transform: `scale(${vaultScale})`,
            perspective: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {/* Glow Behind */}
            <div style={{
                position: 'absolute',
                width: 450,
                height: 450,
                background: 'radial-gradient(circle, rgba(0,255,170,0.6) 0%, rgba(0,0,0,0) 70%)',
                opacity: glowOpacity,
                filter: 'blur(40px)',
            }} />

            {/* Vault Body */}
            <div style={{
                position: 'absolute',
                width: 300,
                height: 300,
                backgroundColor: '#1a1a24',
                border: '8px solid #333',
                borderRadius: 40,
                boxShadow: 'inset 0px 0px 60px rgba(0,0,0,0.9), 0px 30px 60px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {/* Interior */}
                <div style={{
                    width: '80%', height: '80%', background: '#0a0a0f', borderRadius: 20,
                    boxShadow: 'inset 0 0 30px #00FFAA22',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Inner glowing core */}
                    <div style={{
                        width: 100, height: 100, borderRadius: '50%',
                        background: '#00FFAA', opacity: glowOpacity * 0.5,
                        filter: 'blur(20px)'
                    }} />
                </div>
            </div>

            {/* Vault Door */}
            <div style={{
                position: 'absolute',
                width: 300,
                height: 300,
                backgroundColor: '#2a2a35',
                border: '8px solid #444',
                borderRadius: 40,
                transformOrigin: 'left center',
                transform: `translateX(-150px) rotateY(${doorOpenRotation}deg) translateX(150px)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1), 10px 0px 30px rgba(0,0,0,0.5)'
            }}>
                {/* Handle Spoke */}
                <div style={{
                    width: 100, height: 100, border: '15px solid #555', borderRadius: '50%',
                    position: 'relative'
                }}>
                    <div style={{ position: 'absolute', width: 140, height: 15, background: '#555', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    <div style={{ position: 'absolute', width: 15, height: 140, background: '#555', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                </div>
            </div>
        </div>
    );
};
