import React from 'react';
import classNames from 'classnames';

import { Bar } from 'react-chartjs-2';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Portlet from 'components/Portlet';
import PortletContent from 'components/PortletContent';
import PortletFooter from 'components/PortletFooter';

import { data, options } from './chart';
import styles from './styles';

function TabsChart(props) {
  const { classes, className, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <Portlet {...rest} className={rootClassName}>
      <PortletContent noPadding>
        <div className={classes.details}>
          <div className={classes.summary}>
            <Typography variant="h4">Overview</Typography>
          </div>

        </div>
        <div className={classes.chart}>
          <Bar data={data} options={options} />
        </div>
      </PortletContent>
      <PortletFooter className={classes.portletFooter}>
        <Button variant="text">
          Last 7 days <ArrowDropDownIcon />
        </Button>
        <Button color="primary" variant="text">
          Customers <ArrowRightIcon />
        </Button>
      </PortletFooter>
    </Portlet>
  );
}



export default withStyles(styles)(TabsChart);
