import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {
  Link,
} from 'react-router-dom';

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

class FormRow extends Component {


 render(){
  const {url , id, price} = this.props.item;
  const { classes } = this.props;
  console.log(this.props.item);
  return (
      <div className={classes.root}>
        <Grid item xs={4} spacing={10}>
          <img src={url} alt="Pic"  className={classes.image}/>
            <Typography variant="title" color="inherit" noWrap>
              Men Shirt
              <Divider />
            <Typography variant ="caption">
              Price: {price}
              <Link to={`/women/${id}`}>
                  <Button>
                    Buy
                  </Button>
              </Link>
        </Typography>
      </Typography>
   </Grid>
</div>

  );
}
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormRow);
