import { CSSProperties, } from "react";
import { EasingFunction, interpolate, useCurrentFrame } from "remotion";

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

  const centerScreen: CSSProperties = {
    position: 'absolute',
    inset: 0,
    margin: 'auto',
    width: 'max-content',
    height: 'max-content'
  }

export const useUtil = (frame: number) => {
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
    return {
      opacity: `${animation({ frame, ...params })
        }`
    }
  }
  
  const zoom = (params: FrameValueMapper): CSSProperties => {
   return {
    scale: `${
      animation({frame, ...params})
    }`
   }
  }
  
  const rotate = (params: FrameValueMapper): CSSProperties => {
    return {
      rotate: `${
        animation({frame, ...params})
      }deg`
    }
  }
    
  const move = (params : {
    top?: FrameValueMapper;
    left?: FrameValueMapper;
    bottom?: FrameValueMapper;
    right?: FrameValueMapper;
    unit: string;
  }): CSSProperties => {
    const {top, left, bottom, right, unit} = params
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

  return { positionAbsolute, rotate, zoom, fade, animation, move}

}

export const utils = {
  positionAbsolute,
  centerScreen,
}

type FrameValueMapper = {
  frameFromTo: number[];
  values: number[];
}