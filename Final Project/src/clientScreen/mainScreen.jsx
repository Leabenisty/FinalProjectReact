import { observer } from "mobx-react-lite";
import store from '../dataStore/dataServices'
import Grid from '@mui/material/Grid';

import SimplePaper from "./papper";
import FormDialog from "../adminScreen/FormDialog";
import BussinessData from './bussinessData';

const MainScreen = observer(() => {
  const data = store.getAllService;
  console.log("MainScreen", data);
  return(<div> 
    <BussinessData/>
    <FormDialog></FormDialog>
    <Grid container spacing={3}>
     { data.map( service =><div key={service.id}> <SimplePaper {...service}></SimplePaper></div>)}
     {/* <>כפתור ADMIN,רשימת השירותים,פרטי עסק</> */}
     </Grid>
     </div>)
});
export default MainScreen;