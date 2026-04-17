import { MagiTypes } from "../Magi";

/** 
 * Creates walking animation for given frames for mascot
 * Applied to legs
 * @param {number} from - The frame from which walking animation should start
 * @param {number} cycles - 
 *     The number of cycles where cycle is defined as "from rest(0deg) to rest(0deg)", <br/>
 *     A cycle is considered if the following steps complete sequentially: 
 *          - a leg starts from rest to forward while other kicks back.
 *          - both legs now turn to rest
 *          - the procedure happens with next leg
 * @returns {Legs & Hands}
*/
const walk = (
  startFrame: number, cycles: number): Legs & Hands => {
  // CONFIGURATION
  const STEP_DURATION = 40; 
  const INTRO_DURATION = 20;
  
  // LEG CONFIG
  const THIGH_SWING = 30; // +/- 30 degrees
  const KNEE_BEND = -30;  // -30 degrees when kicking back
  
  // HAND CONFIG
  const SHOULDER_SWING = 10; // +/- 10 degrees (smaller swing than legs)
  const ARM_REST_BEND = 10;  // Static bend for the elbow while walking

  // Initialize arrays
  const leftThighs: JointConfig[] = [];  const leftFeet: JointConfig[] = [];
  const rightThighs: JointConfig[] = []; const rightFeet: JointConfig[] = [];
  const leftShoulder: JointConfig[] = []; const leftArms: JointConfig[] = [];
  const rightShoulder: JointConfig[] = []; const rightArms: JointConfig[] = [];

  // --- PHASE 1: INTRO (Rest to Stride) ---
  // Frame: startFrame -> startFrame + 20
  
  // 1. Initial Rest
  [leftThighs, leftFeet, rightThighs, rightFeet, leftShoulder, leftArms, rightShoulder, rightArms]
    .forEach(arr => arr.push({ frame: startFrame, degree: 0 }));

  const loopStartFrame = startFrame + INTRO_DURATION;
  
  // 2. Move to Starting Stride 
  // Left Leg Forward (30), Right Leg Back (-30)
  // Therefore: Left Hand Back (-10), Right Hand Forward (10)
  
  // LEGS
  leftThighs.push({ frame: loopStartFrame, degree: THIGH_SWING });
  leftFeet.push({ frame: loopStartFrame, degree: 0 }); 

  rightThighs.push({ frame: loopStartFrame, degree: -THIGH_SWING });
  rightFeet.push({ frame: loopStartFrame, degree: 0 });

  // HANDS (Opposite to Legs)
  // Left Leg is Fwd, so Left Hand is Back
  leftShoulder.push({ frame: loopStartFrame, degree: -SHOULDER_SWING });
  // Right Leg is Back, so Right Hand is Fwd
  rightShoulder.push({ frame: loopStartFrame, degree: SHOULDER_SWING });

  // ARMS (Just bend them slightly and hold)
  leftArms.push({ frame: loopStartFrame, degree: ARM_REST_BEND });
  rightArms.push({ frame: loopStartFrame, degree: ARM_REST_BEND });


  // --- PHASE 2: THE LOOP (Walking) ---
  let currentFrame = loopStartFrame;

  for (let i = 0; i < cycles; i++) {
    // === HALF CYCLE 1 ===
    // Left Leg goes Back, Right Leg goes Forward
    // Left Hand goes Forward, Right Hand goes Back
    const midCycleFrame = currentFrame + STEP_DURATION;
    
    // Legs
    leftThighs.push({ frame: midCycleFrame, degree: -THIGH_SWING });
    leftFeet.push({ frame: midCycleFrame, degree: KNEE_BEND }); // Kick back
    rightThighs.push({ frame: midCycleFrame, degree: THIGH_SWING });
    rightFeet.push({ frame: midCycleFrame, degree: 0 });

    // Hands (Shoulders)
    leftShoulder.push({ frame: midCycleFrame, degree: SHOULDER_SWING });
    rightShoulder.push({ frame: midCycleFrame, degree: -SHOULDER_SWING });


    // === HALF CYCLE 2 ===
    // Left Leg goes Forward, Right Leg goes Back
    // Left Hand goes Back, Right Hand goes Forward
    const endCycleFrame = currentFrame + (STEP_DURATION * 2);
    
    // Legs
    leftThighs.push({ frame: endCycleFrame, degree: THIGH_SWING });
    leftFeet.push({ frame: endCycleFrame, degree: 0 });
    rightThighs.push({ frame: endCycleFrame, degree: -THIGH_SWING });
    rightFeet.push({ frame: endCycleFrame, degree: KNEE_BEND }); // Kick back

    // Hands (Shoulders)
    leftShoulder.push({ frame: endCycleFrame, degree: -SHOULDER_SWING });
    rightShoulder.push({ frame: endCycleFrame, degree: SHOULDER_SWING });

    currentFrame = endCycleFrame;
  }

  // --- PHASE 3: OUTRO (Stride to Rest) ---
  
  const stopStart = currentFrame + 20; 
  const finalRest = stopStart + 40; // Total 60 frames to stop

  // LEGS STOPPING LOGIC
  leftThighs.push({ frame: stopStart, degree: THIGH_SWING });
  rightThighs.push({ frame: stopStart, degree: -THIGH_SWING });
  
  leftThighs.push({ frame: stopStart + 20, degree: 15 }); // Ease
  leftThighs.push({ frame: finalRest, degree: 0 });
  leftFeet.push({ frame: finalRest, degree: 0 });

  rightThighs.push({ frame: finalRest, degree: 0 });
  rightFeet.push({ frame: stopStart, degree: KNEE_BEND }); // Ensure bent before stop
  rightFeet.push({ frame: finalRest - 10, degree: -10 });
  rightFeet.push({ frame: finalRest, degree: 0 });

  // HANDS STOPPING LOGIC
  // We can just tween them straight to 0 from their last position
  leftShoulder.push({ frame: finalRest, degree: 0 });
  rightShoulder.push({ frame: finalRest, degree: 0 });
  
  // Return arms to straight (0)
  leftArms.push({ frame: finalRest, degree: 0 });
  rightArms.push({ frame: finalRest, degree: 0 });

  return {
    leftLeg: { thighs: leftThighs, feet: leftFeet },
    rightLeg: { thighs: rightThighs, feet: rightFeet },
    leftHand: { shoulder: leftShoulder, arms: leftArms },
    rightHand: { shoulder: rightShoulder, arms: rightArms },
  };
};

/**
 * Predefined leg actions
 */
export const legActions = {
  walk,
}

type Legs = MagiTypes['Legs']
type Hands = MagiTypes['Hands']
type JointConfig = MagiTypes['JointConfig']

