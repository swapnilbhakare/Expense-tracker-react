import { useState } from "react";
import "./App.css";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 5, 22),
    location: "pune",
  },
  {
    id: "e2",
    title: "new Mobile",
    amount: 500.67,
    date: new Date(2022, 5, 22),
    location: "pune",
  },
  {
    id: "e3",
    title: "New dresses",
    amount: 400.67,
    date: new Date(2022, 5, 22),
    location: "pune",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
