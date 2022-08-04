import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {change_color } from '../features/counter/counterSlice';

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const colors = [
        "#42a5f5",
        "#1976d2",
        "#1565c0",
        "#ba68c8",
        "#9c27b0",
        "#7b1fa2",
        "#ef5350",
        "#d32f2f",
        "#c62828",
        "#ff9800",
        "#ed6c02",
        "#e65100",
        "#03a9f4",
        "#0288d1",
        "#01579b",
        "#4caf50",
        "#2e7d32",
        "#1b5e20",
        "#dddddd",
        "#000000"
    ];

    const handleColorChange = (e) => {
        dispatch(change_color(e.target.textContent));
        navigate("/settings")
    }

    return (
        <Box mt="">
            <Typography variant="h3" mt={5}>Welcome to Quizify</Typography>
            <Typography variant="h6" mt={1}>Select your favorite theme</Typography>
            <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
                {colors.map((item, id) => {
                    return (
                        <Box key={id} sx={{backgroundColor: item, width: 120, height: 120, cursor:"pointer"}}
                            onClick={handleColorChange}
                        >
                            <Typography sx={{mt: "40%"}}>{item}</Typography>
                        </Box>
                    )
                })}
            </Box>
            <Box my={2}>
                <Button variant="contained" onClick={() => navigate("/settings")}>Skip</Button>
            </Box>
        </Box>
    )
}

export default Home