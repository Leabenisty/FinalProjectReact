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
export default function MeetingsForm(props)
{
    const [open, setOpen] = useState(false);
    const [serviceId, setServiceId]=useState(props);//? useState צריך 


    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      function handleOK()
      {
        //בדיקה האם התאריך זמין
        axios.post('http://localhost:8787/appointment',
        {"name": userName,"password": password})
        .then((res)=>{
          console.log(res);
           if(res.status==200)
            alert("ok");
         

          handleClose();
        })
        .catch(function(error){
          console.log(error);
          
            alert("Error");        
          //
        })
        .finally()
        {
    
        };
    
    
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
            set a meeting...!
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
                //handleClose();
              },
            }}
          >
            <DialogTitle>Log in</DialogTitle>
            <DialogContent>
            
              <TextField id="clientName" onChange={()=>handleChange(event.target)} label="Enter your name" variant="outlined" required/>
              <br/>
                <TextField id="clientEmail" onChange={()=>handleChange(event.target)} label="Enter your email" variant="outlined" required/>
                <br/>
                <TextField id="clientPhone" onChange={()=>handleChange(event.target)} label="Enter your phone" variant="outlined" required/>
                <br/>
                <TextField id="dateTime" onChange={()=>handleChange(event.target)} label="choose the date and the time" variant="outlined" required/>
              <br/>
                     
                     
                     
                     
                     
                        {/* const meeting = {
                        id: "758",
                        serviceType: "11",
                        dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
                        clientName: "אבי כהן",
                        clientPhone: "050-1234567",
                        clientEmail: "m@m.com",
                    }; */}
              
              
              
            
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleOK}>OK</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
}














