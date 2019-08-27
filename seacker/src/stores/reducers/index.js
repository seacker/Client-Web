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
                allSeat: action.payload
            }
        case 'LOADING':
            return {
                isLoading: action.payload
            }
        case 'LOGIN' :
            return {
                isLogin: action.payload
            }
        case 'ERROR' : 
            return {
                error : action.payload
            }
        default:
            return state
    }
}