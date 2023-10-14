import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Typography from '@material-ui/core/Typography';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

// Shared components
import Paper from 'components/Paper';

// Component styles
import styles from './styles';

const Profit = (props) => {
  const { classes, className, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <Paper {...rest} className={rootClassName}>
      <div className={classes.content}>
        <Typography className={classes.title} variant="body2">
          TOTAL PROFIT
        </Typography>
        <div className={classes.details}>
          <Typography className={classes.amount} variant="h3">
            $23,200
          </Typography>
        </div>
      </div>
      <div className={classes.iconWrapper}>
        <MonetizationOnOutlinedIcon className={classes.icon} />
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Profit);
