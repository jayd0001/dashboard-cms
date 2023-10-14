import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import Paper from 'components/Paper';
import styles from './styles';

function Budget(props) {
  const { classes, className, ...rest } = props;
  const rootClassName = classNames(classes.root, className);

  return (
    <Paper {...rest} className={rootClassName}>
      <div className={classes.content}>
        <Typography className={classes.title} variant="body2">
          EARNINGS
        </Typography>
        <div className={classes.details}>
          <Typography variant="h3">$24,000</Typography>
          <Typography className={classes.difference} variant="body2">
            <ArrowDropDownIcon />
            12%
          </Typography>
        </div>
      </div>
      <div className={classes.iconWrapper}>
        <MoneyOutlinedIcon className={classes.icon} />
      </div>
    </Paper>
  );
}



export default withStyles(styles)(Budget);
