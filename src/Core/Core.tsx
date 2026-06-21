import { handshakeStoryBoard } from "../Projects/04-HandShake/Storyboard-HandShake-04";
import { Core as CoreType } from "../Shared/Types/core";

export const Core: CoreType = [
  {
    storyBoard: handshakeStoryBoard,
    fullAudioDuration: 1000,
    fullVideoDuration: handshakeStoryBoard.reduce((acc, e) => acc + (e.durationInframes - (e.transitionDurationInFrames / 2)), 0 ) - handshakeStoryBoard.length
  }
]