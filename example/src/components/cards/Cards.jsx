import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { CardList, Icon } from 'pearson-mui-theme';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  card: {
    width: 362,
    marginBottom: 24
  },
  simpleCards: {
    marginBottom: 32,
    marginTop: 32
  },
  dateAndTime: {
    fontSize: 12,
    color: theme.palette.text.primary,
    paddingLeft: 10,
    letterSpacing: -0.07
  }
});
/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */
const Cards = ({ classes }) => (
  <div className={classes.simpleCards}>
    <CardList>
      <Typography variant="h3">Recently Visited</Typography>
    </CardList>
    <CardList>
      <Card className={classes.card}>
        <CardHeader
          className="small"
          action={(
            <IconButton>
              <Icon name="MoreVert" />
            </IconButton>
          )}
          title="1.1-1.2 The History of Psychologyssss"
        />
        <CardActions>
          <div className={classes.dateAndTime}>JUNE 14, 2019 03:32 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          1.5-1.9 The Scientific Research
        </CardContent>
        <CardActions>
          <div className={classes.dateAndTime}>JUNE 14, 2019 03:37 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div className={classes.dateAndTime}>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
    </CardList>
  </div>
);

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
