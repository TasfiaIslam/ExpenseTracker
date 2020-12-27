import React, { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/expenses";
import ExpenseLoadingComponent from "./components/expenseLoading";

function App() {
  const ExpenseLoading = ExpenseLoadingComponent(Expenses);
  const [appState, setAppState] = useState({
    loading: false,
    expenses: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((expenses) => {
        setAppState({ loading: false, expenses: expenses });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Your Expenses</h1>
      <ExpenseLoading
        isLoading={appState.loading}
        expenses={appState.expenses}
      />
    </div>
  );
}

export default App;
