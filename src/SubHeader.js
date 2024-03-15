import React from 'react';
import {
  Tabs,
  Tab,
  AppBar,
  withStyles,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#FF6B6B',
    color: '#FFFFFF',
    fontStyle: 'bold',
    borderRadius: '30px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow:
      '0px 10px 20px rgba(0, 0, 0, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.3)',
    border: '2px solid white',
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
  icon: {
    color: '#FFFFFF',
  },
});

const StyledTab = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$selected': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:focus-visible': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
  selected: {},
})(Tab);

function SubHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Tabs value={value} onChange={handleChange} centered>
        <StyledTab
          icon={<HomeRoundedIcon className={classes.icon} />}
          label="Home"
        />
        <StyledTab
          icon={<TrendingUpIcon className={classes.icon} />}
          label="Prompts"
        />
        <StyledTab
          icon={<AccountBalanceTwoToneIcon className={classes.icon} />}
          label="Museum"
        />
        {isMobile && (
          <StyledTab
            icon={<SchoolIcon className={classes.icon} />}
            label="Sign Up"
          />
        )}
        {!isMobile && (
          <StyledTab
            icon={<PublicIcon className={classes.icon} />}
            label="Discussion"
          />
        )}
        {!isMobile && (
          <StyledTab
            icon={<LibraryBooksTwoToneIcon className={classes.icon} />}
            label="Portfolio
        
        "
          />
        )}
        {!isMobile && (
          <StyledTab
            icon={<SearchIcon className={classes.icon} />}
            label="Search"
          />
        )}
      </Tabs>
    </AppBar>
  );
}

export default SubHeader;
