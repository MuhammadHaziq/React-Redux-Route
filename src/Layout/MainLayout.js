import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  BrowserRouter,
  Link,
} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Main from './Main.js';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  badge: {
    top: 1,
    right: -25,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
  bage:{
    right:-700,
  }
});


class MainLayout extends Component {


  render(){
  let { classes } = this.props;

console.log(this.props.resul);
    return (
      <BrowserRouter>
          <div className={classes.root}>
              <AppBar position="absolute" className={classes.appBar}>
                  <Toolbar>
                      <Typography variant="title" color="inherit" noWrap>
                        Clipped drawer
                      </Typography>
                          <IconButton aria-label="Cart" className={classes.bage}>
                            <Badge badgeContent={this.props.resul} color="primary" classes={{ badge: classes.badge }}>
                              <ShoppingCartIcon />
                            </Badge>
                          </IconButton>
                    </Toolbar>
                </AppBar>
                      <Drawer
                        variant="permanent"
                        classes={{
                          paper: classes.drawerPaper,
                        }}
                      >
                          <div className={classes.toolbar} />
                                <List component="nav">
                                  <ListItem button>
                                    <Link to="/men" className={classes.links}><ListItemText primary="Men" /></Link>
                                  </ListItem>
                                <ListItem button>
                                  <Link to="/women" className={classes.links}><ListItemText primary="Women" /></Link>
                                </ListItem>
                            </List>
                                    <Divider />

                       </Drawer>
                            <main className={classes.content}>
                                <div className={classes.toolbar} />
                                    <Typography noWrap>{this.props.children}</Typography>
                            </main>
                              </div>
        </BrowserRouter>
           );
       }
 }

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLayout);
