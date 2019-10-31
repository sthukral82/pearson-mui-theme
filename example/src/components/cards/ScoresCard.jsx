import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  card: {
    width: 941,
    backgroundColor: "#ffffff",
  },
  paddginZero:theme.overrides.CustomCard.paddginZero,
  cardContentHeader:theme.overrides.CustomCard.cardContentHeader,
  flexContainer:theme.overrides.CustomCard.flexContainer,
  cardLeftContent:theme.overrides.CustomCard.cardLeftContent,
  cardCenterContent:theme.overrides.CustomCard.cardCenterContent,
  scoreCardCenterContent:theme.overrides.CustomCard.scoreCardCenterContent,
  cardActionCenterContent:theme.overrides.CustomCard.cardActionCenterContent,
  scoreCardRightContent:theme.overrides.CustomCard.scoreCardRightContent,
  smallContent:theme.overrides.CustomCard.smallContent,
  hrLine:theme.overrides.CustomCard.hrLine,
  vrLine: theme.overrides.CustomCard.vrLine,
  cardDarkColor:theme.overrides.CustomCard.cardDarkColor,
  scoreCard:theme.overrides.CustomCard.scoreCard
});

class ScoresCard extends React.Component {
    render() {
        const {classes} = this.props;
    return (
        <Card className={`${classes.card} ${classes.OverrideCardWidth} ${classes.paddginZero} ${classes.cardDarkColor}`}   tabIndex='0'>
        <CardContent >
          <div className={classes.flexContainer}>
            <div className={classes.cardLeftContent}>
              <div>Mar 18</div>
              <div className={classes.smallContent}>11:59 pm EDT</div>
            </div>
            <div className={classes.vrLine}></div>
            <div className={`${classes.cardCenterContent} ${classes.scoreCardCenterContent}`}>
              <div>7: Cognition: Thinking, Intelligence, and Language</div>
              <div className={classes.smallContent}>Incomplete</div>
            </div>
            <div className={classes.scoreCardRightContent}>
                <div className={classes.scoreCard}>184/205</div>
                <div className={classes.smallContent}>POINTS EARNED</div>
              </div>
          </div>
          {/* <div className={classes.hrLine}></div> */}
        </CardContent>
        {/* <CardActions>
            <div className={classes.flexContainer}>
              <div className={classes.cardLeftContent}></div>
              <div className={classes.cardActionCenterContent}>

              </div>
              <div className={classes.cardActionRightContent}>
                <div className={classes.scoreCard}>184/205</div>
                <div className={classes.smallContent}>POINTS EARNED</div>
              </div>
            </div>
        </CardActions> */}
      </Card>
    )
    }
}
ScoresCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ScoresCard);



