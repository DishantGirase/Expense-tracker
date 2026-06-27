import { useState } from "react";
import "./App.css";
import Container from "./components/container";
import Heading from "./components/heading";
import InputExpense from "./components/inputExpense";
import AddExpense from "./components/addExpense";
import ExpenseHistoryContainer from "./components/expenseHistoryContainer";
function App() {
  return (
    <>
      {" "}
      <Container>
        <Heading></Heading>
        <InputExpense></InputExpense>
        <AddExpense></AddExpense>
        <hr className="separator" />
        <ExpenseHistoryContainer></ExpenseHistoryContainer>
      </Container>
    </>
  );
}

export default App;
