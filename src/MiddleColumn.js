import React, { useState } from 'react';
import { Button, Typography, Box, TextField, Paper, IconButton } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Dummy data
const items = [...Array(1000).keys()].map(i => ({
  id: i,
  text: `Item #${i}`,
  prompt: `What are your thoughts on the creation of the universe? #${i}`
}));

function Row({ item }) {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted response for item #${item.id}: ${response}`);
  };

  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          {item.text}
        </Typography>
        <Typography color="textSecondary">
          {item.prompt}
        </Typography>
        <TextField 
          label="Your response" 
          variant="outlined" 
          value={response}
          onChange={handleResponseChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}

function MiddleColumn() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <IconButton onClick={handlePrevious}>
        <ArrowUpwardIcon />
      </IconButton>
      <Row item={items[currentIndex]} />
      <IconButton onClick={handleNext}>
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  );
}

export default MiddleColumn;