import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Shared components
import Paper from '../Paper';

// Component styles
const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Portlet = (props) => {
  const { classes, className, children, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <Paper
      {...rest}
      className={rootClassName}
      elevation={0}
      outlined
      squared={false}
    >
      {children}
    </Paper>
  );
};

export default withStyles(styles)(Portlet);
