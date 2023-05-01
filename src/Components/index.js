import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NewExpenses from "../Forms/newExpenses";
import Expenses from "./Expenses";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const defaultExpenses = [
  {
    id: 0,
    title: "electricity Bill",
    amount: 2500,
    date: new Date(2020, 5, 1),
  },
  { id: 1, title: "perchone", amount: 4500, date: new Date(2020, 5, 19) },
  { id: 2, title: "petrol", amount: 500, date: new Date(2020, 5, 10) },
  { id: 3, title: "food", amount: 500, date: new Date(2020, 3, 8) },
];
export default function BudgetTracker() {
  const [expenses, setExpense] = useState(defaultExpenses);
  const newData = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            marginBottom: "40px",
            paddingBottom: "80px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              paddingTop: "12px",
            }}
          >
            Budget Tracker
          </Typography>
          <NewExpenses onAddData={newData} />
          <Expenses items={expenses} />
        </Box>
      </Container>
    </>
  );
}
