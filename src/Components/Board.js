import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tile from './Tile';
import ScoreColumn from './ScoreColumn';

const initialBoardState = [
    // Declaring the initial state of the board
    { owner: 1, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },


    { owner: 0, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },
    { owner:0 , boosted: false, pawns: 1 },

    { owner:0, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },

    { owner:0, boosted: false, pawns: 1 },
    { owner:1, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },

    { owner:0, boosted: false, pawns: 1 },
    { owner:1, boosted: false, pawns: 1 },
    { owner:0, boosted: false, pawns: 1 },



];
const Board = () => {
    const[tiles,setTiles] = React.useState(initialBoardState)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const tileClick = () => {
        console.log("Tile clicked:");
    };

    function FormRow() {
        return (
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                {initialBoardState.map((tile, index) => {
                    // Check if we're at the start of a new row
                    const isNewRow = index % 5 === 0;
                    // Calculate row index
                    const rowIndex = Math.floor(index / 5);

                    return (
                        <React.Fragment key={index}>
                            {/* At the start of each new row, add a ScoreColumn */}
                            {isNewRow && (
                                <Grid item xs={1}>
                                    <ScoreColumn score={rowIndex} title={`Row ${rowIndex + 1} Start`} />
                                </Grid>
                            )}
                            <Grid item xs={2}>
                                <Tile
                                    owner={tile.owner}
                                    boosted={tile.boosted}
                                    pawns={tile.pawns}
                                    onClick={() => tileClick()}
                                />
                            </Grid>
                            {/* At the end of each row, add a ScoreColumn */}
                            {index % 5 === 4 && (
                                <Grid item xs={1}>
                                    <ScoreColumn score={rowIndex} title={`Row ${rowIndex + 1} End`} />
                                </Grid>
                            )}
                        </React.Fragment>
                    );
                })}
            </Grid>
        );
    }
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh' ,
        }}>
            {FormRow()}
        </Box>
    );

}
export default Board;