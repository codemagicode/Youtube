import { BGMusicProps } from "./audio";
import { StoryBoardType } from "./storyboard";

/**
 * Type for Project registry and its configs
 */
export type Core = {
  storyBoard: StoryBoardType;
  bgMusic?: (props: BGMusicProps) => JSX.Element;
  fullAudio?: () => JSX.Element;
  fullAudioDuration: number;
  fullVideoDuration: number;
}[]