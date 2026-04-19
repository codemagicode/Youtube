import { interpolateColors, Sequence, useCurrentFrame } from "remotion"
import { NamedElement as Element, Show } from "../../Shared/Helpers/components"
import { styles04handshake as styles } from './styles-HandShake-04'
import { Assets } from "../../Shared/Constants/assets"
import { useUtil } from "../../Shared/Helpers/utils"
import { SceneryScene } from "../../Shared/Effects/SceneryScene"
import { Magi } from "../../Shared/Characters/Magi/Magi"
import { charData04 } from "./chardata-HandShake-04"
import { CSSProperties } from "react"
import { MetallicText } from "../../Shared/Effects/MetallicText"
import { FloatingAsset } from "../../Shared/Effects/FloatingAsset"
import { BouncingText } from "../../Shared/Effects/BouncingText"
import { Oscillator } from "../../Shared/Effects/Oscillator"
import { CameraShake } from "../../Shared/Effects/CameraShake"
import Typewriter from "../../Shared/Effects/Typewriter"

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
const TheEngine = () => {
    const frame = useCurrentFrame();
    const { fade } = useUtil(frame)
    const animations = {
        sceneWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        magiWrapper: {
            ...styles.magi.center,
        },
        metalText: {
            ...styles.TheEngine.metalText,
            ...fade({
                frameFromTo: [90, 110, 250, 270],
                values: [0, 1, 1, 0]
            })
        },
        politicianIconWrapper: {
            ...styles.TheEngine.icon,
            ...styles.TheEngine.politicianIcon,
        },
        politicianIcon: {
            ...styles.TheEngine.iconSize,
            ...fade({
                frameFromTo: [468, 480],
                values: [0, 1]
            })
        },
        jsFrameworkIconWrapper: {
            ...styles.TheEngine.icon,
            ...styles.TheEngine.jsFrameworkIcon,
        },
        jsFrameworkIcon: {
            ...styles.TheEngine.iconSize,
            ...fade({
                frameFromTo: [548, 568],
                values: [0, 1]
            })
        },
        bouncingText: {
            ...styles.TheEngine.bouncingText,
            ...fade({
                frameFromTo: [648, 668],
                values: [0, 1]
            })
        }
    } satisfies Record<string, CSSProperties>

    return (
        <Element.SceneTheEngine style={styles.base.container}>
            <Element.SceneWrapper style={animations.sceneWrapper}>
                <Sequence from={30} name='audio-section' >
                    <Voice clip="2" />
                </Sequence>
                <SceneryScene videoBrightness={1} sceneryAsset="videos/4-2.mp4" >
                    <Element.SceneTitle style={styles.scene.title}>The Engine</Element.SceneTitle>
                    <Element.MagiWrapper style={animations.magiWrapper} >
                        <Magi {...charData04.TheEngine} />
                    </Element.MagiWrapper>

                    <Show at={[{ from: 90, to: 270 }]}>
                        <Element.MetalTextWrapper style={animations.metalText}>
                            <MetallicText text='THE ENGINE' />
                        </Element.MetalTextWrapper>
                    </Show>

                    <Show at={[{ from: 468 }]}>
                        <Element.PoliticianIconWrapper style={animations.politicianIconWrapper}>
                            <FloatingAsset magnitude={60} speed={2} >
                                <Assets.Politician style={animations.politicianIcon} />
                            </FloatingAsset>
                        </Element.PoliticianIconWrapper>
                    </Show>

                    <Show at={[{ from: 548 }]}>
                        <Element.JsFrameworkIconWrapper style={animations.jsFrameworkIconWrapper}>
                            <FloatingAsset magnitude={60} speed={2} >
                                <Assets.JsFramework style={animations.jsFrameworkIcon} />
                            </FloatingAsset>
                        </Element.JsFrameworkIconWrapper>
                    </Show>

                    <Show at={[{ from: 648 }]}>
                        <BouncingText text='2024' style={animations.bouncingText} />
                    </Show>
                </SceneryScene>
            </Element.SceneWrapper>
        </Element.SceneTheEngine>
    )
}

