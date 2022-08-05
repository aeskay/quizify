import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import Home from './pages/Home';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

function App() {
  const color = useSelector(state => state.counter.color);

  return (
    <Router>
      <Box 
        sx={{
          backgroundColor: color, 
          height:"100vh", 
          display:"flex",
          justifyContent:"center",
          alignItems: "center"
        }}
      >
      <Container  sx={{backgroundColor: "#fff", borderRadius: 10, width: 600, maxWidth:"95vw"}}>
        <Box textAlign="center" sx={{py: 5}}>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/questions" element={<Questions/>}/>
          <Route path="/score" element={<FinalScreen/>}/>

        </Routes>
        </Box>
      </Container>
      </Box>
    </Router>
  );
}

export default App;
