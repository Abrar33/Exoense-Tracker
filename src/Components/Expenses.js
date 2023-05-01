import { Box } from "@mui/system";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./Expenses/ExpensesChart";
import ExpensesList from "./Expenses/ExpensesList";

export default function Expenses(props) {
  
  const [filterYear, setYear] = useState("");
  const filterhandler = (selectedYear) => {
    console.log("from expesne.js");
    console.log(selectedYear);
    setYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear
  })
  return (
    <><Box>

      <ExpensesFilter selected={filterYear} onChangeFilter={filterhandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList item={filteredExpenses}/>
    </Box>
      
    </>
  );
}