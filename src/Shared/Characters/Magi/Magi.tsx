import { createContext, CSSProperties, useContext, useMemo, useState } from "react";
import { Easing, EasingFunction, Img, interpolate, staticFile, useCurrentFrame, InterpolateOptions } from "remotion";

/** Context to keep a centralized store of data passed from main exported component */
const MagiContext = createContext<MagiProps & InternalConfig>(null as unknown as MagiProps & InternalConfig)

/** Hook to extract data from centralized store */
const useAnimationConfig = (): MagiProps & InternalConfig => {
    const context = useContext<MagiProps & InternalConfig>(MagiContext);
    if (!context) {
        throw new Error('Animation config can not be used here')
    }
    return context;
}

/** ## Magi Mascot <br />
 * Magi is the main speaker of Youtube channel CodeMagi, 
 * as a cartoon character, he is animated in puppet animation style.
* - Component refers to the layout of the complete mascot figure
 * - Component takes animation data based on current frame and animates the required config
 * - Animation config involves giving data for:
 *      - mouth
 *      - hands
 *      - legs
 *      - eyes
 *      - head
 *      - eyebrows
 * @param {MagiProps} props
 * @returns Magi Mascot
 */
export const Magi = (props: MagiProps) => {
    // variables
    const frame = useCurrentFrame()
    const animation = (params: {
        frame: number,
        frameFromTo: number[],
        values: number[],
        easing?: EasingFunction
    }) =>
        interpolate(
            params.frame,
            params.frameFromTo,
            params.values,
            {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
                easing: params.easing
            })

    // animation helpers
    const animations = {
        breathe: animation({
            frame: frame % 120,
            frameFromTo: [0, 30, 60, 90, 120],
            values: [0, 10, 10, 0, 0],
            easing: Easing.in(Easing.ease)
        }),
        shoulder: () => {
            const { shoulders } = props
            if (!shoulders) return { left: 372.1, right: 372.1 }
            const { left: leftRecieved, right: rightRecieved } = shoulders
            const rightFrame = [], leftFrame = [], rightValue = [], leftValue = []
            for (let i = 0; i < Math.max(leftRecieved.length, rightRecieved.length); i++) {
                if (i < rightRecieved.length) {
                    rightFrame.push(rightRecieved[i].frame)
                    rightValue.push(rightRecieved[i].top)
                }
                if (i < leftRecieved.length) {
                    leftFrame.push(leftRecieved[i].frame)
                    leftValue.push(leftRecieved[i].top)
                }
            }
            let left = 372.1
            let right = 372.1
            if (leftFrame.length > 0) {
                left = 372.1 - clampedPostive(animation({
                    frame,
                    frameFromTo: leftFrame,
                    values: leftValue,
                }))
            }
            if (rightFrame.length > 0) {
                right = 372.1 - clampedPostive(animation({
                    frame,
                    frameFromTo: rightFrame,
                    values: rightValue,
                }))
            }
            return { left, right }
        }
    } satisfies Record<string, number | (() => { left: number, right: number })>

    // styles
    const styles = {
        container: {
            width: '1350px',
            height: '1270px',
            position: 'relative',
            backgroundColor: 'transparent',
            paddingTop: '10px'
        },
        position: {
            position: 'absolute',
            inset: '0',
            marginInline: 'auto'
        },
        topBodyWrapper: {
            translate: `0 ${animations.breathe}px`
        },
        head: {
            left: '-4%',
            width: 'max-content',
            height: 'max-content',
            transformOrigin: '65% bottom',
        },
        body: {
            top: 300
        },
        shoulder: {
            marginInline: 'unset'
        },
        leftShoulder: {
            top: `${animations.shoulder().left}px`,
            left: '38%'
        },
        rightShoulder: {
            top: `${animations.shoulder().right}px`,
            left: '54%'
        },
        leg: {
            top: '740px',
            marginInline: 'unset'
        },
        leftLeg: {
            left: '42.3%'
        },
        rightLeg: {
            left: '50.4%'
        }
    } satisfies NestedStyleType
    return (
        <MagiContext.Provider value={{ ...props, frame }} >
            <div style={styles.container} data-element="magi-wrapper" >
                <Shadow />
                <div data-element="top-body-wrapper" style={styles.topBodyWrapper} >
                    <Joints
                        jointName="left-hand"
                        style={{ ...styles.position, ...styles.shoulder, ...styles.leftShoulder }}
                    />
                </div>
                <Joints
                    jointName="left-leg"
                    style={{ ...styles.position, ...styles.leg, ...styles.leftLeg }}
                />
                <div data-element="top-body-wrapper" style={styles.topBodyWrapper} >
                    <Body style={{ ...styles.position, ...styles.body }} />
                    <Head style={{ ...styles.position, ...styles.head }} />
                </div>
                <Joints
                    jointName="right-leg"
                    style={{ ...styles.position, ...styles.leg, ...styles.rightLeg }}
                />
                <div data-element="top-body-wrapper" style={styles.topBodyWrapper} >
                    <Joints
                        jointName="right-hand"
                        style={{ ...styles.position, ...styles.shoulder, ...styles.rightShoulder }}
                    />
                </div>
            </div>
        </MagiContext.Provider>
    );
};