// --- Scene 3: Fetching Strategy ---
const FetchingStrategy = () => {
    const frame = useCurrentFrame();
    const { fade, zoom, move } = useUtil(frame)
    const animations = {
        sceneWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        magiWrapper: {
            ...styles.magi.absolute,
            ...move({
                top: {
                    frameFromTo: [0, 30, 320, 321, 440, 441],
                    values: [-60, 20, 20, 120, 120, 40]
                },
                left: {
                    frameFromTo: [0, 440, 441],
                    values: [32, 32, 65]
                },
                unit: '%'
            }),
            ...zoom({
                frameFromTo: [320, 321, 440, 441],
                values: [1, 5, 5, 1]
            }),
        },
        dataText: {
            ...styles.FetchingStrategy.dataTextWrapper,
            ...fade({
                frameFromTo: [130, 150],
                values: [1, 0]
            })
        },
        databaseIcon: {
            ...styles.FetchingStrategy.databaseIcon,
            ...zoom({
                frameFromTo: [250, 260, 345, 365],
                values: [0, 1, 1, 0]
            }),
            ...fade({
                frameFromTo: [345, 365],
                values: [1, 0]
            })
        },
        databaseAsset: {
            width: '100%'
        },
        moneyChair: {
            ...styles.FetchingStrategy.moneyChair,
        },
        githubIcon: {
            ...styles.FetchingStrategy.logoIcon,
            ...move({
                left: {
                    frameFromTo: [728, 738],
                    values: [50, 30]
                },
                unit: '%'
            }),
            ...fade({
                frameFromTo: [616, 621, 871, 876],
                values: [0, 1, 1, 0]
            }),
            ...zoom({
                frameFromTo: [616, 621, 871, 876],
                values: [0.5, 1, 1, 0.5]
            })
        },
        githubAsset: {
            width: '100%',
            height: '100%'
        },
        jsdelivrIcon: {
            ...styles.FetchingStrategy.logoIcon,
            ...move({
                left: {
                    frameFromTo: [728, 738],
                    values: [50, 55]
                },
                unit: '%'
            }),
            ...fade({
                frameFromTo: [728, 738, 871, 876],
                values: [0, 1, 1, 0]
            }),
            ...zoom({
                frameFromTo: [728, 738, 871, 876],
                values: [0.5, 1, 1, 0.5]
            })
        },
        jsdelivrAsset: {
            width: '100%',
            height: '100%'
        },
        metaDoorClosed: {
            ...styles.FetchingStrategy.metaDoorIcon,
        },
        metaDoorEnter: {
            ...styles.FetchingStrategy.metaDoorIcon,
            left: '30.5%',
            top: '18.5%',
        }
    } satisfies Record<string, CSSProperties>

    return (
        <Element.SceneFetchingStrategy style={styles.base.container}>
            <Element.SceneWrapper style={animations.sceneWrapper}>
                <Sequence from={0} name='audio-section' >
                    <Voice clip="3" />
                </Sequence>
                <SceneryScene sceneryAsset='videos/scene3bgvid.mp4' >
                    <Element.SceneTitle style={styles.scene.title}>Fetching Strategy</Element.SceneTitle>
                    <Element.MagiWrapper style={animations.magiWrapper} >
                        <Magi {...charData04.FetchingStrategy} />
                        <Show at={[{ to: 150 }]}>
                            <Element.DataTextWrapper style={animations.dataText}>
                                <MetallicText text="DATA" />
                            </Element.DataTextWrapper>
                        </Show>
                        <Show at={[{ from: 250, to: 365 }]}>
                            <Element.DatabaseIconWrapper style={animations.databaseIcon}>
                                <Assets.Database style={animations.databaseAsset} />
                            </Element.DatabaseIconWrapper>
                        </Show>
                    </Element.MagiWrapper>

                    <Show at={[{ from: 441 }]}>
                        <Element.MoneyChairWrapper style={animations.moneyChair}>
                            <Assets.MoneyChair />
                        </Element.MoneyChairWrapper>
                    </Show>

                    <Show at={[{ from: 616, to: 876 }]}>
                        <Element.GithubIconWrapper style={animations.githubIcon}>
                            <Assets.Github style={animations.githubAsset} />
                        </Element.GithubIconWrapper>
                    </Show>

                    <Show at={[{ from: 728, to: 876 }]}>
                        <Element.JsdelivrIconWrapper style={animations.jsdelivrIcon}>
                            <Assets.Jsdelivr style={animations.jsdelivrAsset} />
                        </Element.JsdelivrIconWrapper>
                    </Show>

                    <Show at={[{ from: 900, to: 999 }]}>
                        <Element.MetaDoorClosedWrapper style={animations.metaDoorClosed}>
                            <Assets.MetaJsonDoorClosed />
                        </Element.MetaDoorClosedWrapper>
                    </Show>

                    <Show at={[{ from: 1000 }]}>
                        <Element.MetaDoorEnterWrapper style={animations.metaDoorEnter}>
                            <Assets.MetaJsonEnterDoor />
                        </Element.MetaDoorEnterWrapper>
                    </Show>

                </SceneryScene>
            </Element.SceneWrapper>
        </Element.SceneFetchingStrategy>
    )
}

