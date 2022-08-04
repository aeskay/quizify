import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { change_amount, change_color, change_score } from '../features/counter/counterSlice';

function FinalScreen() {
  const { score } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackToSettings = () => {
    dispatch(change_score(0));
    dispatch(change_amount(50));
    dispatch(change_color("#ffffff"))
    navigate("/")
  }
  return (
    <Box>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score: {score}
      </Typography>
      <Button variant="outlined" onClick={handleBackToSettings}>
        Back Home
      </Button>
    </Box>
  )
}

export default FinalScreen