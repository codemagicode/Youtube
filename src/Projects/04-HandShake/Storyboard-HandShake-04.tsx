import { TransitionPresentation } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { slide } from "@remotion/transitions/slide";
import { Easing } from "remotion";
import { StoryBoardType, AnimationProps } from "../../Shared/Types/storyboard";
import { Scenes04Handshake as scenes } from "./Scenes-HandShake-04";
import { Outro } from "../../Shared/Scenes/Outro";
import Intro from "../../Shared/Scenes/Intro/Intro";

export const handshakeStoryBoard: StoryBoardType = [
    {
        component: <Intro title="The handshake" />,
    composition: Intro,
    name: 'Intro',
    durationInframes: 10.5 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>,
    },

  {
    component: <scenes.RecapIntro />,
    composition: scenes.RecapIntro,
    name: 'RecapIntro',
    durationInframes: 23.5 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.TheEngine />,
    composition: scenes.TheEngine,
    name: 'TheEngine',
    durationInframes: 12 * 60 + 30,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: slide({ direction: "from-bottom" }) as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.FetchingStrategy />,
    composition: scenes.FetchingStrategy,
    name: 'FetchingStrategy',
    durationInframes: 19 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: wipe({ direction: "from-left" }) as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.HandshakeProcess />,
    composition: scenes.HandshakeProcess,
    name: 'HandshakeProcess',
    durationInframes: 33 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>, // Note: Script says iris out, using fade as fallback
  },
  {
    component: <scenes.ContentSource />,
    composition: scenes.ContentSource,
    name: 'ContentSource',
    durationInframes: (25 * 60) + 30,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.ToolBuilding />,
    composition: scenes.ToolBuilding,
    name: 'ToolBuilding',
    durationInframes: (17.5 * 60),
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: slide({ direction: "from-right" }) as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.CachingIntro />,
    composition: scenes.CachingIntro,
    name: 'CachingIntro',
    durationInframes: (15.5 * 60),
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>, // Note: Zoom in fallback to fade
  },
  {
    component: <scenes.DataBunker />,
    composition: scenes.DataBunker,
    name: 'DataBunker',
    durationInframes: (11.5 * 60),
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>, // Note: Iris close fallback to fade
  },
  {
    component: <scenes.ClingyOffline />,
    composition: scenes.ClingyOffline,
    name: 'ClingyOffline',
    durationInframes: 16.5 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: slide({ direction: "from-bottom" }) as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.RunTimeGenerator />,
    composition: scenes.RunTimeGenerator,
    name: 'RuntimeGenerator',
    durationInframes: 16 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>, // Diffuse fallback
  },
  {
    component: <scenes.QuizLogic />,
    composition: scenes.QuizLogic,
    name: 'QuizLogic',
    durationInframes: 20.5 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: wipe({ direction: "from-right" }) as TransitionPresentation<AnimationProps>,
  },
  {
    component: <scenes.SummaryOutro />,
    composition: scenes.SummaryOutro,
    name: 'SummaryOutro',
    durationInframes: 32.5 * 60,
    transitionDurationInFrames: 30,
    transitionEasing: Easing.out(Easing.ease),
    transitionType: fade() as TransitionPresentation<AnimationProps>,
  },
  {
    component: <Outro />,
    composition: Outro,
    name: 'Outro',
    durationInframes: 10*60,
    transitionDurationInFrames: 30,
    transitionType: fade() as TransitionPresentation<AnimationProps>,
    transitionEasing: Easing.out(Easing.ease),
  }
];
