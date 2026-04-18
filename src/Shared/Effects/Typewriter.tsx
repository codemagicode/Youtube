import { CSSProperties } from 'react';
import {
	interpolate,
	useCurrentFrame,
	InterpolateOptions,
} from 'remotion';

const Typewriter = (typeWriterProps: TypeWriterProps) => {
	const {
		text,
		fromToFrame,
		exitFromToFrame,
		exitMode = 'from-end',
		styles
	} = typeWriterProps;

	// Styles =============================================>
	const containerStyle: CSSProperties = {
		width: '100%',
		height: '100%',
		color: 'white',
		fontSize: '80px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Montserrat',
		...styles
	};

	// JS =============================================>
	const frame = useCurrentFrame();
	const interpolateOptions: InterpolateOptions = {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	};

	// 1. Entry Progress (0 to text.length)
	const entryIndex = Math.floor(
		interpolate(frame, fromToFrame, [0, text.length], interpolateOptions)
	);

	// 2. Exit Progress (0 to text.length)
	const exitIndex = exitFromToFrame
		? Math.floor(interpolate(frame, exitFromToFrame, [0, text.length], interpolateOptions))
		: 0;

	// Boundaries
	const leftBound = exitMode === 'from-start' ? exitIndex : 0;
	const rightBound = exitMode === 'from-end' ? (entryIndex - exitIndex) : entryIndex;

	const typeWriterText = text.slice(leftBound, Math.max(leftBound, rightBound));

	return <div style={containerStyle}>{typeWriterText}</div>;
};

export default Typewriter;

export type TypeWriterProps = {
	text: string;
	fromToFrame: [number, number];
	exitFromToFrame?: [number, number];
	exitMode?: 'from-start' | 'from-end';
	styles?: CSSProperties
};
