import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type BouncingTextProps = {
  text: string;
  style?: React.CSSProperties;
};

export const BouncingText: React.FC<BouncingTextProps> = ({
  text,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Controls
  const bounceDuration = Math.floor(fps * 0.6); // duration of one bounce
  const letterDelay = Math.floor(fps * 0.12);   // delay between letters

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "flex-end",
        ...style,
      }}
    >
      {text.split("").map((char, index) => {
        // Offset each letter in time
        const localFrame =
          (frame - index * letterDelay) % bounceDuration;

        // Keep frame positive for modulo
        const f =
          localFrame < 0 ? localFrame + bounceDuration : localFrame;

        // Vertical jump
        const translateY = interpolate(
          f,
          [0, bounceDuration * 0.25, bounceDuration * 0.5, bounceDuration],
          [0, -20, 0, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        // Squash on landing
        const scaleY = interpolate(
          f,
          [
            0,
            bounceDuration * 0.4,
            bounceDuration * 0.55,
            bounceDuration,
          ],
          [1, 1, 0.85, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const scaleX = interpolate(
          f,
          [
            0,
            bounceDuration * 0.4,
            bounceDuration * 0.55,
            bounceDuration,
          ],
          [1, 1, 1.1, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <span
            key={index}
            style={{
              display: "inline-block",
              transform: `
                translateY(${translateY}px)
                scaleX(${scaleX})
                scaleY(${scaleY})
              `,
              transformOrigin: "bottom center",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};
