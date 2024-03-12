import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ScoreColumn = ({ title, score }) => {
    return (
        <Box sx={{
            display: 'flex',
            width:'100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle1">{score}</Typography>
        </Box>
    );
};

export default ScoreColumn;
