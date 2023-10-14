import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Paper from '@material-ui/core/Paper';

// Component styles
const styles = (theme) => ({
  root: {
    borderRadius: '4px',
  },
  squared: {
    borderRadius: 0,
  },
  outlined: {
    border: `1px solid ${theme.palette.border}`,
  },
});

const CustomPaper = (props) => {
  const {
    classes,
    className,
    outlined,
    squared,
    children,
    ...rest
  } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined,
    },
    className
  );

  return <Paper {...rest} className={rootClassName}>{children}</Paper>;
};

export default withStyles(styles)(CustomPaper);
