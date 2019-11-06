import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { withStyles } from '@material-ui/core/styles';
import { CardList } from 'pearson-mui-theme';

const styles = () => ({
  card: {
    width: 362
  },
  button: {
    marginBottom: 24
  },
  clickableCards: {
    marginBottom: 32
  }
});
/**
 * Renders/demos Cards with Click Actions.
 *
 * @author Hari Gangadharan
 */
const Cards = ({ classes }) => (
  <div className={classes.clickableCards}>
    <CardList>
      <Button
        variant="text"
        color="default"
        className={classes.button}
        onClick={() => { alert('Clicked!'); }} /* eslint-disable-line no-undef */ /* eslint-disable-line no-alert */
      >
        <Card className={classes.card}>
          <CardContent>
            1.1-1.2 The History of Psychology
          </CardContent>
          <CardActions>
            <div>JUNE 14, 2019 03:32 PM</div>
          </CardActions>
        </Card>
      </Button>
      <Button
        variant="text"
        color="default"
        className={classes.button}
        onClick={() => { alert('Clicked!'); }} /* eslint-disable-line no-undef */ /* eslint-disable-line no-alert */
      >
        <Card className={classes.card}>
          <CardContent>
            1.5-1.9 The Scientific Research
          </CardContent>
          <CardActions>
            <div>JUNE 14, 2019 03:37 PM</div>
          </CardActions>
        </Card>
      </Button>
      <Card className={`${classes.card} ${classes.button}`}>
        <CardActionArea
          onClick={() => { alert('Clicked!'); }} /* eslint-disable-line no-undef */ /* eslint-disable-line no-alert */
        >
          <CardContent>
            1.10-1.11 Ethics of Psychology
          </CardContent>
          <CardActions>
            <div>JUNE 14, 2019 03:39 PM</div>
          </CardActions>
        </CardActionArea>
      </Card>
    </CardList>
  </div>
);

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
