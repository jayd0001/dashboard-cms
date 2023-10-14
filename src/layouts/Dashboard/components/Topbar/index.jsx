import React, { Fragment } from 'react';
// import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import SignoutIcon from '@material-ui/icons/ExitToAppOutlined';

import styles from './styles';

const Topbar = ({
  classes,
  className,
  title,
  isSidebarOpen,
  onToggleSidebar
}) => {
  const rootClassName = classNames(classes.root, className);

  return (
    <Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <IconButton className={classes.notificationsButton}>
            <Badge color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton}>
            <SignoutIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Fragment>
  );
};

export default compose(withStyles(styles))(Topbar);
