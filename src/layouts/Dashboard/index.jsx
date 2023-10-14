import React, { useState } from 'react';
import { Fragment } from 'react';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';

// Material helpers
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

// Material components
import Drawer from '@material-ui/core/Drawer';

// Custom components
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

// Component styles
import styles from './styles';

const DashboardLayout = (props) => {
  const { classes, width, title, children } = props;
  const isMobile = ['xs', 'sm', 'md'].includes(width);

  const [isOpen, setIsOpen] = useState(!isMobile);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const shiftTopbar = isOpen && !isMobile;
  const shiftContent = isOpen && !isMobile;

  return (
    <Fragment>
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar,
        })}
        isSidebarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
        title={title}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        onClose={handleClose}
        open={isOpen}
        variant={isMobile ? 'temporary' : 'persistent'}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent,
        })}
      >
        {children}
      </main>
    </Fragment>
  );
};

export default compose(withStyles(styles), withWidth())(DashboardLayout);
