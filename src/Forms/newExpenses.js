import { Button } from '@mui/material'
import React, { useState } from 'react'

import ExpensesForm from './ExpensesForm'

export default function NewExpenses(props) {
 const [isEditing,setIsEditing]=useState(false)
 const btnHandler=()=>{
  setIsEditing(true)
 }
 const tnHandler=()=>{
  setIsEditing(false)
 }
  const newExpeseHanlder=(enteredExpenses)=>{
  const exensesData={
    ...enteredExpenses,
    id:Math.random().toString()
  }
  props.onAddData(exensesData)
 }
  return (
    <>
   {!isEditing && <Button onClick={btnHandler}>Add New addExpense</Button>}
    {isEditing &&<ExpensesForm onSaveExpenses={newExpeseHanlder} toggle={tnHandler}/>}
    </>
  )
}

