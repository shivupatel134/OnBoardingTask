import React from 'react';
import './App.css';

import {BrowserRouter, Route,Switch } from 'react-router-dom'

import {Customer} from './Components/Customer/Customer'
import {Product } from './Components/Product/Product';
import {Store} from './Components/Store/store';
import {Sales} from './Components/Sales/sales';
import {Navigation} from './Components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <switch>
        <Route path='/' component={Customer} exact></Route>
        <Route path='/Customer/customer' component={Customer}></Route>
        <Route path='/Product/product' component={Product}></Route>
        <Route path='/Store/store' component={Store}></Route>
        <Route path='/Sales/sales' component={Sales}></Route>
      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
