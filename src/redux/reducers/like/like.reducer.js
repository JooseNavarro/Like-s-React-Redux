import {LIKE, SAD} from '../../actions';

const initialState = 0;

export default function likeUser(state = initialState, action) {
    switch (action.type) {
        case LIKE:
            return state + 1;
        case SAD:
            return  state === 0? 0: state - 1;
        default:
            return state
    }
}