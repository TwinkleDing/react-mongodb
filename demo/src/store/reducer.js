let defaultState = sessionStorage.getItem('state')
defaultState =defaultState?JSON.parse(defaultState):{};
export default (state = defaultState , action)=>{
    if(action.type === 'user') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.user=action
        sessionStorage.setItem('state',JSON.stringify(newState))
        return newState
    }
    if(action.type === 'avatar') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.avatar=action
        return newState
    }
    return state
}