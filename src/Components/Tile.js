import React from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledTile = styled(Paper)(({ theme, boosted, owner }) => {
    let backgroundColor;

    if (owner === 1) {
        backgroundColor = boosted ? theme.palette.success.main : theme.palette.primary.main;
    } else if (owner === 2) {
        backgroundColor = boosted ? theme.palette.success.dark : theme.palette.secondary.main;
    } else {
        backgroundColor = theme.palette.action.disabledBackground;
    }

    return {
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
    };
});

const Tile = ({ owner, boosted, pawns, onClick }) => {
    return (
        <StyledTile boosted={boosted} onClick={onClick} elevation={3}>
            {/* Conditional rendering based on props */}
            {owner === 1 ? <div>Player 1 </div> : (owner === 2 ? <div>Player 2 </div> : <div>No Player </div>)}
            <div>Pawns: {pawns}</div>
        </StyledTile>
    );
};

export default Tile;