// --- Scene 4: Handshake Process ---
const HandshakeProcess = () => {
    const frame = useCurrentFrame();
    const { fade, move } = useUtil(frame)

    const animations = {
        sceneWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        sceneTitle: {
            color: 'white',
            fontSize: 60,
            position: 'absolute',
            top: 20,
            left: 20
        },
        bgImage: {
            ...styles.base.container,
            ...styles.base.bgImageContainer,
            backgroundImage: `url(${Assets.Pub({}).props.src})`,
        },
        hkIcon: {
            ...styles.HandshakeProcess.hkIcon,
            ...move({
                top: {
                    frameFromTo: [0, 259, 260, 360],
                    values: [0, 0, 50, 60]
                },
                right: {
                    frameFromTo: [0, 259, 260, 360],
                    values: [0, 0, 0, 30]
                },
                unit: '%'
            })
        },
        downloadIcon: {
            ...styles.HandshakeProcess.download,
            ...move({
                top: {
                    frameFromTo: [1340, 1360],
                    values: [30, 50]
                },
                unit: '%'
            }),
            ...fade({
                frameFromTo: [1340, 1355, 1410, 1430],
                values: [0, 1, 1, 0]
            })
        },
        localStorage: {
            ...styles.HandshakeProcess.localStorage,
            ...fade({
                frameFromTo: [980, 990, 1070, 1080],
                values: [0, 1, 1, 0]
            })
        }
    } satisfies Record<string, CSSProperties>

    return (
        <Element.SceneHandshakeProcess style={styles.base.container}>
            <Element.BgImageContainer style={animations.bgImage} />
            <Element.SceneTitle style={animations.sceneTitle}>Handshake Process</Element.SceneTitle>
            <Element.SceneWrapper style={animations.sceneWrapper}>
                <Sequence from={0} name='audio-section' >
                    <Voice clip="4" />
                </Sequence>

                <Assets.CdnSoftware style={styles.HandshakeProcess.cdnIcon} />

                <Element.HkIcon style={animations.hkIcon}>
                    <Show at={[{ from: 261, to: 1227 }, { from: 1431 }]}>
                        <Oscillator
                            type="angle" speed={1.5} degree={5} anchorPoint="bottom center"
                            duration={360}
                            style={{ width: '100%' }}
                        >
                            <Assets.AppIcon />
                        </Oscillator>
                    </Show>
                    <Show at={[{ from: 1228, to: 1430 }]}>
                        <CameraShake intensity={2} duration={0}>
                            <Assets.AppIcon />
                        </CameraShake>
                    </Show>
                </Element.HkIcon>

                <Show at={[{ from: 550, to: 729 }, { from: 1100, to: 1200 }]}>
                    <Assets.Conv style={styles.HandshakeProcess.conv} />
                </Show>
                <Show at={[{ from: 730, to: 895 }, { from: 1620 }]}>
                    <Assets.ConvRev style={styles.HandshakeProcess.conv} />
                </Show>

                <Show at={[{ from: 550, to: 729 }]}>
                    <Typewriter
                        text='Do you'
                        fromToFrame={[550, 580]}
                        styles={styles.HandshakeProcess.text}
                    />
                    <Typewriter
                        text='have the stuff?'
                        fromToFrame={[580, 650]}
                        styles={styles.HandshakeProcess.nextLine}
                    />
                </Show>

                <Show at={[{ from: 730, to: 895 }]}>
                    <Typewriter
                        text='Yes, here is v1.2'
                        fromToFrame={[730, 780]}
                        styles={{
                            ...styles.HandshakeProcess.nextLine,
                            ...styles.HandshakeProcess.singlelineMid
                        }}
                    />
                </Show>

                <Show at={[{ from: 1100, to: 1200 }]}>
                    <Typewriter
                        text='I have'
                        fromToFrame={[1100, 1125]}
                        styles={styles.HandshakeProcess.text}
                    />
                    <Typewriter
                        text='version 1.1'
                        fromToFrame={[1125, 1150]}
                        styles={styles.HandshakeProcess.v1point2}
                    />
                </Show>

                <Show at={[{ from: 1651, to: 1770 }]}>
                    <Element.StaticText style={styles.HandshakeProcess.static}>hey..</Element.StaticText>
                </Show>
                <Show at={[{ from: 1771 }]}>
                    <Element.StaticText style={styles.HandshakeProcess.static}>HEY!!</Element.StaticText>
                </Show>

                <Show at={[{ from: 1340, to: 1430 }]}>
                    <Assets.Download style={animations.downloadIcon} />
                </Show>

                <Show at={[{ from: 980, to: 1070 }]}>
                    <Assets.LocalStorage style={animations.localStorage} />
                </Show>

            </Element.SceneWrapper>
        </Element.SceneHandshakeProcess>
    )
}

export const Scenes04Handshake = {
    RecapIntro,
    TheEngine,
    FetchingStrategy,
    HandshakeProcess
}
