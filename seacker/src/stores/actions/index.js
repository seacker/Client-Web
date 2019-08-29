import axios from 'axios'
import Swal from 'sweetalert2'

export function loginUser(data, history){
    console.log("aku masuk sini")
    return(dispatch => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        axios.post(`http://localhost:3001/users/login`, {
            nik : data.nik,
            password : data.password
        })
        .then((login)=> {
            console.log('success')
            dispatch({
                type: 'LOADING',
                payload: false
            })
            dispatch({
                type: 'LOGIN',
                payload: true
            })
            localStorage.setItem('token', login.data.token)
            console.log(history, "ini history login")
            history.push('/dashboard')
            // localStorage.setItem('email', login.user.email)
        })
        .catch(err=> {
            console.log(err)
            dispatch({
                type: 'LOADING',
                payload: false
            })
            dispatch({
                type: 'LOGINERROR',
                payload: err
            })
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: JSON.stringify(err)
            })
        })
    })
}

export function checkLogin(value){
    return(dispatch => {
        dispatch({
            type : 'LOGIN',
            payload : value
        })
    })
}

export function fetchSeats (){
    return(dispatch => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        axios.get(`http://localhost:3001/seat`)
        .then(({data})=> {
            dispatch({
                type: 'LOADING',
                payload: false
            })
            dispatch({
                type: 'FETCH',
                payload: data
            })
        })
        .catch((err)=> {
            console.log(err)
            dispatch({
                type: 'LOAD_FETCH',
                payload: false
            })
            dispatch({
                type: 'ERROR',
                payload: err
            })
        })
    })
}

export function detailSeat(id){
    console.log('masuk detail action')
    return(dispatch => {
        dispatch({
            type: 'LOAD_DETAIL',
            payload: true
        })
        axios.get(`http://localhost:3001/seat/${id}`)
            .then(({data}) => {
                dispatch({
                    type : 'LOAD_DETAIL',
                    payload : false
                })
                dispatch({
                    type : 'SEAT_DETAIL',
                    detail : data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'LOAD_DETAIL',
                    payload: false
                })
                dispatch({
                    type : 'SEAT_DETAIL',
                    error : err
                })
            })
    })
}

export function bookSeat(id, history){
    console.log(id,'masuk')
    return(dispatch => {
        dispatch({
            type: 'LOAD_BOOK',
            payload: true
        })
        axios.patch(`http://localhost:3001/seat/changeState/${id}`,{}, {
            headers: {
                token : localStorage.getItem('token')
            }
        })
            .then(({data}) => {
                dispatch({
                    type: 'LOAD_BOOK',
                    payload: false
                })
                console.log(history, "ini history action")
                history.push('/booked')
            })
            .catch(err => {
                console.log(err, 'errrrrrrrr')
                dispatch({
                    type : `ERROR-BOOKING`,
                    payload : err
                })
            })
    })
}


export function fetchMeeting(){
    console.log("triggered fetch meeting")
    return(dispatch => {
        console.log("didalem dispatch")
        dispatch({
            type: `LOADING-MEETING`,
            payload : true
        })
        console.log(localStorage.getItem('token'))
        axios.get(`http://localhost:3001/booking`,{
            headers: {
                token : localStorage.getItem('token')
            }
        }).then(({data}) => {
                dispatch({
                    type: `LOADING-MEETING`,
                    payload : false
                })
                dispatch({
                    type : `DATA-MEETING`,
                    payload : data
                })
            })
            .catch(err => {
                console.log(err, "ini error fetch meeting")
                dispatch({
                    type: `LOADING-MEETING`,
                    payload : false
                })
                dispatch({
                    type: `ERROR-MEETING`,
                    payload : err
                })
            })
    })
}





































// func for FETCH all dataset seat
// export function getAll () {
//     console.log('masuk ke action')
//     return (dispatch, state) => {
//         dispatch({
//             type: 'LOADING',
//             state: true
//         })
//       axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`)
//         .then(({ data }) => {
//             dispatch({
//             //   type: 'FETCH_'+ value.toUpperCase(),
//                 type: 'FETCH',
//                 state: data
//             })
//             dispatch({
//                 type: 'LOADING',
//                 state: false
//             })
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }
// }

// // func for FETCH all dataset booking seat
