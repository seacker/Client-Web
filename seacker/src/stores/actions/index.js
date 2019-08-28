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
            console.log(login, "ini data login")
            localStorage.setItem('token', login.data.token)
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
            payload : false
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
                console.log(data, 'dari action')
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
        axios.patch(`http://localhost:3001/changeState/${id}`)
            .then(({data}) => {
                console.log(data, 'ini action bokseat')
                dispatch({
                    type: 'LOAD_BOOK',
                    payload: false
                })
                history.push('/booked')
            })
            .catch(err => {
                dispatch({
                    type: 'LOAD_BOOK',
                    payload: false
                })
                dispatch({
                    type : `ERROR`,
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
