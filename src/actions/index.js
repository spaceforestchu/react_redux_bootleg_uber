export const ADD_LOCATION = 'ADD_LOCATION';
export const FIND_PRODUCTS = 'FIND_PRODUCTS';
import { browserHistory } from 'react-router';


export const addLocation = (location) => ({
  type: ADD_LOCATION,
  payload: location
});

const headers = {
  'Authorization': 'Token eXJ0lXyuHBSd0cG8a9OQXef1ia2ozkRQ5ITa2nsK',
  'Content-Type': 'application/json',
  'Accept_Language': 'en_EN'
}

export const findProducts = (name) => {

  return (dispatch, getState) => {
    const {startLatitude, startLongitude, endLongitude, endLatitude} = getState().location;


    fetch(`https://api.uber.com/v1.2/estimates/price?start_latitude=${startLatitude}&start_longitude=${startLongitude}&end_latitude=${endLatitude}&end_longitude=${endLongitude}`,{
      method: 'GET',
      headers: headers
    })
    .then( (data) => data.json())
      .then( (prices) => {
        dispatch({
          type: FIND_PRODUCTS,
          payload: prices
        })
        browserHistory.push(`/products/${name}`)
      })
  }
}
