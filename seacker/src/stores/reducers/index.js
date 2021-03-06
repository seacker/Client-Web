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
    meeting : {
        data : [],
        isLoading : false,
        error : {}
    },
    bookMeet:{
        isLoading: false,
        error: {}
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
        case 'LOADING-MEETING' : 
            return {
                ...state,
                meeting : {
                    isLoading : action.payload
                }
            }
        case 'DATA-MEETING' : {
            return {
                ...state,
                meeting : {
                    data : action.payload
                }
            }
        }
        case 'ERROR_MEETING' : {
            return {
                ...state,
                meeting : {
                    error : action.payload
                }
            }
        }
        case 'LOAD_BOOKMEET' : {
            return{
                ...state,
                bookMeet : {
                    isLoading: action.payload
                }
            }
        }
        case 'ERROR-MEETINGBOOK' : {
            return{
                ...state,
                bookMeet: {
                    error: action.payload
                }
            }
        }
        default:
            return state
    }
}