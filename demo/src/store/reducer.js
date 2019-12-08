import {
    USER,
    AVATAR
} from './action.js';
let defaultState = sessionStorage.getItem('state')
defaultState =defaultState?JSON.parse(defaultState):{};

export default (state = defaultState , action)=>{
    let newState = Object.assign({},state)
    switch(action.type) {
        case USER: 
            newState.user=action
            sessionStorage.setItem('state',JSON.stringify(newState))
            return newState
        case AVATAR: 
            newState.avatar=action
            return newState
        default:
            return state
    }
}