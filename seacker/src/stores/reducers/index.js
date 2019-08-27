const defaultValue = {
    allSeat : [],
    isLogin : false,
    isLoading : false,
    error : {}
}

export default function fetchAllSeat(state=defaultValue, action){
    switch (action.type) {
        case 'FETCH':
            return {
                allSeat: action.state
            }
        case 'LOADING':
            return {
                isLoading: action.state
            }
        case 'LOGIN' :
            return {
                isLogin: action.state
            }
    
        default:
            return state
    }
}