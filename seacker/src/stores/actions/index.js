import axios from 'axios'


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
            history.push('/dashboard')
        })
        .catch(err=> {
            console.log(err)
        })
            // .then(login => {
            //     console.log('aku berhasil login, ?<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            //     console.log(login)
            //     dispatch({
            //         type: 'LOADING',
            //         payload: false
            //     })
            //     dispatch({
            //         type: 'LOGIN',
            //         payload: true
            //     })
            //     history.push('/dashboard')
            // })
            // .catch(err => {
            //     console.log(err)
            //     dispatch({
            //         type: 'LOADING',
            //         payload: false
            //     })
            //     dispatch({
            //         type: 'ERROR',
            //         payload: err
            //     })
            // })
    })
}

export function fetchSeats (){
    return(dispatch => {
        axios.get(`http://localhost:3001/seat`)
        .then((data)=> {
            console.log(data)
            dispatch({
                type: 'FETCH',
                payload: data
            })
        })
        .catch((err)=> {
            console.log(err)
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
