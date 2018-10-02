import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';
import Child from '../Id.js'
import MainLayout from '../Layout/MainLayout.js';
import mathReducer from '../Action/MathAction';
import store from '../Store/Store.js';
import {connect} from 'react-redux';
import Increment from '../Action/MathAction.js';
const styles = theme => ({
  root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
  marginTop:5,
  backgroundColor: theme.palette.background.paper,
    },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image:{
    width:150,
    height:150,

  },
});
class ProductDisplay extends Component {


  constructor(props) {
    super(props);
    this.state = {
        counter:0,
    };
  }

   onclick = () => {
    this.setState({
      count: this.state.counter++
    });
    this.props.onClick(this.state.counter, this.props.item.id)
  }

 render(){
  const { url , id, price } = this.props.item;
  const { classes } = this.props;
  console.log(store.getState().math);
  // dispatch({ type: 'Increment' });
  // store.dispatch({
  //   type:"Increment",
  // });
        return (

                <div>
                  <div className={classes.root}>
                    <Grid item conatiner  xs={4} spacing={10}>
                      <img src={url} alt="Pic"  className={classes.image}/>
                        <Typography variant="title" color="inherit" noWrap>
                          Men Shirt {this.state.counter}
                          <Divider />
                          <Typography variant ="caption">
                            Price: {price}
                            <button onClick={()=>this.props.setName()}>
                              Add To WishList
                            </button>
                          </Typography>
                        </Typography>
                    </Grid>
                  </div>
                </div>
        );
     }
}

ProductDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStatetoProps = (state) => {
  return {
          math:state.math,
        };
   };

const mapDispatchToProps = (dispatch) => {
  return {
    setName: () => dispatch({ type: 'Increment' }),
  };
};

const StyledProductDisplay = withStyles(styles)(ProductDisplay);
export default connect(mapStatetoProps,mapDispatchToProps)(StyledProductDisplay);

//console.log(this.props.item);
// console.log(this.state.counter);
// console.log(this.props.changeUsername);
