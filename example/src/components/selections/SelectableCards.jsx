import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { CardList, Icon } from '@greenville/mui-theme';


const styles = () => ({
  card: {
    width: 362,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 24
  }
});

/**
 * Renders/demos Selectable Cards.
 *
 * @author Hari Gangadharan
 */
class SelectableCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedA: false,
      checkedB: true,
      checkedC: false,
      checkedD: false
    };
  }

  handleChange = name => (event, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.selectableCards}>
        <CardList>
          <Card className={classes.card}>
            <CardHeader
              className="small"
              action={(
                <IconButton>
                  <Icon name="MoreVert" />
                </IconButton>
              )}
              title="Shrimp and Chorizo Paella September 14, 2016 and long header that will not stop here   "
            />
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Checkbox
                checked={this.state.checkedA}
                icon={<Icon name="CircleOutline" />}
                checkedIcon={<Icon name="CheckCircleFilled" />}
                onChange={this.handleChange('checkedA')}
                value="checkedB"
                color="primary"
              />
              <div>JUNE 14, 2019</div>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
              <Divider />
            </CardContent>
            <CardActions>
              <Checkbox
                checked={this.state.checkedB}
                icon={<Icon name="CircleOutline" />}
                checkedIcon={<Icon name="CheckCircleFilled" />}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
            <CardActions>
              <Checkbox
                checked={this.state.checkedC}
                icon={<Icon name="CircleOutline" />}
                checkedIcon={<Icon name="CheckCircleFilled" />}
                onChange={this.handleChange('checkedC')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <FormLabel component="legend">
                How did European scientists and writers in the nineteenth century attempt to make sense of
                the differences in the appearance and behavior they observed between themselves and non-Europeans?
              </FormLabel>
            </CardContent>
            <CardActions>
              <Checkbox
                checked={this.state.checkedD}
                icon={<Icon name="CircleOutline" />}
                checkedIcon={<Icon name="CheckCircleFilled" />}
                onChange={this.handleChange('checkedD')}
                value="checkedB"
                color="primary"
              />
            </CardActions>
          </Card>
        </CardList>
      </div>
    );
  }
}

SelectableCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectableCards);
