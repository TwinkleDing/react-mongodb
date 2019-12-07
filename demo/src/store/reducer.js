import {
    USER,
    AVATAR
} from './action.js';
let defaultState = sessionStorage.getItem('state')
defaultState =defaultState?JSON.parse(defaultState):{};
export default (state = defaultState , action)=>{
    // if(action.type === 'user') {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.user=action
    //     sessionStorage.setItem('state',JSON.stringify(newState))
    //     return newState
    // }
    // if(action.type === 'avatar') {
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.avatar=action
    //     return newState
    // }
    let newState = Object.assign({},state)
    switch(action.type) {
        case USER: 
            sessionStorage.setItem('state',JSON.stringify(newState))
            newState.user=action
            return newState
        case AVATAR: 
            newState.avatar=action
            return newState
        default:
            return state
    }
}