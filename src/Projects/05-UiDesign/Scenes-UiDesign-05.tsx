import { useCurrentFrame } from "remotion"
import { Magi } from "../../Shared/Characters/Magi/Magi"
import { Assets } from "../../Shared/Constants/assets"
import { MandalaBackground } from "../../Shared/Effects/Mandala"
import { NamedElement as E, Show } from "../../Shared/Helpers/components"
import { useUtil } from "../../Shared/Helpers/utils"
import { Styles } from "../../Shared/Types/styles"
import { charData05 } from "./chardata-UiDesign-05"
import { styles05UiDesign as styles } from "./styles-UiDesign-05"

const { Voice5UiDesign: Voice } = Assets
const Intro = () => {
    const frame = useCurrentFrame()
    const { animation } = useUtil(frame)
    const animations = {
        rainBowWrapper: {
            ...styles.Intro.rainBowWrapper,
            width: `${animation({ frame, frameFromTo: [600, 635], values: [0, 1290] })}px`,
            opacity: `${animation({ frame, frameFromTo: [650, 675], values: [1, 0] })}`
        },
        rainBow: {
            ...styles.Intro.rainBow,
            left: `${animation({ frame, frameFromTo: [600, 635], values: [-(1290 / 2), 0] })}px`
        },
        coffee: {
            ...styles.Intro.coffee,
            opacity: `${animation({ frame, frameFromTo: [2070, 2080, 2140, 2150], values: [0, 1, 1, 0] })}`
        }
    } satisfies Styles

    return (
        <E.IntroSceneStart style={styles.Intro.container}>
            <MandalaBackground
                svgNos={[1, 1]}
                backgroundStyles={styles.Intro.mandalaBackgroundStyles}
                rotations={[0.7, 1.5]}
                mandalaStyles={[styles.Intro.mandalaBG, styles.Intro.mandalaFg]}
                direction={["anticlockwise", "clockwise"]}
            >
                <Voice clip="1" />
                <Show at={[{ from: 600, to: 675 }]}>
                    <E.RainBowWrapper style={animations.rainBowWrapper}>
                        <Assets.RainBow style={animations.rainBow} />
                    </E.RainBowWrapper>
                </Show>
                <E.MagiWrapper style={styles.Intro.magiWrapper}>
                    <Magi {...charData05.Intro} />
                </E.MagiWrapper>
                <Show at={[{ from: 2070, to: 2150 }]}>
                    <Assets.Coffee style={animations.coffee} />
                </Show>
            </MandalaBackground>
        </E.IntroSceneStart>
    )
}

export const Scenes05UiDesign = {
    Intro
}