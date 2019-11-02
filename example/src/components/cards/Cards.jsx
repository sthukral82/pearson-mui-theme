import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { CardList } from 'pearson-mui-theme';

const styles = () => ({
  card: {
    width: 362
  }
});
/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */
const Cards = ({ classes }) => (
  <div>
    <CardList>
      <Typography variant="h3">Recently Visited</Typography>
    </CardList>
    <CardList>
      <Card className={classes.card}>
        <CardActionArea
          onClick={
            () => {
              // do some work
            }
          }
        >
          <CardContent>
            1.1-1.2 The History of Psychology
          </CardContent>
          <CardActions>
            <div>JUNE 14, 2019 03:32 PM</div>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          1.5-1.9 The Scientific Research
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:37 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
    </CardList>
  </div>
);

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
