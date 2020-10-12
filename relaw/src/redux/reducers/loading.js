import {
    TOGGLE_LOADING_ON,
    TOGGLE_LOADING_OFF
} from '../actionTypes';

const defaultState = {
    loading: false
}

export default (state = defaultState, action) => {
    if(action.type === TOGGLE_LOADING_ON) {
        return {
            ...state,
            loading: true
        }
    } else if(action.type === TOGGLE_LOADING_OFF) {
        return {
            ...state,
            loading: false
        }
    } else {
        return state;
    }
}