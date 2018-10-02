import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
import store from './Store/Store.js';












 ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>, document.getElementById('root'));
registerServiceWorker();

// const myLogger = (store) => (next) => (action)=>{
//   console.log("Logged action", action);
//   next(action);
// };

// // store.subscribe(()=>{
// // // console.log(store.getState());
// });
// store.dispatch({
//
//   type:"ADD",
//   payload:100
// });
// store.dispatch({
//
//   type:"SET_NAME",
//   payload:"HAZIW"
// });

//
// const userReducer = (state = {
// name:"MAX",
// data:[]
// },action)=>{
//   switch (action.type) {
//     case "SET_NAME":
//     state = {
//           ...state,
//           name: action.payload,
//          //data:[...state.data ,action.payload]
//     }
//       break;
// }
// return state;
//   };
//
//   const mathReducer = (state = {
//   result:0,
//   data:[]
//   },action)=>{
//     switch (action.type) {
//       case "Increment":
//       state = {
//         ...state,
//             result: state.result + 1,
//            //data:[...state.data ,action.payload]
//       }
//         break;
//   }
//   return state;
//     };
//
//     const myLogger = (store) => (next) => (action)=>{
//       console.log("Logged action", action);
//       next(action);
//     };
//     const store = createStore(combineReducers({math:mathReducer,user:userReducer}),{},applyMiddleware(myLogger));
//
//     store.subscribe(()=>{
//     console.log(store.getState());
//     });
//
//     store.dispatch({
//       type:"Increment",
//     });
