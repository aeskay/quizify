import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  question_category:"",
  question_difficulty:"",
  question_type:"",
  amount_of_question:50,
  score:0,
  color: "#ffffff"
};


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    change_category: (state, action) => {
      return {
        ...state,
        question_category: action.payload
      }
    },
    
    change_difficulty: (state, action) => {
      return {
        ...state,
        question_difficulty: action.payload
      }
    },
    
    change_type: (state, action) => {
      return {
        ...state,
        question_type: action.payload
      }
    },
    
    change_amount: (state, action) => {
      return {
        ...state,
        amount_of_question: action.payload
      }
    },
    
    change_score: (state, action) => {
      return {
        ...state,
        score: action.payload
      }
    },
    
    change_color: (state, action) => {
      return {
        ...state,
        color: action.payload
      }
    },
    
  },
  
});

export const { change_category, change_difficulty, change_type, change_amount, change_score, change_color } = counterSlice.actions;

export default counterSlice.reducer;
