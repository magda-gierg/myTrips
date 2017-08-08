import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { withStyles, createStyleSheet } from "material-ui/styles"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"


const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  })
}));

class Place extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    };
  }

  render() {
    const classes = this.props.classes;

    const { id, place, date, description, image } = this.props.place;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="headline" component="h3">
            {place}
          </Typography>
          <Typography type="body1" component="p">
            {date}
          </Typography>
          <Typography type="body1" component="p">
            {description}{" "}
          </Typography>
          <Typography type="body1" component="p">
            <img src={image} width="500px" height="300px" />{" "}
            </Typography>
            <Typography type="body1" component="p">
              <Link to="/">HOME</Link>
            </Typography>
          </Paper>
        </div>
      );
    }
  }

  Place.defaultProps = {
    place: {
      place: "",
      date: "",
      id: null,
      description: ""
    }
  };

  Place.propTypes = {
    classes: PropTypes.object.isRequired
  };

  export default withStyles(styleSheet)(Place);
