export default (state = {} , action)=>{
    if(action.type === 'user') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.user=action
        console.log(newState)
        console.log(state)
        return newState
    }
    return state
}