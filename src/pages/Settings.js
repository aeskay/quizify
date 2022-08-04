import { Typography, Button, CircularProgress } from '@mui/material'
import React from 'react'
import SelectField from '../components/SelectField'
import { Box } from '@mui/system';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { change_amount, change_color, change_score } from '../features/counter/counterSlice';

function Settings() {
  const dispatch = useDispatch();

  let {color} = useSelector(state => state.counter);
  if(color === "#ffffff"){
    dispatch(change_color("#000000"))
  }
  const {response, error, loading} = useAxios({url: "/api_category.php"})
  const navigate = useNavigate();
  if(loading){
    return (
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }

  if (error){
    <Typography variant="h6" mt={20} color="red">
      Something went wrong
    </Typography>
  }

  const difficultyOptions = [
    {id: "easy", name: "Easy"},
    {id: "medium", name: "Medium"},
    {id: "hard", name: "Hard"},
  ];

  const typeOptions = [
    {id: "multiple", name: "Multiple Choice"},
    {id: "boolean", name: "True/False"}

  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/questions')
  }

  const handleBackHome = () => {
    dispatch(change_score(0));
    dispatch(change_amount(50));
    dispatch(change_color("#ffffff"))
    navigate("/")
  }

  return (
    <div>
      <Box sx={{display:"flex", justifyContent: "space-around", alignItems: "center"}}>
        <HomeRoundedIcon onClick={handleBackHome} sx={{ fontSize: "50px", color: color, cursor:"pointer"}}></HomeRoundedIcon>
        <Typography variant="h3" fontWeight="bold" color={color}>
        Quizify
        </Typography>
      </Box>

      <form action="" onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label ="Category"/>
        <SelectField options={difficultyOptions} label ="Difficulty"/>
        <SelectField options={typeOptions} label ="Type"/>
        <TextFieldComp label="Amount of Questions"/>
        <Box mt={3} width="100%">
          <Button sx={{backgroundColor: color}} fullWidth variant="contained" type="submit">
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Settings