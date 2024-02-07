import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import store from '../dataStore/bussinessData'
import { observer } from "mobx-react-lite";

const BussinessData = observer(() => {
  const data = store.getData;
  // const { id, name, adress } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">         
            <div>
              <p>id{data.id}</p>
              <p>name{data.name}</p>
              <p>adress{data.adress}</p>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
})
export default BussinessData;
