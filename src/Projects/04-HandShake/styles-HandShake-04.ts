import { CSSProperties } from 'react';
import { utils } from '../../Shared/Helpers/utils';
const { positionAbsolute } = utils

export const styles04handshake = {
  base: {
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      fontFamily: 'Outfit, sans-serif',
    },
    topictext: {
      fontSize: 120,
      color: '#FFFFFF',
      fontWeight: '900',
      textTransform: 'uppercase',
      letterSpacing: '5px',
    },
    bgImageContainer: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(30px)',
      zIndex: -1
    }
  },
  scenery: {
    title: {
      fontSize: 180,
      marginBottom: 40,
      textShadow: '0 10px 20px rgba(0,0,0,0.5)',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    body: {
      fontSize: 80,
      maxWidth: 1600,
      lineHeight: 1.4,
      color: 'white',
      textAlign: 'center'
    }
  },
  magi: {
    corner: {
      bottom: 50,
      right: 50,
    },
    center: {
      ...positionAbsolute(undefined, undefined, '10%', '29%')
    },
    side: {
      ...positionAbsolute(undefined, undefined, '10%', '29%')
    },
    absolute: {
      ...positionAbsolute()
    }
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
  RecapIntro: {
    wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    magiWrapper: {
      ...positionAbsolute()
    },
    appIcon: {
      ...positionAbsolute(undefined, undefined, '52%', `57%`),
      width: 600,
      height: 600
    },
    netFlixIcon: {
      ...positionAbsolute(undefined, undefined, '60%', `15%`),
      width: 600,
      height: 600,
      borderRadius: '9rem',
      display: 'flex',
      placeContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 260,
      fontWeight: 'bolder',
      boxShadow: '0 0 40px rgba(0,0,0,0.5)'
    },
    lastVideo: {
      ...positionAbsolute(undefined, undefined, '11%', `10%`),
      zIndex: -1,
      borderRadius: '9rem',
      boxShadow: '0 0 40px rgba(0,0,0,0.5)',
    }
  },
  TheEngine: {
    metalText: {
      marginBottom: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    icon: {
      ...positionAbsolute(),
      borderRadius: '9rem',
      display: 'flex',
      placeContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 260,
      fontWeight: 'bolder',
    },
    iconSize: {
      width: 800,
      height: 800,
    },
    politicianIcon: {
      bottom: '50%', right: `60%`,
    },
    jsFrameworkIcon: {
      bottom: '10%', right: `60%`,
    },
    bouncingText: {
      ...positionAbsolute('40%', '67%'),
      fontSize: '352px',
      fontWeight: 1000,
      color: 'white',
      textShadow: '0 0 100px black',
    }
  },
  FetchingStrategy: {
    dataTextWrapper: {
      ...positionAbsolute('-10%', '50%'),
      transform: 'translateX(-50%)',
      zIndex: 10,
      pointerEvents: 'none',
      width: 'max-content'
    },
    databaseIcon: {
      ...positionAbsolute(undefined, undefined, '40%', '100%'),
      marginRight: 100,
      width: 400,
      height: 400,
    },
    moneyChair: {
      ...positionAbsolute(undefined, undefined, '22%', '15%'),
      width: 400,
      height: 400,
      zIndex: -1
    },
    logoIcon: {
      ...positionAbsolute('50%', '50%'),
      transform: 'translate(-50%, -50%)',
      width: 800,
      height: 800,
      zIndex: 20,
    },
    metaDoorIcon: {
      ...positionAbsolute('20%', '40%'),
      width: 1000,
      height: 800,
    }
  },
  HandshakeProcess: {
    cdnIcon: {
      ...positionAbsolute('800px', '700px'),
      width: '1300px',
    },
    hkIcon: {
      ...positionAbsolute(),
      width: '600px',
      height: '600px',
    },
    conv: {
      ...positionAbsolute('600px', '1700px'),
      width: '700px'
    },
    text: {
      ...positionAbsolute('37%', '49.5%'),
      color: 'black',
      height: 'max-content',
      width: 'max-content',
    },
    nextLine: {
      ...positionAbsolute('42%', '45.5%'),
      color: 'black',
      height: 'max-content',
      width: 'max-content',
    },
    singlelineMid: {
      ...positionAbsolute('42%', '46%'),
      color: 'black',
      height: 'max-content',
      width: 'max-content',
    },
    v1point2: {
      ...positionAbsolute('42%', '48%'),
      color: 'black',
      height: 'max-content',
      width: 'max-content',
    },
    static: {
      ...positionAbsolute('42%', '48%'),
      color: 'black',
      fontSize: "100px"
    },
    download: {
      ...positionAbsolute(undefined, 2500)
    },
    localStorage: {
      ...positionAbsolute(1200, 2800),
      width: 500
    }
  },
  ContentSource: {
    magiWrapper: {
      ...positionAbsolute(undefined, undefined, '-650px', '-100px')
    },
    questionMark: {
      ...positionAbsolute(undefined, undefined, '560px', '520px'),
      color: 'white',
      fontSize: '300px',
    },
    smokeParticles: {
      ...positionAbsolute(undefined, undefined, '560px', '620px'),
    },
    flashCard: {
      ...positionAbsolute('400px', '1500px'),
      width: '700px',
      height: '1000px',
      borderRadius: '100px',
      boxShadow: '0 0 100px 10px rgba(0, 0, 0, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '550px'
    },
    jsonTextWrapper: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '200px'
    },
    jsonContainer: {
      border: '10px solid skyblue',
      width: '25%',
      height: '70%',
      color: 'white',
      overflow: 'hidden',
      fontSize: '35px',
      padding: '40px',
      borderRadius: '40px'
    },
    pre: {
      color: 'white',
      fontSize: '30px'
    }
  },
  ToolBuilding: {
    clock: {
      ...positionAbsolute(0, 0),
      zIndex: 0,
      width: '100%'
    },
    clockHand: {
      ...positionAbsolute(0, 0),
      zIndex: 1,
      width: '100%'
    },
    clockWrapper: {
      position: 'relative'
    },
    maskMeme: {
      width: '1000px'
    },
    jsonGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '100px',
    },
    jsonFile: {
      width: 300
    }
  }
} satisfies Record<string, Record<string, CSSProperties>>;
