import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    width: 0,
    height: 300
  }
});

/**
 * Renders/demos Vertical Slider.
 *
 * @author Hari Gangadharan
 */
class VerticalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 56
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <div>
          Value:
          {value}
        </div>
        <div className={this.props.classes.root}>
          <Slider
            orientation="vertical"
            value={value}
            min={0}
            max={100}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VerticalSlider);
