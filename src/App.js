import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import carData from './carData'
import Car from './components/Car'

export const App = () => {
  console.log(carData)
  return (
    <BrowserRouter>
      <div className="nav-link-container">
        <Link className='nav-link' to='/Car2'>Prius</Link>
        <Link className='nav-link' to='/'>Mustang</Link>
      </div>
      <Route exact path='/'>
        <Car data={carData[0]} />
      </Route>
      <Route exact path='/Car2'>
        <Car data={carData[1]} />
      </Route>
    </BrowserRouter>
  );
};

export default App
