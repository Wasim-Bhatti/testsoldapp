import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home'; // import the icons you want to use
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SchoolIcon from '@material-ui/icons/School';
import PublicIcon from '@material-ui/icons/Public';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#FF6B6B',
    borderRadius: '40px',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },
});

function SubHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<HomeIcon />} label="Popular" />
        <Tab icon={<TrendingUpIcon />} label="Controversial" />
        <Tab icon={<ChatBubbleOutlineIcon />} label="Philosophy" />
        <Tab icon={<SchoolIcon />} label="Physics" />
        <Tab icon={<PublicIcon />} label="Politics" />
        <Tab icon={<ShuffleIcon />} label="Random" />
        <Tab icon={<SearchIcon />} label="Search" />
      </Tabs>
    </AppBar>
  );
}

export default SubHeader;