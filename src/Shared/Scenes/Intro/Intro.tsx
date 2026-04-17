import { CSSProperties } from 'react';
import {
	Easing,
	InterpolateOptions,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import BackDrop from './Components/BackDrop';
import BackgroundCircle from './Components/BackgroundCircle';
import ForeDrop from './Components/ForeDrop';
import Typewriter from '../../Effects/Typewriter';
import { Assets } from '../../Constants/assets';


const Intro = (props: { title: string }) => {
	// Styles =============================================>
	const styles: { [key: string]: CSSProperties } = {
		introContainer: {
			width: '100%',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		backDrop: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: -1,
		},
		foreDrop: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			translate: '-50% -50%',
			zIndex: 4,
		},
		title: {
			position: 'absolute',
			top: '80%',
			left: '50%',
			zIndex: 5,
			translate: '-50% 0',
		},
		disclaimer:{
			position: 'absolute',
			bottom: '-250px',
			color: 'white',
			fontSize: '65px',
			opacity: 0.6,
			width: '100%',
			textAlign: 'center'
		}
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const interPolateOptions: InterpolateOptions = {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	};
	const opacity = interpolate(frame, [250, 310], [0, 1], interPolateOptions);
	const getInterpolateForEnding = (valueFromTo: [number, number]) => {
		return interpolate(frame, [540, 600], valueFromTo, interPolateOptions);
	};
	const foreDropScale = interpolate(frame, [500, 560], [1, 0], {
		...interPolateOptions,
		easing: Easing.inOut(Easing.ease),
	});
	return (
		<div
			style={{
				...styles.introContainer,
				opacity: `${getInterpolateForEnding([1, 0])}`,
				filter: `blur(${getInterpolateForEnding([0, 5])}px)`,
			}}
		>
			<div style={styles.backDrop}>
				<BackDrop />
			</div>
			<div style={{ ...styles.foreDrop, scale: `${foreDropScale}` }}>
				<ForeDrop />
			</div>
			<div style={{ scale: `${foreDropScale}` }}>
				<BackgroundCircle />
			</div>
			<div style={{ ...styles.title, opacity: `${opacity}` }}>
				<Typewriter text={props.title ? props.title : 'Title here'} fromToFrame={[250, 370]} />
			</div>
			<p style={{
				...styles.disclaimer,
				opacity: interpolate(frame, [0, 60, 240, 370], [0, 0.3, 0.3, 0], interPolateOptions),
			}} >This is not an AI generated video. Idea, Voice, design, animations, and code are all handcrafted with care ❤️</p>
			<Assets.IntroMusic trimAfter={600} />
		</div>
	);
};
export default Intro;
