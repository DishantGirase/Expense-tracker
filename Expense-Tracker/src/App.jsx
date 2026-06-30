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
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      // year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleOnClickAddBtn = (event) => {
    if (!inputName.trim() || !inputAmount) return;

    const newExpense = {
      id: Date.now(),
      key: Date.now(),
      name: inputName,
      amount: parseFloat(inputAmount),
      createdAt: new Date(),
    };

    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
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
          formatDate={formatDate}
          expenses={expenses}
          handleOnDelete={handleOnDelete}
        ></ExpenseHistoryContainer>
        <TotalSpent expenses={expenses}></TotalSpent>
      </Container>
    </>
  );
}
export default App;
