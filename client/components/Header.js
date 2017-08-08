import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from "react-router-dom";

const styleSheet = createStyleSheet({
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography type="title" color="inherit" className={classes.flex}>
            My places
          </Typography>
          <Button color="contrast" href="#">List</Button>
          <Button color="contrast" href="#/map">Map</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);
