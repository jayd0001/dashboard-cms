import React from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  AccountBalanceWalletOutlined as IncomeIcon,
  DiscFullOutlined as PromoteIcon,
  HelpOutline as HelpIcon,
  ExpandMore as ChevronDownIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

function Sidebar(props) {
  const { classes, className } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        
        <Link className={classes.logoLink} to="/">
          <img
            alt="logo"
            className={classes.logoImage}
            src="/images/logos/dashboard_logo.svg"
          />
        </Link>
      </div>
      <Divider className={classes.listDivider} />

      <List component="div" disablePadding>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component="a"
          target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Dashboard"
          />
        </ListItem>
        <ListItem className={classes.listItem} component="a" target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Product"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component="a"
          target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Customers"
          />
        </ListItem>

        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component="a"
          target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <IncomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Income"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component="a"
          target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <PromoteIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Promote"
          />
        </ListItem>
        <ListItem className={classes.listItem} component="a" target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Help"
          />
        </ListItem>
      </List>
      <Divider className={classes.listDivider} />
      <List
        component="div"
        disablePadding
        subheader={
          <ListSubheader className={classes.listSubheader}>
            Profile
          </ListSubheader>
        }>
        <ListItem className={classes.listItem} component="a" target="_blank">
          <ListItemIcon className={classes.listItemIcon}>
            <Avatar>E</Avatar>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Evano"
          />
          <ChevronDownIcon style={{ marginLeft: '10px' }} />
        </ListItem>
      </List>
    </nav>
  );
}

export default withStyles(styles)(Sidebar);