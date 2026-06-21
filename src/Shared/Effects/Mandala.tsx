import { CSSProperties, ReactNode } from "react";
import { Assets } from "../Constants/assets";
import { utils } from "../Helpers/utils";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
const { centerScreen } = utils
export const MandalaBackground = (props: MandalaBackgroundProps) => {
    const { svgNos,
        backgroundStyles = { backgroundColor: 'black' },
        children,
        name = "mandala-background",
        rotations = [1],
        mandalaStyles = [{}],
        direction = ['clockwise']
    } = props
    const frame = useCurrentFrame()
    const { durationInFrames } = useVideoConfig()
    return <div
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            ...backgroundStyles
        }}
        data-name={name}
    >
        {svgNos.map((svgNo, index) => <Assets.Mandala key={index} svgNo={svgNo}
            style={{
                ...centerScreen,
                rotate: `${{
                    clockwise: interpolate(frame, [0, durationInFrames], [0, 360 * rotations[index]]),
                    anticlockwise: (interpolate(frame, [0, durationInFrames], [0, 360 * rotations[index]])) * -1
                }[direction[index]]}deg`,
                ...mandalaStyles[index]
            }}
        />)}
        {children}
    </div>
}

type Direction = 'clockwise' | 'anticlockwise'
type MandalaBackgroundProps = {
    svgNos: number[];
    backgroundStyles?: CSSProperties;
    mandalaStyles?: CSSProperties[];
    direction?: Direction[];
    children?: ReactNode;
    name?: string;
    rotations?: number[];
}