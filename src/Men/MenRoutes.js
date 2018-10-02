import React, { Component } from 'react';
import Product from './Products.js';
import Child from '../Id.js';
import {
  Route,
  Switch,
} from 'react-router-dom';


class MenRoutes extends Component {


    render() {
      console.log(this.props);

        return (
          <Switch>
            <Route path="/:men" exact component={Product} />
            <Route path={`${this.props.match}/:id`} exact component={Child} />
          </Switch>
        )
     }
}

export default MenRoutes;



// <Route path="/women" exact component={()=><Product result = {this.props.changeUsername}/>} />
  // <Route path="/:men" exact component={(props)=><Product {...props} result = {this.props.changeUsername}/>} />
  //
  // onClick = (counter) => {
  //  console.log('clicked : ', counter);
  //  // this.prop.onClick()
  // }
