import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import classNames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import { PersonAddOutlined } from '@material-ui/icons';
import Portlet from 'components/Portlet';
import PortletHeader from 'components/PortletHeader';
import PortletLabel from 'components/PortletLabel';
import PortletToolbar from 'components/PortletToolbar';
import PortletContent from 'components/PortletContent';
import palette from 'theme/palette';
import { data, options } from './chart';
import styles from './styles';

function DevicesChart(props) {
  const { classes, className, ...rest } = props;
  const rootClassName = classNames(classes.root, className);

  return (
    <Portlet {...rest} className={rootClassName}>
      <PortletHeader noDivider>
        <PortletLabel icon={<PersonAddOutlined />} title="Customers" />
        <PortletToolbar>
          <IconButton className={classes.refreshButton} variant="text">
            <RefreshIcon />
          </IconButton>
        </PortletToolbar>
      </PortletHeader>
      <PortletContent>
        <PerfectScrollbar>
          <div className={classes.chart}>
            <Doughnut data={data} options={options} />
          </div>
          <div className={classes.stats}>
            <div className={classes.device}>
              <LaptopMacIcon className={classes.deviceIcon} />
              <Typography variant="body1">Desktop</Typography>
              <Typography style={{ color: palette.primary.main }} variant="h2">
                63%
              </Typography>
            </div>
            <div className={classes.device}>
              <TabletMacIcon className={classes.deviceIcon} />
              <Typography variant="body1">Tablet</Typography>
              <Typography style={{ color: palette.danger.main }} variant="h2">
                15%
              </Typography>
            </div>
            <div className={classes.device}>
              <PhoneIphoneIcon className={classes.deviceIcon} />
              <Typography variant="body1">Mobile</Typography>
              <Typography style={{ color: palette.warning.main }} variant="h2">
                23%
              </Typography>
            </div>
          </div>
        </PerfectScrollbar>
      </PortletContent>
    </Portlet>
  );
}

export default withStyles(styles)(DevicesChart);
