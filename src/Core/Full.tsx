import React from 'react';
import {
	TransitionSeries,
	linearTiming,
} from '@remotion/transitions';
import { StoryBoardType } from '../Shared/Types/storyboard';
import { Core } from './Core';

const Videoconfig = Core[Core.length - 1]
const StoryBoard = Videoconfig.storyBoard
export const videoDuration = Videoconfig.fullVideoDuration
export const FullVideo = () => {
	return (
		<>
			<TransitionSeries>
				{(StoryBoard as StoryBoardType).map((item, index) => {
					return (
						<React.Fragment key={index}>
							<TransitionSeries.Sequence
								key={index}
								name={(index + 1) + ". " + item.name}
								durationInFrames={item.durationInframes}
							>
								{item.component}
							</TransitionSeries.Sequence>
							{item.transitionDurationInFrames && (
								<TransitionSeries.Transition
									key={index}
									presentation={item.transitionType}
									timing={linearTiming({
										durationInFrames: item.transitionDurationInFrames,
										easing: item.transitionEasing,
									})}
								/>
							)}
						</React.Fragment>
					);
				})}
			</TransitionSeries>
		</>
	);
};

