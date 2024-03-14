import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Logo } from './logo.svg'; // import the logo as a React Component
import './Header.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menuButton: {
    color: '#FF6B6B',
  },
  signUpButton: {
    color: '#FF6B6B',
    borderColor: '#FF6B6B',
    marginBottom: '10px', // Add margin to the bottom
    fontWeight: 'bold', // Make the text bolder
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', // Add a box shadow
    '&:hover': {
      backgroundColor: '#FF6B6B',
      transform: 'scale(1.05)', // Add animation on hover
      color: 'white', // Change the text color to white
    },
  },
});

function Header() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Mission', 'Roadmap'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button key="Sign Up">
          <Button variant="outlined" className={classes.signUpButton}>Sign Up</Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <header className="header">
      <div className="logo-container">
        <Logo fill="#FF6B6B" className="logo-image" />
        <h1 className="logo">WriteGather</h1>
      </div>
      {isMobile ? (
        <>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </>
      ) : (
        <nav>
          <ul className="nav-links">
            {['Home', 'Mission', 'Roadmap'].map((text, index) => (
              <li key={text}>
                <a href={`#${text.toLowerCase()}`}>{text}</a>
              </li>
            ))}
            <li key="Sign Up">
              <Button variant="outlined" className={classes.signUpButton}>Sign Up</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;