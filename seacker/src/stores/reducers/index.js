const defaultValue = {
    allSeat : [],
    userLogin : {
        statLogin : false,
        errLogin : false
    },
    seatDetail : {
        detail : {},
        error : {}
    },
    isLogin : false,
    isLoading : false,
    error : {}
}

export default function fetchAllSeat(state=defaultValue, action){
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                allSeat: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'LOGIN' :
            return {
                ...state,
                isLogin: action.payload
            }
        case 'LOGINERROR' : 
            return {
                ...state,
                userLogin : {
                    // statLogin : ,
                    errLogin : action.payload
                }
            }
        case 'SEAT_DETAIL' : 
            return{
                ...state,
                seatDetail : {
                    detail : action.detail,
                    error : action.error
                }
            }
        case 'ERROR' : 
            return {
                error : action.payload
            }
        default:
            return state
    }
}