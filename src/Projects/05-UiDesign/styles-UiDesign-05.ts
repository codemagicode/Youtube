import { utils } from '../../Shared/Helpers/utils';
import { Scenes05UiDesign } from './Scenes-UiDesign-05';
import { SceneStyles, FullStyles } from '../../Shared/Types/styles';

const { centerScreen } = utils;

const commonStyles = {
  base: {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      fontFamily: 'Outfit, sans-serif',
    },
  },
  scene: {
    title: {
      color: 'white',
      fontSize: '60px',
      marginLeft: '60px',
      marginTop: '25px',
      display: 'inline',
    },
  },
} satisfies FullStyles;

const sceneStyles = {
  Intro: {
    container: {
      backgroundColor: '#110022',
      width: '100%',
      height: '100%'
    },
    mandalaBackgroundStyles: {
      backgroundColor: '#110022'
    },
    mandalaFg: {
      opacity: 0.1,
      scale: 2,
      top: '-70%',
      right: '-80%'
    },
    mandalaBG: {
      opacity: 0.3,
      scale: 1.5,
      bottom: '-70%',
      left: '-80%',
      filter: 'hue-rotate(90deg)'
    },
    rainBowWrapper: {
      position: 'relative',
      overflow: 'hidden',
      marginInline: 'auto',
      height: '500px',
    },
    rainBow: {
      position: 'absolute',
      top: 0,
    },
    magiWrapper: {
      ...centerScreen
    },
    coffee: {
      position: 'absolute',
      top: '30%',
      left: '38%',
      width: '200px',
    }
  }
} satisfies SceneStyles<typeof Scenes05UiDesign>;

export const styles05UiDesign = {
  ...commonStyles,
  ...sceneStyles
}
