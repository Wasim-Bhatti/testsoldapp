import React from 'react';
import { Tabs,Tab, AppBar, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#FF6B6B',
    borderRadius: '30px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.3)',
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Tabs value={value} onChange={handleChange} centered>
        <StyledTab icon={<HomeIcon className={classes.icon} />} label="Popular" />
        <StyledTab icon={<TrendingUpIcon className={classes.icon} />} label="Controversial" />
        <StyledTab icon={<ChatBubbleOutlineIcon className={classes.icon} />} label="Philosophy" />
        <StyledTab icon={<SchoolIcon className={classes.icon} />} label="Physics" />
        <StyledTab icon={<PublicIcon className={classes.icon} />} label="Politics" />
        <StyledTab icon={<ShuffleIcon className={classes.icon} />} label="Random" />
        <StyledTab icon={<SearchIcon className={classes.icon} />} label="Search" />
      </Tabs>
    </AppBar>
  );
}

export default SubHeader;