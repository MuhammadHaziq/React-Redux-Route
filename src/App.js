import React, { Component } from 'react';
import MainLayout from './Layout/MainLayout.js';
import Product from './Men/Products.js';
import WomenProduct from './Women/WomenProducts.js';
import Child from './Id.js';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import MenRoutes from './Men/MenRoutes';
import WomenRoute from './Women/WomenRoutes.js';
import {connect} from 'react-redux';
import Main from './Layout/Main.js';
import User from './Layout/User.js';
import Increment from './Action/MathAction.js';
class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MainLayout resul = {this.props.math.result}>
            <Switch>
                <Route path="/" exact component={() => 'Hello World'} />
                <Route path="/men" component={MenRoutes}/>
                <Route path="/women" component={MenRoutes}/>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </div>
    );
  }
}

 const mapStatetoProps = (state)=> {
   return{
           math:state.math,
           user:state.user
         };
    };

 const mapDispatchToProps= (dispatch) => {
   return{

            setName: () => dispatch({ type: 'Increment' }),

          }
   };


export default connect(mapStatetoProps,mapDispatchToProps)(App);





// <Main changeUsername ={()=>this.props.setName("Anan")} />
//  <User resul = {this.props.user.name} />
// //<Route path="/men" component={MenRoutes}/>
// <Route path="/men" exact component={() => <Product changeUsername ={()=>this.props.setName("Anan")}  /> }/>
// <Route path="/women" component={WomenRoute} />
//
// onClick = (counter) => {
//  // state
//  this.setState({
//   counter:this.state.counter++
//  })
//  console.log('click', counter);
//  }

// react component lifecycle : THE MOST IMPORTANT TOPIC
