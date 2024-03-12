import React from 'react';
import { Button, Card, CardContent, Typography, Box } from '@material-ui/core';

function MiddleColumn() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card elevation={3} style={{ width: '80vw', height: '80vh', margin: '15px', padding: '15px', borderRadius: '150px'}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Prompt of the Day
          </Typography>
          <Typography variant="h4" component="h2">
            What is the most practical mindset behind conquering the world?
          </Typography>
          <Typography color="textSecondary">
            [ Mindset ]
          </Typography>
          <Typography variant="body2" component="p">
            View Top 10 Pay Out Spectrum
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
      </Box>
    </Box>
  );
}

export default MiddleColumn;