import axios from 'axios'

// func for FETCH all dataset seat
export function getAll () {
    console.log('masuk ke action')
    return (dispatch, state) => {
        dispatch({
            type: 'LOADING',
            state: true
        })
      axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${value}`)
        .then(({ data }) => {
            dispatch({
            //   type: 'FETCH_'+ value.toUpperCase(),
                type: 'FETCH',
                state: data
            })
            dispatch({
                type: 'LOADING',
                state: false
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

// func for FETCH all dataset booking seat
