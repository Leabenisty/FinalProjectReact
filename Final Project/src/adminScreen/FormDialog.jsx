import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState } from 'react';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleOK()
  {
    axios.post('http://localhost:8787/login',
    {"name": userName,"password": password})
    .then((res)=>{
      console.log(res);
       if(res.status==200)
        alert("ok");
      //------------------------הפניה לדף אחר????????????????
    })
    .catch(function(error){
      console.log(error);
      //if(res.status==401)
        alert("Error");        
      
    })
    .finally()
    {

    } 
    
    ;


  }
  
  
  
  function handleChange(event)
  {
    if(event.id=="userName"){
      setUserName(event.value);
      console.log(event.value);
      console.log(event.id);
    }
    else
    {
    setPassword(event.value);
    console.log(event.value);
    console.log(event.id);
    }
  }


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        log in
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            // handleClose();
          },
        }}
      >
        <DialogTitle>Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <TextField id="userName" onChange={()=>handleChange(event.target)} label="Enter your user name" variant="outlined" required/>
          <br/>
    <TextField id="password" onChange={()=>handleChange(event.target)} label="Enter your password" variant="outlined" required/>
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleOK}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
