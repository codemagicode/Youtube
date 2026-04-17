import React from 'react';
import { AbsoluteFill, Html5Video as Video, staticFile } from 'remotion';
import { GlassPane } from './GlassPane';

interface ScenerySceneProps {
  children: React.ReactNode;
  sceneryAsset: string; // e.g., 'sceneries/blue-ocean.mp4'
  isImage?: boolean;
  margin?: number;
  blur?: number;
  videoBrightness?: number;
}

export const SceneryScene: React.FC<ScenerySceneProps> = ({
  children,
  sceneryAsset,
  isImage = false,
  margin = 50,
  blur = 50,
  videoBrightness = 0.7
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000' }}>
      {/* Background Scenery */}
      <AbsoluteFill>
        {isImage ? (
          <img
            src={staticFile(sceneryAsset)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              filter: 'brightness(0.7) contrast(1.1)',
            }}
            alt="scenery"
          />
        ) : (
          <Video
            src={staticFile(sceneryAsset)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
              filter: `brightness(${videoBrightness}) contrast(1.1)`,
            }}
            loop
            muted
          />
        )}
      </AbsoluteFill>

      {/* Glass Pane Wrapper */}
      <div
        style={{
          position: 'absolute',
          top: margin,
          left: margin,
          right: margin,
          bottom: margin,
        }}
      >
        <GlassPane blur={blur} >
          {children}
        </GlassPane>
      </div>
    </AbsoluteFill>
  );
};
