import { interpolateColors, Sequence, useCurrentFrame } from "remotion"
import { NamedElement as Element, Show } from "../../Shared/Helpers/components"
import { styles04handshake as styles } from './styles-HandShake-04'
import { Assets } from "../../Shared/Constants/assets"
import { useUtil } from "../../Shared/Helpers/utils"
import { SceneryScene } from "../../Shared/Effects/SceneryScene"
import { Magi } from "../../Shared/Characters/Magi/Magi"
import { charData04 } from "./chardata-HandShake-04"
import { CSSProperties } from "react"

const { Voice4Handshake: Voice } = Assets

// --- Scene 1: RecapIntro ---
const RecapIntro = () => {
    const frame = useCurrentFrame();
    const { fade, zoom, move } = useUtil(frame)
    const animations = {
        magiWrapper: {
            ...styles.RecapIntro.magiWrapper,
            ...fade({
                frameFromTo: [0, 10],
                values: [0, 1]
            }),
            ...zoom({
                frameFromTo: [0, 1280, 1285],
                values: [1, 1, 5]
            }),
            ...move({
                bottom: {
                    frameFromTo: [0, 1280, 1285],
                    values: [10, 10, -85]
                },
                unit: '%'
            }),
            right: '29%'
        },
        appIcon: {
            ...styles.RecapIntro.appIcon,
            ...fade({
                frameFromTo: [338, 358, 400, 420],
                values: [0, 1, 1, 0]
            })
        },
        netflixIcon: {
            ...styles.RecapIntro.netFlixIcon,
            ...fade({
                frameFromTo: [526, 546, 688, 708],
                values: [0, 1, 1, 0]
            }),
            backgroundColor: interpolateColors(frame, [628, 638], ['#d33232', 'gray'],),
        },
        umsThumbnail: {
            ...styles.RecapIntro.lastVideo,
            ...fade({
                frameFromTo: [816, 836, 1030, 1050],
                values: [0, 0.5, 0.5, 0]
            })
        }
    } satisfies Record<string, CSSProperties>
    return (
        <Element.SceneWrapper style={styles.RecapIntro.wrapper}>
            <Sequence from={10} name='audio-section' >
                <Voice clip="1" />
            </Sequence>
            <SceneryScene videoBrightness={1} sceneryAsset="videos/4-1.mp4" blur={7} >
                <Element.SceneTitle style={styles.scene.title}>Recap & Intro</Element.SceneTitle>
                <Element.MagiWrapper style={animations.magiWrapper} >
                    <Magi {...charData04.RecapIntro} />
                </Element.MagiWrapper>
                <Show at={[{
                    from: 338,
                    to: 420
                }]}>
                    <Assets.AppIcon style={animations.appIcon} />
                </Show>
                <Show at={[{
                    from: 526,
                    to: 708
                }]}>
                    <Element.NetflixIcon style={animations.netflixIcon}>N</Element.NetflixIcon>
                </Show>
                <Show at={[{
                    from: 816,
                    to: 1050
                }]}>
                    <Assets.UmsThumbnail style={animations.umsThumbnail} />
                </Show>
            </SceneryScene>
        </Element.SceneWrapper>
    )
}

// --- Scene 2: The Engine ---
export const Scenes04Handshake = {
    RecapIntro
}
