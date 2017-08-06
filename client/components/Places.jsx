import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles"
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card"
import Button from "material-ui/Button"
import IconButton from 'material-ui/IconButton'
import Typography from "material-ui/Typography"
import Grid from "material-ui/Grid"
import AddIcon from "material-ui-icons/Add"
import DeleteIcon from 'material-ui-icons/Delete';

const styleSheet = createStyleSheet(theme => ({
  card: {
    maxWidth: 250,
    padding: 16,
    margin: 10
  },
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    position: "fixed",
    right: "50px",
    bottom: "50px"
  },
  iButton: {
    margin: theme.spacing.unit,
  }
}));

function displayPlaces(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container>

        {props.places.map((place, key) => {
          const id = place.id.toString();
          return (
            <div key={key}>

              <Grid item xs>
                <Card className={classes.card}>
                  <CardMedia>
                    <img
                      src={place.image}
                      alt={place.place}
                      height="150 "
                      width="250"
                      />
                  </CardMedia>
                  <CardContent>
                    <Typography type="headline" component="h2">
                      {place.place}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button dense color="primary" >
                      <Link to={"/places/" + id}>Details</Link>
                    </Button>

                    <IconButton className={classes.iButton} aria-label="Delete" onClick={() => props.deletePlace(place.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </div>
          );
        })}
      </Grid>
      <Button fab color="primary" className={classes.button} href="/#/places/new">
        <AddIcon />
      </Button>
    </div>
  );
}

displayPlaces.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(displayPlaces);



// https://material-ui-1dab0.firebaseapp.com/component-demos/cards
// https://material-ui-1dab0.firebaseapp.com/layout/grid
