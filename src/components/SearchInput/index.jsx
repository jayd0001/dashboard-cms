import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

// Component styles
import styles from './styles';

const SearchInput = (props) => {
  const { classes, className, onChange, style, ...rest } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName} style={style}>
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        onChange={onChange}
      />
    </div>
  );
};

export default withStyles(styles)(SearchInput);
