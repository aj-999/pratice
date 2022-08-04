import { STEP_CHANGE_CURRENT } from '../action/step_action'
const initState = {
    step: 0
}

export default function StepReducer(state = initState, action) {
    switch (action.type) {
        case STEP_CHANGE_CURRENT:
            return { step: action.step }

        default:
            return state
            break;
    }
}