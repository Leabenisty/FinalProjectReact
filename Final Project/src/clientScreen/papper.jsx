import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MeetingsForm from './MeetingsForm';

export default function SimplePaper(props) {
    const{id,name,adress}=props;
  return (
    <Box
      sx={{
        // display: 'flex',      
        // flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 500,
        },
      }}
    >
       
      <Paper elevation={3} ><div> <p>
      Id {id} </p><p>
      Name{name} </p><p> 
      Adress{adress}</p>
      <MeetingsForm/>
      </div>
     </Paper>
    </Box>
  );
}