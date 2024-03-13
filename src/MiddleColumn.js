import React, { useState } from 'react';
import { Button, Typography, Box, TextField, Paper, IconButton } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';

// Dummy data
const items = [...Array(1000).keys()].map(i => ({
  id: i,
  text: `Item #${i}`,
  prompt: `What are your thoughts on the creation of the universe? #${i}`
}));

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
    '& .MuiInputBase-input': {
      color: '#F5F5F5',
      backgroundColor: '#1A1A1A',
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
          rows={12}
        />
        <Button variant="contained" color="primary" style={{ backgroundColor: '#FF6B6B' }} onClick={handleSubmit}>
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
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={handlePrevious}>
        <ArrowUpwardIcon style={{ color: '#FFFFFF' }} />
      </IconButton>
      <Row item={items[currentIndex]} />
      <IconButton onClick={handleNext}>
        <ArrowDownwardIcon style={{ color: '#FFFFFF' }} />
      </IconButton>
    </Box>
  );
}

export default MiddleColumn;