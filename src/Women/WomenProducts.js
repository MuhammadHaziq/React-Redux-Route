import React,{Component} from 'react';
import FormRow from './GridImages.js';
class WomenProduct extends Component{


render(){
  //  const { classes } = this.props;
   const WomenProductArray = [
     {url:"Women/images.jpeg", id:"1", price:"2000"},
     {url:"Women/images1.jpeg", id:"2", price:"2000"},
     {url:"Women/images2.jpeg", id:"3", price:"2000"},
     {url:"Women/index.jpeg", id:"4", price:"2000"}

   ];

   return (
    <div className="images">
     {

        WomenProductArray.map((item)=><FormRow key={item.id} item = {item} />)

      }
      </div>
   );
   }
 }
 
 export default WomenProduct;
