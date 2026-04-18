import {CSSProperties} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import { Assets } from '../../../Constants/assets';

const BackDrop = () => {
	// Styles =============================================>
	const styles: {[key: string]: CSSProperties} = {
		mainContainer: {
			width: '100%',
			height: '100%',
			position: 'relative',
		},
		img: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			translate: '-50% -50%',
		},
	};
	// JS =============================================>
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 599], [0.5, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div style={styles.mainContainer}>
			<Assets.IntroBG />
			<Assets.IntroStars style={{...styles.img, transform: `scale(${scale})`}} />
		</div>
	);
};
export default BackDrop;
