import { MagiTypes } from "../Magi"

/**
 * Creates a shrug animation for mascot
 * Applied to shoulder
 * @param from - The frame at which it should start. Default is 0 
 * @param duration - The duration of the animation. Default is 100
 * @param value - The value of the shoulder. Default is 50
 * @param speed - The speed at which the animation happens. Default is 10
 * @returns {ShoulderType} 
 */
function shrug(from: number = 0, duration: number, value: number = 50, speed: number = 10): MagiTypes['ShoulderConfig'] {
    const rest = { frame: from + 0, top: 0 }
    const upWard = { frame: from + speed, top: value }
    const downWard = { frame: duration - speed, top: value }
    const finalRest = { frame: duration, top: 0 }
    const shoulder = [
        rest,
        upWard,
        downWard,
        finalRest
    ]
    return {left: shoulder, right: shoulder}
}

/**
 * Predefined shoulder actions
 */
export const shoulderActions = {
    shrug
}
