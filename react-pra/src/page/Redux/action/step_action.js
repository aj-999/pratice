export const STEP_CHANGE_CURRENT = 'STEP_CHANGE_CURRENT'

export function changeCurrent(current) {
    return {
        type: STEP_CHANGE_CURRENT,
        step: current
    }
}

export default {
    changeCurrent
}