import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import CodeBlock from './CodeBlock';
import GithubIcon from './GithubIcon';
import MarkdownContainer from './MarkdownContainer';
import ComponentLoader from './ComponentLoader';

const GITHUB_RAW_PATH = 'https://raw.githubusercontent.com/Pearson-Higher-Ed/pearson-mui-theme';
const GITHUB_CODE_PATH = 'https://github.com/Pearson-Higher-Ed/pearson-mui-theme/blob';
const REPO_RELATIVE_PATH = 'develop/example/src/components';

const styles = theme => createStyles({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: 620,
    [theme.breakpoints.only('xs')]: {
      margin: theme.spacing(1)
    }
  },
  '@media (max-width: 740px)': {
    root: {
      margin: theme.spacing(1)
    }
  },
  renderer: {
    '& .header': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
  }
});

/**
 * A Component that can render the provided sample code snippet. It also use the MarkdownContainer to load the
 * documentation associated with this sample code.
 *
 * @author Hari Gangadharan
 */
class CodeRenderer extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    outside: PropTypes.bool
  };

  static defaultProps = {
    outside: false
  };

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      repoCodePath: '',
      showCode: false
    };
  }

  componentDidMount() {
    const name = this.props.name;
    const rawCodePath = `${GITHUB_RAW_PATH}/${REPO_RELATIVE_PATH}/${name}.jsx`;
    const repoCodePath = `${GITHUB_CODE_PATH}/${REPO_RELATIVE_PATH}/${name}.jsx`;
    axios.get(rawCodePath).then(
      (response) => {
        const code = response.data;
        this.setState({ code, repoCodePath });
      }
    );
  }

  handleCodeClick = () => {
    this.setState(prevState => ({ showCode: !prevState.showCode }));
  };

  handleGithubClick = () => {
    window.open(this.state.repoCodePath, '_blank');
  };

  renderCodeBlock = () => (
    this.state.showCode ? (
      <div className="code-block">
        <CodeBlock language="javascript" value={this.state.code} />
      </div>
    ) : null
  );

  render() {
    const { classes, name, outside } = this.props;
    return (
      <div className={classes.renderer}>
        <Paper className={classes.root} elevation={1}>
          <MarkdownContainer name={name} />
          <div className="header">
            <IconButton className={classes.button} aria-label="See Code" onClick={this.handleGithubClick}>
              <GithubIcon fontSize="large" />
            </IconButton>
            <IconButton className={classes.button} aria-label="See Code" onClick={this.handleCodeClick}>
              <CodeIcon fontSize="large" />
            </IconButton>
          </div>
          {this.renderCodeBlock()}
          <div>
            {outside ? null : <ComponentLoader name={name} />}
          </div>
        </Paper>
        {outside ? <ComponentLoader name={name} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(CodeRenderer);