/** Head component contains mouth, eyes and eybrows, with these face is configured */
const Head = (props: CommonProps) => {
    const { style } = props
    const { frame, head } = useAnimationConfig()
    const arrayMap = useMemo(() => {
        const rotate = [] as number[], frames = [] as number[];
        if (!head.length) {
            return { rotate, frames }
        }
        for (const config of head) {
            rotate.push(config.rotation);
            frames.push(config.frame);
        }
        return { rotate, frames }
    }, [head])
    const rotation = interpolate(frame, arrayMap.frames, arrayMap.rotate, clampEnds())
    const styles = {
        relative: {
            width: '100%',
            height: '100%',
            position: 'relative',
        },

    } satisfies NestedStyleType
    return <div
        style={{
            ...style,
            rotate: `${rotation}deg`,
        }}
        data-element="head-container"
    >
        <div
            style={styles.relative}
            data-element="head-wrapper"
        >
            <Img src={staticFile('mascots/magi/head-base.svg')} data-element="Head" />
            <Eyes />
            <EyeBrows />
            <Mouth />
        </div>
    </div>
}

/** Individual component to manage eye movements */
const Eyes = (props: CommonProps) => {
    const { style } = props;
    const { eyes, frame, eyeType = [{ type: 'normal', isEnabled: [0, 0] }] } = useAnimationConfig()
    const frameMap = useMemo(() => eyes.map(c => c.frame), [eyes])
    const mapFor = (key: keyof EyeMovements) => eyes.map(c => clamped(c[key]))
    const topLogical = frameMap.length ? interpolate(frame, frameMap, mapFor('y'), clampEnds()) : 0
    const leftLogical = frameMap.length ? interpolate(frame, frameMap, mapFor('x'), clampEnds()) : 0
    const yCssRange = [57, 53, 48]
    const xCssRange = [21, 27, 32]
    const logicalRange = [-100, 0, 100]
    const top = interpolate(topLogical, logicalRange, yCssRange)
    const left = interpolate(leftLogical, logicalRange, xCssRange)
    const styles = {
        container: {
        },
        glasses: {
            position: 'absolute',
            top: '50%', left: '20%',
            zIndex: 2
        },
        eyes: {
            position: 'absolute',
            top: `${top}%`, left: `${left}%`,
            zIndex: 1
        },
        eyesClosed: {
            position: 'absolute',
            top: '56%', left: '23%',
            zIndex: 1
        }
    } satisfies NestedStyleType
    const activeEyeConfig = eyeType.find(
        (config) => config.isEnabled[0] <= frame && frame <= config.isEnabled[1]
    );
    const isBlinking = frame % 120 >= 110;
    const currentEyeType = activeEyeConfig ? activeEyeConfig.type : (isBlinking ? 'close' : 'normal');

    return (
        <div style={{ ...styles.container, ...style }} >
            {currentEyeType === 'normal' && <Img src={staticFile('mascots/magi/eye-normal.svg')} style={styles.eyes} />}
            {currentEyeType === 'close' && <Img src={staticFile('mascots/magi/eye-close.svg')} style={styles.eyesClosed} />}
            {currentEyeType === 'funky' && <Img src={staticFile('mascots/magi/eye-funky.svg')} style={styles.eyes} />}
            <Img src={staticFile('mascots/magi/glasses.svg')} style={styles.glasses} />
        </div>
    );
}

