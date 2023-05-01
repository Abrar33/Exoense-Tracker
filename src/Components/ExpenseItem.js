import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ExpenseItem(props) {
 const Month=props.date.toLocaleString('en-US',{month:"long"});
 const Day=props.date.toLocaleString('en-US',{day:"2-digit"});
 const Year=props.date.getFullYear();
  return (
    <>
    <Box sx={{margin:"13px",bgcolor:"green",marginTop:"10px",display:"flex",height:'14vh',
    justifyContent:"space-between",
    borderTopLeftRadius:"30px",
    borderBottomLeftRadius:"30px",
    borderTopRightRadius:"30px",
    borderBottomRightRadius:"30px",
 }}>
  <Box display="flex" sx={{justifyContent:'space-between'}}>
      <Box sx={{paddingLeft:"19px",border:"1px solid black",marginLeft:"1px",bgcolor:"black",
     borderTopLeftRadius:"30px",
     borderBottomLeftRadius:"30px",
     
  
    }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <Typography sx={{width:'60px',paddingTop:"2px",color:"white"}}>{Month}</Typography>
        <Typography sx={{color:"white"}}>{Year}</Typography>
        <Typography sx={{fontWeight:"bold",color:"white"}}>{Day}</Typography>
      </Grid>
      </Grid>
      </Box>
    <Typography sx={{paddingTop:"2rem",marginLeft:"16px"}}>{props.title}</Typography>
  </Box>
    <Typography sx={{paddingTop:"2rem",paddingRight:"15px"}}>{props.amount}</Typography>
    </Box>
    </>
  )
}
