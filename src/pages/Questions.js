import { Box, Button, Typography, CircularProgress } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {decode} from 'html-entities'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { change_amount, change_color, change_score } from '../features/counter/counterSlice';

const getRandInteger = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function Questions() {

  const { question_category, 
    question_difficulty, 
    question_type,
    amount_of_question,
    score,
  } = useSelector(state => state.counter);

  let color = useSelector(state => state.counter.color);

  const navigate = useNavigate();

  const dispatch = useDispatch()

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if(question_category){
    apiUrl= apiUrl.concat(`&category=${question_category}`)
  }
  if(question_difficulty){
    apiUrl= apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if(question_category){
    apiUrl= apiUrl.concat(`&type=${question_type}`)
  }

  const {response, loading} = useAxios({url: apiUrl})
  const [questionIndex, setQuestionIndex]  = useState(0)
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if(response?.results.length){
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandInteger(question.incorrect_answers.length),
        0,
        question.correct_answer 
      );
      setOptions(answers);
    }
  }, [response, questionIndex])
  

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  } 

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent === question.correct_answer){
      dispatch(change_score(score + 1))
    }

    if(questionIndex + 1 < response.results.length){
      setQuestionIndex(questionIndex + 1)
    } else {
      navigate('/score');
    }
    console.log(response)
  }

  const handleBackHome = () => {
    dispatch(change_score(0));
    dispatch(change_amount(50));
    dispatch(change_color("#ffffff"))
    navigate("/")
  }

  return (
    <Box>
      <Box sx={{display:"flex", justifyContent: "space-around", alignItems: "center"}}>
        <HomeRoundedIcon onClick={handleBackHome} sx={{ fontSize: "50px", color: color, cursor:"pointer"}}></HomeRoundedIcon>
        <Typography variant="h4">Question {questionIndex + 1}</Typography>
      </Box>
      <Typography mt={2}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map((item, id)=> {
        return(
          <Box mt={2} key={id}>
            <Button 
              variant="contained" 
              sx={{backgroundColor:color}}
              onClick={handleClickAnswer}>
              {decode(item)}
            </Button>
          </Box>
        )
      })}
      
      <Box mt={5}>
      <Button>Score: {score} / {response.results.length}</Button>
      </Box>
    </Box>
  )
}

export default Questions