/** Individual component to manage eyebrows */
const EyeBrows = () => {
    const { eyeBrows: { left, right }, frame } = useAnimationConfig();

    const getUseMemoFor = (configAR: EyeBrowConfig[]) => {
        return useMemo(() => {
            if (!configAR.length) {
                return {
                    x: [],
                    y: [],
                    rotation: [],
                    frame: [],
                }
            }
            const x = [] as number[];
            const y = [] as number[];
            const rotation = [] as number[];
            const frame = [] as number[];
            for (let config of configAR) {
                x.push(config.x);
                y.push(config.y);
                rotation.push(config.rotation);
                frame.push(config.frame);
            }
            return { x, y, rotation, frame }
        }, [configAR])
    }

    const leftMap = getUseMemoFor(left)
    const rightMap = getUseMemoFor(right)

    const interpolationOf = {
        left: {
            x: interpolate(frame, leftMap.frame, leftMap.x, clampEnds()),
            y: interpolate(frame, leftMap.frame, leftMap.y, clampEnds()),
            rotation: interpolate(frame, leftMap.frame, leftMap.rotation, clampEnds()),
        },
        right: {
            x: interpolate(frame, rightMap.frame, rightMap.x, clampEnds()),
            y: interpolate(frame, rightMap.frame, rightMap.y, clampEnds()),
            rotation: interpolate(frame, rightMap.frame, rightMap.rotation, clampEnds()),
        },
    }

    const logicalToCss = (
        type: keyof Pick<EyeBrowConfig, 'x' | 'y'>,
        element: 'right' | 'left', logicalNum: number
    ) => {
        const switchCase = {
            left: {
                x: [23, 19, 15],
                y: [48, 44, 34]
            },
            right: {
                x: [45, 48, 53],
                y: [48, 44, 34]
            }
        }
        const cssRange = switchCase[element][type]
        return interpolate(clamped(logicalNum), [-100, 0, 100], cssRange)
    }

    const rightCss = {
        x: logicalToCss('x', 'right', interpolationOf.right.x),
        y: logicalToCss('y', 'right', interpolationOf.right.y),
        rotation: interpolationOf.right.rotation
    }
    const leftCss = {
        x: logicalToCss('x', 'left', interpolationOf.left.x),
        y: logicalToCss('y', 'left', interpolationOf.left.y),
        rotation: interpolationOf.left.rotation
    }
    const styles = {
        brow: {
            position: 'absolute',
        },
        right: {
            top: `${rightCss.y}%`,
            left: `${rightCss.x}%`,
            rotate: `${rightCss.rotation}deg`
        },
        left: {
            top: `${leftCss.y}%`,
            left: `${leftCss.x}%`,
            rotate: `${leftCss.rotation}deg`
        },
    } satisfies NestedStyleType
    return <div>
        <Img src={staticFile('mascots/magi/eyebrow.svg')} style={{ ...styles.brow, ...styles.right }} />
        <Img src={staticFile('mascots/magi/eyebrow.svg')} style={{ ...styles.brow, ...styles.left }} />
    </div>
}

