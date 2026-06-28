import { useState } from "react";
import "./App.css";
import Container from "./components/container";
import Heading from "./components/heading";
import InputExpense from "./components/inputExpense";
import ExpenseHistoryContainer from "./components/expenseHistoryContainer";
import TotalSpent from "./components/totalSpent";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const handleOnChangeName = (event) => {
    setInputName(event.target.value);
  };

  const handleOnChangeAmount = (event) => {
    setInputAmount(event.target.value);
  };

  const handleOnClickAddBtn = (event) => {
    if (!inputName.trim() || !inputAmount) return;

    const newExpense = {
      id: Date.now(),
      key: Date.now(),
      name: inputName,
      amount: parseFloat(inputAmount),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setInputName("");
    setInputAmount("");
  };
  const handleOnDelete = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };
  return (
    <>
      {" "}
      <Container>
        <Heading></Heading>
        <InputExpense
          inputName={inputName}
          inputAmount={inputAmount}
          handleOnChangeName={handleOnChangeName}
          handleOnChangeAmount={handleOnChangeAmount}
          handleOnClickAddBtn={handleOnClickAddBtn}
        ></InputExpense>
        {/* <AddExpense></AddExpense> */}
        <div className="separator"></div>
        <ExpenseHistoryContainer
          expenses={expenses}
          handleOnDelete={handleOnDelete}
        ></ExpenseHistoryContainer>
        <TotalSpent expenses={expenses}></TotalSpent>
      </Container>
    </>
  );
}
export default App;
