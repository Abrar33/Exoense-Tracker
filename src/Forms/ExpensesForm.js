import { Box, Button, Grid, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputAdornment from '@mui/material/InputAdornment';
export default function ExpensesForm(props) {
const [enteredtitle,setTitle]=useState('');
const [enteredamount,setAmount]=useState('');
const [entereddate,setDate]=useState('');

const titleHandler=(e)=>{
  setTitle(e.target.value)
}
const amountHandler=(e)=>{
  setAmount(e.target.value);
  
  }
  const dateHandler=(e)=>{
    setDate(e.target.value)
  }
  
  const submitHandler=(e)=>{
      const enteredData={
        title:enteredtitle,
        amount:+enteredamount,
        date:new Date(entereddate),
      }
  props.onSaveExpenses(enteredData);
props.toggle()
  console.log(enteredData)
  
  setTitle('');
  setAmount('');
  setDate('');
  }


  return (
    <> 
  < Box sx={{ flexGrow:2,paddingTop:"30px", marginTop:"40px",marginBottom:"60px",bgcolor:"white"}}>
    
      <Grid container spacing={3}>
        <Grid item xs={6} sx={6}>
          <InputLabel  >Title</InputLabel>
          <TextField onChange={titleHandler}/>
        </Grid>
        <Grid  item xs={6} lx={6}>
            <InputLabel value={enteredamount}  >Amount</InputLabel>
          <TextField onChange={amountHandler}/>
            

        </Grid>
        <Grid item xs={6} xl={6}>
          <InputLabel 
          
          >Date</InputLabel>
          <TextField 
          type="date"
          min="2015-01-01"
          max="2030-12-31"

        onChange={dateHandler}
          variant="standard"
  
          ><DateRangeIcon/></TextField>
        </Grid>
        </Grid>  
<Button variant="contained" color="success" sx={{float:"right"}} onClick={submitHandler}>Add </Button>
<Button variant="contained" color="success" sx={{float:"right"}} onClick={props.toggle}>Cancel </Button>
    </Box>
    </>
  )
}
