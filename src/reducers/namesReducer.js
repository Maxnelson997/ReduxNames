import {
    FETCH_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
    instructors: [],
    students: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                instructors: action.payload
            }
        default:
            return state;
    }
}