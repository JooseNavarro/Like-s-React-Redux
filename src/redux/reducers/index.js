import { combineReducers } from 'redux';
import likeUser  from './like/like.reducer';

const rootReducer = combineReducers({
    likeUser: likeUser
})

export default rootReducer
