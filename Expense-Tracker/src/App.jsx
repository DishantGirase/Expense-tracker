import { useState } from "react";
import "./App.css";
import Container from "./components/container";
import Heading from "./components/heading";
import InputExpense from "./components/inputExpense";
import ExpenseHistoryContainer from "./components/expenseHistoryContainer";
import TotalSpent from "./components/totalSpent";

function App() {
  handleOnChangeName = (event) => {
    name = event.target.value;
  };
  handleOnChangeAmount = (event) => {
    amount = event.target.value;
  };
  return (
    <>
      {" "}
      <Container>
        <Heading></Heading>
        <InputExpense handleOnChangeName={handleOnChangeName}></InputExpense>
        {/* <AddExpense></AddExpense> */}
        <div className="separator"></div>
        <ExpenseHistoryContainer></ExpenseHistoryContainer>
        <TotalSpent></TotalSpent>
      </Container>
    </>
  );
}

export default App;
