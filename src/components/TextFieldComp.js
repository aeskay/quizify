import { Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { change_amount } from '../features/counter/counterSlice';

function TextFieldComp(props) {
  const dispatch = useDispatch();
  const {label} = props;
  const handleChange = (e) => {
    dispatch(change_amount(e.target.value))
  }

  return (
      
    <Box mt={3}>
        <TextField 
            onChange={handleChange} 
            id="outlined-basic" 
            label={label}
            variant="outlined" 
            fullWidth size="small" 
            type="number"
        />
    </Box>
  )
}

export default TextFieldComp