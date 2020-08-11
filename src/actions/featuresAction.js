export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const UPDATE_PRICE = 'UPDATE_PRICE'
export const SET_CAR = 'SET_CAR' 


export const addFeature = item => {
    return { type: ADD_FEATURE, payload: item }
} 

export const removeFeature = item => {
    return { type: REMOVE_FEATURE, payload: item }
} 

export const updatePrice = () => {
    return { type: UPDATE_PRICE }
}

export const setData = data => {
    return { type: SET_CAR, payload: data }
}