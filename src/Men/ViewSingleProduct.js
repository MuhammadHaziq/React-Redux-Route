import React,{Component} from 'react';
import MenProduct from './MenProducts.js';

class FindProduct extends Component{


 render(){
   const id = this.props.match.params.id
   console.log(this.props.match.params.id);
//   //  const { classes } = this.props;
   const MenProductArray = [
            {url:'Men/Parental-Guidance-DI-DI-to-CW.jpg', id:'1', price:'2000'},
            {url:'Men/IMG_5258-EMTPS-17-023.jpg', id:'2', price:'2000'},
            {url:'Men/IMG_5258-EMTPS-17-023.jpg', id:'3', price:'2000'},
            {url:'Men/ts1802-4.jpg', id:'4', price:'2000'},
            {url:'Men/ts1803-3_-_2495...jpg', id:'5', price:'2000'},
            {url:'Men/wtsh801-3c_-_1495..jpg', id:'6', price:'2000'}

   ];

   return (
    <div className="images">
     {

       MenProductArray.find(k => k == {id}); 

     }
   </div>
   );
   }
 }

 export default FindProduct;