/** Individual component to manage mouth */
const Mouth = () => {
    const { mouth, frame } = useAnimationConfig()
    const getTypeFromViseme = (viseme: VisemeType) => {
        let filename = ''
        switch (viseme) {
            case 'a': filename = 'a-aa-ah'; break;
            case 'ch': filename = 'ch-j'; break;
            case 'f': filename = 'f-v'; break;
            case 'ii': filename = 'e-ii'; break;
            case 'smile': filename = 'smile'; break;
            case 'm': filename = 'm-b-p'; break;
            case 'n': filename = 'n-s-t'; break;
            case 'o': filename = 'o'; break;
            case 'uu': filename = 'u-oo'; break;
            default: filename = 'smile'
        }
        return filename
    }
    const currentViseme =
        mouth
            .filter(m => m.frame <= frame)
            .sort((a, b) => b.frame - a.frame)[0]?.viseme ?? 'smile';

    const type = getTypeFromViseme(currentViseme);
    const styles = {
        container: {
            position: 'absolute',
            top: '74%', left: '30%',
            width: '89px',
            height: '59px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    } satisfies NestedStyleType
    return <div style={styles.container} >
        <Img src={staticFile(`mascots/magi/mouth-${type}.svg`)} />
    </div>
}

/** Individual static component */
const Body = (props: CommonProps) => {
    const { style } = props
    return <>
        <Img src={staticFile('mascots/magi/body-base.svg')} style={style} data-element="Body" />
    </>
}

/** Multi organ component, handles hands and legs as 2 joints */
const Joints = (props: CommonProps & {
    jointName: 'left-leg' | 'right-leg' | 'left-hand' | 'right-hand',
}) => {
    const { jointName, style } = props
    const [imgName,] = useState(() => {
        let upperJoint, lowerJoint;
        if (jointName.includes('leg')) {
            upperJoint = 'thigh'
            lowerJoint = 'feet'
        }
        if (jointName.includes('hand')) {
            upperJoint = 'shoulder',
                lowerJoint = 'arms'
        }
        return { upperJoint, lowerJoint }
    })

    const { frame,
        leftHand,
        rightHand,
        leftLeg,
        rightLeg
    } = useAnimationConfig()

    const getUsememo = (array: JointConfig[]) => {
        return useMemo(() => {
            const degree = [] as number[], frames = [] as number[];
            if (!array.length) {
                return { degree, frames }
            }

            for (const config of array) {
                degree.push(config.degree)
                frames.push(config.frame)
            }

            return { degree, frames }

        }, [array])
    }

    const jointArrayMap = (upper: JointConfig[], lower: JointConfig[]) => {
        return { upper: getUsememo(upper), lower: getUsememo(lower) }
    }

    const interpolateMap = (array1: JointConfig[], array2: JointConfig[], side: 'upper' | 'lower') => {
        if (array1.length == 0 || array2.length == 0) {
            return 0
        }
        return interpolate(
            frame,
            jointArrayMap(
                array1, array2
            )[side].frames,
            jointArrayMap(
                array1, array2
            )[side].degree,
            clampEnds()
        )
    }

    const interpolator = {
        'left-hand': {
            upper: interpolateMap(leftHand.shoulder, leftHand.arms, "upper"),
            lower: interpolateMap(leftHand.shoulder, leftHand.arms, "lower"),
        },
        'left-leg': {
            upper: interpolateMap(leftLeg.thighs, leftLeg.feet, "upper"),
            lower: interpolateMap(leftLeg.thighs, leftLeg.feet, "lower")
        },
        'right-hand': {
            upper: interpolateMap(rightHand.shoulder, rightHand.arms, "upper"),
            lower: interpolateMap(rightHand.shoulder, rightHand.arms, "lower")
        },
        'right-leg': {
            upper: interpolateMap(rightLeg.thighs, rightLeg.feet, "upper"),
            lower: interpolateMap(rightLeg.thighs, rightLeg.feet, "lower")
        }
    } as Record<typeof jointName, { upper: number, lower: number }>

    const styles = {
        container: {
            width: '100px',
            height: '100px',
            rotate: `${interpolator[jointName].upper}deg`,
            display: 'flex',
            flexDirection: 'column',
        },
        lowerJoint: {
            width: '100%',
            height: '60px',
            rotate: `${interpolator[jointName].lower}deg`
        },
        lowerJointWrapperHand: {
            marginTop: '-50%',
            marginLeft: '5%'
        },
        lowerJointWrapperLeg: {
            marginTop: '-70%'
        },
        lowerJointlegImage: {
            marginLeft: '-40px'
        }
    } satisfies NestedStyleType
    return <div style={{ ...style, ...styles.container }} data-element={`${jointName}-wrapper`} >
        <Img
            src={staticFile(`mascots/magi/${imgName.upperJoint}.svg`)}
            data-element={`${jointName}-${imgName.upperJoint}`}
        />
        <div style={jointName.includes('hand')
            ? { ...styles.lowerJoint, ...styles.lowerJointWrapperHand }
            : { ...styles.lowerJoint, ...styles.lowerJointWrapperLeg }
        }
            data-element={`lower-${jointName}-wrapper`}
        >
            <Img
                src={staticFile(`mascots/magi/${imgName.lowerJoint}.svg`)}
                data-element={`${jointName}-${imgName.lowerJoint}`}
                style={jointName.includes('leg') ? styles.lowerJointlegImage : undefined}
            />
        </div>
    </div>
}

const Shadow = () => {
    return <div style={{
        width: '500px',
        height: '50px',
        backgroundColor: 'black',
        zIndex: 0,
        borderRadius: '50%',
        position: 'absolute',
        top: '97%',
        left: '32%',
        boxShadow: '0 0 50px 40px rgba(0, 0, 0, 1)',
        opacity: 0.3
    }} ></div>
}

//===================================
// TYPES
//===================================

/** Type for creating named css styles */
type NestedStyleType = Record<string, CSSProperties>
/** Default props that can be passed to all components from main component */
type CommonProps = {
    /** Image level styles */
    style?: CSSProperties
}

/** Configuration type for moving eyes */
type EyeMovements = {
    /** horizontal direction of eye movement; values: -100 to 100, where -100 is far left and 100 is far right  */
    x: number;
    /** vertical direction of eye movement; values: -100 to 100, where -100 is far bottom and 100 is far top */
    y: number;
    /** frame at which the animation should start */
    frame: number;
}
/** Configuration for type of eye */
type EyeType = 'close' | 'blink' | 'normal' | 'funky';
type EyeTypeConfig = { type: EyeType, isEnabled: [number, number] }
/** Configuration type for moving eyebrow */
type EyeBrowConfig = {
    /** horizontal direction of eye movement; values: -100 to 100, where -100 is far left and 100 is far right  */
    x: number;
    /** vertical direction of eye movement; values: -100 to 100, where -100 is far bottom and 100 is far top */
    y: number;
    /** rotation in degrees to rotate eyebrows for expression */
    rotation: number;
    /** frame at which the animation should start */
    frame: number
}
/** Configuration passed to main component for eyebrow movements */
type EyeBrowsType = {
    left: EyeBrowConfig[];
    right: EyeBrowConfig[];
}
/** Configuration passed to main component for head rotation */
type HeadMovements = {
    rotation: number;
    frame: number;
}

/** Configuration for each joint */
type JointConfig = {
    degree: number;
    frame: number;
}
/** Parts of hands */
type HandType = {
    shoulder: JointConfig[];
    arms: JointConfig[];
}
/** Parts of legs */
type LegType = {
    thighs: JointConfig[];
    feet: JointConfig[];
}
/** Configuration for left hand */
type LeftHand = HandType;
/** Configuration for right hand */
type RightHand = HandType;
/** Configuration for left leg */
type LeftLeg = LegType;
/** Configuration for right leg */
type RightLeg = LegType;
/** Types of mouth */
type VisemeType = 'a' | 'ch' | 'ii' | 'f' | 'm' | 'n' | 'o' | 'uu' | 'smile'
/** Props to control mouth */
type MouthConfig = {
    viseme: VisemeType;
    frame: number;
}
/** Shoulder joint */
type ShoulderJoint = {
    top: number;
    frame: number;
}
/** Shoulder config to move shoulders */
type ShoulderConfig = {
    left: ShoulderJoint[];
    right: ShoulderJoint[];
}
/** Props type for main component */
type MagiProps = {
    mouth: MouthConfig[];
    eyeBrows: EyeBrowsType;
    eyes: EyeMovements[];
    head: HeadMovements[];
    leftHand: LeftHand;
    rightHand: RightHand;
    leftLeg: LeftLeg;
    rightLeg: RightLeg;
    shoulders?: ShoulderConfig;
    eyeType?: EyeTypeConfig[];
}
/** Internal props type, should not be exposed outside */
type InternalConfig = {
    frame: number;
}

type Legs = {
    rightLeg: LegType;
    leftLeg: LegType;
}

type Hands = {
    rightHand: HandType;
    leftHand: HandType;
}

/** consolidated types for magi mascot */
export type MagiTypes = {
    MagiProps: MagiProps;
    VisemeType: VisemeType;
    MouthConfig: MouthConfig;
    RightLeg: LegType;
    RightHand: HandType;
    LeftLeg: LegType;
    LeftHand: HandType;
    HandType: HandType;
    LegType: LegType;
    JointConfig: JointConfig;
    HeadMovements: HeadMovements;
    EyeBrowsType: EyeBrowsType;
    EyeBrowConfig: EyeBrowConfig;
    EyeMovements: EyeMovements;
    ShoulderConfig: ShoulderConfig;
    ShoulderJoint: ShoulderJoint;
    Legs: Legs;
    Hands: Hands;
}

//===================================
// HELPERS
//===================================

function clamped(logicalNum: number) {
    return Math.max(-100, Math.min(100, logicalNum));
}

function clampedPostive(logicalNum: number) {
    if (logicalNum < 0) return 0;
    return Math.min(100, logicalNum);
}

function clampEnds() {
    return {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp'
    } as InterpolateOptions
}