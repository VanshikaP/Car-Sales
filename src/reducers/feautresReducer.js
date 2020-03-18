import { ADD_FEATURE, REMOVE_FEATURE, UPDATE_PRICE, SET_CAR } from '../actions/featuresAction'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
  };

  export const featuresReducer = (state = initialState, action) => {
      switch(action.type) {
        case ADD_FEATURE:
            console.log('Adding feature: ', action.payload)
            return {
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(f => f.name !== action.payload.name)
            }
        case REMOVE_FEATURE:
            console.log('Removing feature: ', action.payload)
            return{
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(f => f.name !== action.payload.name)
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        case UPDATE_PRICE:
            return {
                ...state,
                additionalPrice: state.car.features.map(f => f.price).reduce((a,b) => a+b, 0)
            }
        case SET_CAR:
            return {
                ...action.payload
            }
        default:
            return state
      }
  }