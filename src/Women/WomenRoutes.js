import React from 'react';
import WomenProduct from './WomenProducts.js';
import Child from '../Id.js';
import {
  Route,
  Switch
} from 'react-router-dom';


const WomenRoute = (props) =>
  <Switch>
    <Route path={`${props.match.url}/`} exact component={WomenProduct} />
    <Route path={`${props.match.url}/:id`} exact component={Child} />
  </Switch>

export default WomenRoute;
