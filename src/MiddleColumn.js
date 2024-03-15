import React, { useState } from 'react';
import {
  Button,
  Typography,
  Box,
  TextField,
  Paper,
  IconButton,
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Dummy data
const items = [...Array(1000).keys()].map((i) => ({
  id: i,
  text: `Item #${i}`,
  prompt: `What are your thoughts on the creation of the universe? #${i}`,
}));

Row.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
  }).isRequired,
};

// Define your styles
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1A1A1A',
    color: '#F5F5F5',
  },
  paper: {
    padding: '2rem',
    marginBottom: '2rem',
    backgroundColor: '#1A1A1A',
    border: '2px solid #E5E4E2',
    borderRadius: '15px',
  },
  itemText: {
    fontSize: '0.8rem',
    color: '#F5F5F5',
  },
  promptText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#F5F5F5',
  },
  responseInput: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FF6B6B',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    '& .MuiInputBase-input': {
      color: '#F5F5F5',
      backgroundColor: '#1A1A1A',
    },
  },

  icon: {
    '&:active': {
      transform: 'scale(0.8)', // Increase the scale down effect
      transition: 'transform 0.3s, color 0.3s', // Add transition for color
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', // Increase the box shadow
      color: '#FF6B6B', // Change the color when clicked
    },
  },
});

function Row({ item }) {
  const classes = useStyles();
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted response for item #${item.id}: ${response}`);
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom className={classes.itemText}>
          {item.text}
        </Typography>
        <Typography color="textSecondary" className={classes.promptText}>
          {item.prompt}
        </Typography>
        <TextField
          label="Your response"
          variant="outlined"
          value={response}
          onChange={handleResponseChange}
          fullWidth
          margin="normal"
          className={classes.responseInput}
          multiline
          rows={18}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#FF6B6B' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Paper>
  );
}

function MiddleColumn() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <Box className={classes.root}>
      <IconButton
        onClick={handlePrevious}
        style={{ transition: 'transform 0.3s' }}
      >
        <ArrowUpwardIcon
          style={{ color: '#FF6B6B', fontSize: '40px' }}
          className={classes.icon}
        />
      </IconButton>
      <Row item={items[currentIndex]} />
      <IconButton onClick={handleNext} style={{ transition: 'transform 0.3s' }}>
        <ArrowDownwardIcon
          style={{ color: '#FF6B6B', fontSize: '40px' }}
          className={classes.icon}
        />
      </IconButton>
    </Box>
  );
}

export default MiddleColumn;
