import { TransitionPresentation } from "@remotion/transitions";
import { FadeProps } from "@remotion/transitions/fade";
import { FlipProps } from "@remotion/transitions/flip";
import { IrisProps } from "@remotion/transitions/iris";
import { SlideProps } from "@remotion/transitions/slide";
import { WipeProps } from "@remotion/transitions/wipe";

/** Wrapper type for all animation props */
export type AnimationProps = FadeProps | WipeProps | FlipProps | SlideProps | IrisProps;

/** Defines what the Storyboard should contain */
export type StoryBoardObject = {
  component: JSX.Element;
  composition: (props?: any) => JSX.Element;
  name: string;
  durationInframes: number;
  transitionDurationInFrames: number;
  transitionEasing: (t: number) => number;
  transitionType: TransitionPresentation<AnimationProps>;
}

/** Storyboard registers all the scenes and scene configuration within the project */
export type StoryBoardType = StoryBoardObject[];
