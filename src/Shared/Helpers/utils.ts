import { CSSProperties } from "react";
import { EasingFunction, interpolate, useCurrentFrame } from "remotion";

const animation = (
  params: {
    frame: number,
    easing?: EasingFunction
  } & FrameValueMapper,
) =>
  interpolate(params.frame, params.frameFromTo, params.values, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: params.easing,
  });

const fade = (params: FrameValueMapper): CSSProperties => {
  const frame = useCurrentFrame();
  return {
    opacity: `${animation({ frame, ...params })
      }`
  }
}

const zoom = (params: FrameValueMapper): CSSProperties => {
  const frame = useCurrentFrame();
 return {
  scale: `${
    animation({frame, ...params})
  }`
 }
}

const positionAbsolute = (
  top?: number | string,
  left?: number | string,
  bottom?: number | string,
  right?: number | string
): CSSProperties => ({
  position: 'absolute',
  ...(top !== undefined && { top }),
  ...(left !== undefined && { left }),
  ...(bottom !== undefined && { bottom }),
  ...(right !== undefined && { right }),
});


const move = (params : {
  top?: FrameValueMapper;
  left?: FrameValueMapper;
  bottom?: FrameValueMapper;
  right?: FrameValueMapper;
  unit: string;
}): CSSProperties => {
  const {top, left, bottom, right, unit} = params
  const frame = useCurrentFrame();
  const animationWrapper = (param: FrameValueMapper) => {
    const {frameFromTo, values} = param
    return animation({
      frame,
      frameFromTo, 
      values
    })
  }
  return {
    position: 'absolute',
    ...(top !== undefined && { top: `${animationWrapper(top)}${unit}`}),
    ...(left !== undefined && { left: `${animationWrapper(left)}${unit}`}),
    ...(bottom !== undefined && { bottom: `${animationWrapper(bottom)}${unit}`}),
    ...(right !== undefined && { right: `${animationWrapper(right)}${unit}`}),
  }
}

export const utils = {
  animation,
  fade,
  zoom,
  positionAbsolute,
  absoluteAnimation: move
}

type FrameValueMapper = {
  frameFromTo: number[];
  values: number[];
}