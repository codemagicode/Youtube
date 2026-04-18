import { MagiTypes } from "../Magi";

/** 
 * Creates waving animation for hi and bye for mascot
 * Applied to hand
 * @param {number} cycles - The amount of times to and fro should happen
 * @param {number} amplitude - The angle of 'v' shape
 * @param {number} from - The frames at which it should start. Default is 0 
 * @param {SingleJointType} start - The start value that would be there, Default considered as rest position
 * @param {SingleJointType} end - The final value that should be run, Default goes to rest position
 * @param {number} speed - Speed at which to and fro motion happens, larger = slower, default 10
 * @return {HandType} 
*/
function wave(
  cycles: number,
  amplitude: number,
  from: number = 0,
  speed: number = 10,
  start: SingleJointType = {
    upper: { degree: 0, frame: 0 },
    lower: { degree: 0, frame: 0 }
  },
  end: SingleJointType = {
    upper: { degree: 0, frame: 100 },
    lower: { degree: 0, frame: 100 }
  },
): HandType {
  if (from !== 0) {
    start = {
      upper: { degree: start.upper.degree, frame: from + 0 },
      lower: { degree: start.lower.degree, frame: from + 0 }
    }
    end = {
      upper: { degree: end.upper.degree, frame: from + 100 },
      lower: { degree: end.lower.degree, frame: from + 0 }
    }
  }
  let { shoulder, arms: armsPattern } = {
    shoulder: [
      start.upper,
      { degree: 50, frame: from + 30 },
      { degree: 50, frame: from + 80 },
      end.upper,
    ],
    arms: [
      start.upper,
      { degree: 130, frame: from + 30 },
      end.lower,
    ]
  };
  const perpendicular = 130, halfAmplitude = amplitude / 2;
  const toAngle = perpendicular + halfAmplitude,
    froAngle = perpendicular - halfAmplitude;
  const fillerArray = new Array<JointConfig>(cycles * 2).fill({ degree: 0, frame: 0 })
  let startFrameForCycle = armsPattern[1].frame
  for (let i = 0; i < fillerArray.length; i = i + 2) {
    fillerArray[i] = {
      degree: toAngle,
      frame: startFrameForCycle + (i * speed) + speed
    }
    fillerArray[i + 1] = {
      degree: froAngle,
      frame: fillerArray[i].frame + speed
    }
  }
  const lastArms = {
    ...armsPattern[armsPattern.length - 1],
    frame: fillerArray[fillerArray.length - 1].frame + 10
  }
  shoulder[2] = {
    degree: 50,
    frame: fillerArray[fillerArray.length - 2].frame - speed
  }
  shoulder[3] = {
    ...end.upper,
    frame: fillerArray[fillerArray.length - 1].frame
  }
  const arms = [
    armsPattern[0],
    armsPattern[1],
    ...fillerArray,
    lastArms
  ]
  return { shoulder, arms }
}

/**
 * Predefined hand actions
 */
export const handActions = {
  wave,
}

type HandType = MagiTypes['HandType']
type JointConfig = MagiTypes['JointConfig']
type SingleJointType = {
  upper: JointConfig;
  lower: JointConfig;
}