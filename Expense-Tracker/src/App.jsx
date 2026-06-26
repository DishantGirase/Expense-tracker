import { useState } from "react";
import "./App.css";
import Container from "./components/container";
import Heading from "./components/heading";
import InputExpense from "./components/inputExpense";
function App() {
  return (
    <>
      <center>
        <Container>
          <Heading></Heading>
          <InputExpense></InputExpense>
        </Container>
      </center>
    </>
  );
}

export default App;
