import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

import { mailFolderListItems } from './tileData';
import './Navbar.css';

// Routing
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Auth from '../Auth/Auth';
import ErrorPage from '../../_error';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    marginLeft:-8
  },
  
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    backgroundColor:'#212121',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 12px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
});

class Navbar extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            
              {this.state.open ?
              <span>
              <span className="brand">Asynchroid</span>
              <IconButton style={{outline:"none",color:"white"}} 
              onClick={this.handleDrawerClose}>
               <ChevronLeftIcon  /> 
               </IconButton>
               </span>: 
               <IconButton style={{outline:"none",color:"white"}}
               onClick={this.handleDrawerOpen} >
               <MenuIcon />
               </IconButton>}
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/Auth" component={Auth}/>
            <Route component={ErrorPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);
