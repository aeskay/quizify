import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { change_category, change_difficulty, change_type } from '../features/counter/counterSlice';


function SelectField(props) {
    const dispatch = useDispatch();
    const {label, options} = props;
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
          case "Category":
            dispatch(change_category(e.target.value));
            break;
          case "Difficulty":
            dispatch(change_difficulty(e.target.value));
            break;
          case "Type":
            dispatch(change_type(e.target.value));
            break;
        
          default:
            break;
        }
    }

  return (
    <Box mt={3}>
        <FormControl fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                { options.map(({id, name}) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField