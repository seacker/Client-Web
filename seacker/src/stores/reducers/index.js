const defaultValue = {
    allSeat : {
        data: [],
        isLoading: false,
        error: {}
    },
    userLogin : {
        statLogin : false,
        errLogin : false
    },
    seatDetail : {
        detail : {},
        isLoading: false,
        error : {}
    },
    booking:{
        isLoading: false,
        error:  {}
    },
    isLogin : false,
    error : {}
}

export default function fetchAllSeat(state=defaultValue, action){
    switch (action.type) {
        case 'FETCH':
            return {
                ...state,
                allSeat: {
                    data: action.payload
                }
            }
        case 'LOAD_FETCH':
            return {
                ...state,
                allSeat:{
                    isLoading:action.payload
                }
            }
        case 'LOAD_DETAIL':
            return {
                ...state,
                seatDetail:{
                    isLoading:action.payload
                }
            }
            case 'LOAD_BOOK':
                return {
                    ...state,
                    booking : {
                        isLoading:action.payload
                    }
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
                    detail : action.detail
                }
            }
        case 'ERROR' : 
            return {
                error : action.payload
            }
        case 'ERROR-BOOKING' : 
            return {
                ...state,
                booking:{
                    error: action.payload
                }
            }
        default:
            return state
    }
}