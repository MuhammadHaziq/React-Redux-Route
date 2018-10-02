import React,{Component} from 'react';
import ProductDisplay from './ProductDisplay.js';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

class Product extends Component{


  render() {

              console.log(this.props.location.pathname);
              if(this.props.location.pathname == '/men'){
                    console.log('hello');
                }else{
                    console.log('hey');
                }
    //  const { classes } = this.props;

     const MenProductArray = [
              {url:'Men/Parental-Guidance-DI-DI-to-CW.jpg', id:'1', price:'2000'},
              {url:'Men/IMG_5258-EMTPS-17-023.jpg', id:'2', price:'2000'},
              {url:'Men/IMG_5258-EMTPS-17-023.jpg', id:'3', price:'2000'},
              {url:'Men/ts1802-4.jpg', id:'4', price:'2000'},
              {url:'Men/ts1803-3_-_2495...jpg', id:'5', price:'2000'},
              {url:'Men/wtsh801-3c_-_1495..jpg', id:'6', price:'2000'}

     ];

     const WomenProductArray = [
             {url:"Women/images.jpeg", id:"1", price:"2000"},
             {url:"Women/images1.jpeg", id:"2", price:"2000"},
             {url:"Women/images2.jpeg", id:"3", price:"2000"},
             {url:"Women/index.jpeg", id:"4", price:"2000"}

     ];

     return (
      <div className="images">
       {

           MenProductArray.map((item)=><ProductDisplay key={item.id} item = {item} />)

       }
     </div>
     );
  }
}

 export default Product;
 // if({window.location.href} == "http://localhost:3000/men")
 // {
 //   MenProductArray.map((item)=><ProductDisplay key={item.id} onClick={this.onClick} count = {this.props.result} item = {item} />)
 // }else{
 //     WomenProductArray.map((item)=><ProductDisplay key={item.id} onClick={this.onClick} count = {this.props.result} item = {item} />)
 // // }
