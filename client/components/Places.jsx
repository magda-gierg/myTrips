import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import AddIcon from 'material-ui-icons/Add';


const styleSheet = createStyleSheet(theme => ({
  card: {
    maxWidth: 250,
    padding: 16,
    margin: 10
  },
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    position: 'fixed',
        right: '50px',
        bottom: '50px',

 }
}));

function SimpleMediaCard(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={40}>
        {props.places.map((place, key) => {

          const id = place.id.toString()
          return <div key={key}>
  <Grid item xs>
      <Card className={classes.card}>
        <CardMedia>
          <img src={place.image} alt="Contemplative Reptile" height="150 "width="250"/>
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {place.place}
          </Typography>


        </CardContent>
        <CardActions>
   <Link to={"/places/" + place.id}>{place.place}</Link>
            <button onClick={() => props.deletePlace(place.id)} >Delete</button>
          <Button dense color="primary" href={"/#/places/" + id}>
            Details
          </Button>
        </CardActions>
      </Card>
              <Link to="/places/new">Add new</Link>
      </Grid>
      </div>
})
    }
</Grid>
<Button fab color="primary" className={classes.button}>
       <AddIcon />
     </Button>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleMediaCard);
