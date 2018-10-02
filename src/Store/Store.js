import React,{Component} from 'react';
import { createStore, combineReducers } from 'redux';
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
import mathReducer from '../Reducer/MathReducer';
import userReducer from '../Reducer/UserReducer';

const myLogger = (store) => (next) => (action)=>{
  console.log("Logged action", action);
  next(action);
};
  const store = createStore(combineReducers({math:mathReducer,user:userReducer}),{},applyMiddleware(myLogger));
export default store;
