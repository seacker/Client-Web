import axios from 'axios'
import Swal from 'sweetalert2'

export function loginUser(data, history){
    return(dispatch => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
        axios.post(`http://localhost:3001/users/login`, {
            nik : data.nik,
            password : data.password
        })
        .then(({data})=> {
            dispatch({
                type: 'LOADING',
                payload: false
            })
            dispatch({
                type: 'LOGIN',
                payload: true
            })
            localStorage.setItem('token', data.token)
            localStorage.setItem('userid', data.user._id)
            history.push('/dashboard')
            // localStorage.setItem('email', login.user.email)
        })
        .catch(err=> {
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
                history.push('/booked', {from:'seat'})
            })
            .catch(err => {
                console.log(err, 'errrrrrrrr')
                dispatch({
                    type: 'LOAD_BOOK',
                    payload: false
                })
                dispatch({
                    type : `ERROR-BOOKING`,
                    payload : err
                })

                Swal.fire({
                    // type: 'error',
                    imageUrl:`https://media.giphy.com/media/1wpb8YKWT5JmPG5VjV/200w_d.gif` ,
                    title: 'Oops...',
                    text: 'You already check in!'
                })
                
            })
    })
}


export function fetchMeeting(){
    return(dispatch => {
        dispatch({
            type: `LOADING-MEETING`,
            payload : true
        })
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

export function bookMeeting(data, history){
    console.log(data, 'data booking meeting ')
    return(dispatch => {
        dispatch({
            type: 'LOAD_BOOKMEET',
            payload: true
        })
        axios.post(`http://localhost:3001/booking`,{data}, {
            headers: {
                token : localStorage.getItem('token')
            }
        })
            .then(({data}) => {
                console.log(data, 'dari action booking meeting')
                dispatch({
                    type: 'LOAD_BOOKMEET',
                    payload: false
                })
                // console.log(history, "ini history action")
              history.push('/booked', {from:'meeting'})
            })
            .catch(err => {
                Swal.fire({
                    imageUrl:`https://media.giphy.com/media/1wpb8YKWT5JmPG5VjV/200w_d.gif` ,
                    title: 'Oops...',
                    text: `Sorry, you can't booking room before today`
                })
                dispatch({
                    type: 'LOAD_BOOKMEET',
                    payload: false
                })
                dispatch({
                    type : `ERROR-MEETINGBOOK`,
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
