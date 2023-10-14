import React, { useState, useEffect } from 'react';


import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import DashboardLayout from 'layouts/Dashboard';

// Custom components
import Budget from './components/Budget';
import Users from './components/Users';
import Progress from './components/Progress';
import Profit from './components/Profit';
import SalesChart from './components/SalesChart';
import DevicesChart from './components/DevicesChart';
import ProductList from './components/ProductList';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

const Dashboard = ({ classes }) => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    // Fetch sales data from an API
    fetch('/api/sales')
      .then(response => response.json())
      .then(data => setSalesData(data));
  }, []);

  return (
    <DashboardLayout title="Hi Shahrukh!">
      <div className={classes.root}>
        <Grid container spacing={32}>
          <Grid item sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item sm={6} xl={3} xs={12}>
            <Users />
          </Grid>
          <Grid item sm={6} xl={3} xs={12}>
            <Progress />
          </Grid>
          <Grid item sm={6} xl={3} xs={12}>
            <Profit />
          </Grid>
          <Grid item lg={7} sm={12} md={12} xl={8} xs={12}>
            <SalesChart className={classes.item} data={salesData} />
          </Grid>
          <Grid item lg={5} sm={12} md={12} xl={4} xs={12}>
            <DevicesChart className={classes.item} />
          </Grid>
          <Grid item lg={12} sm={12} md={12} xl={12} xs={12}>
            <ProductList className={classes.item} />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
};



export default withStyles(styles)(Dashboard);
