import React, {useReducer} from 'react';
import { connect } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import { featuresReducer, initialState } from './reducers/feautresReducer'
import { addFeature, removeFeature, updatePrice } from './actions/featuresAction';




export const App = props => {

  // const [{ additionalPrice, car, additionalFeatures}, dispatch] = useReducer(featuresReducer, initialState)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // dispatch({ type: REMOVE_FEATURE, payload: item });
    props.removeFeature(item)
    props.updatePrice()
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // dispatch({ type: ADD_FEATURE, payload: item });
    props.addFeature(item)
    props.updatePrice()
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(
  mapStateToProps,
  { addFeature, removeFeature, updatePrice }
)(App)
