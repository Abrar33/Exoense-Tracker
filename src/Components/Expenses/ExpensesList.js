import React from 'react'
import ExpenseItem from '../ExpenseItem';

export default function ExpensesList(props) {
    let expenseContent=<p>No Data Found</p>;
    if(props.item.length>0){
      expenseContent=props.item.map((expense) => (
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
        />
      ))
    }
  return (
    <div>{expenseContent}</div>
  )
}
