import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
  },
});

const PortletToolbar = (props) => {
  const { classes, className, children, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div {...rest} className={rootClassName}>
      {children}
    </div>
  );
};

export default withStyles(styles)(PortletToolbar);
