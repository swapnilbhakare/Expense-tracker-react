import "./App.css";

import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 5, 22),
      location: "pune",
    },
    {
      id: "e2",
      title: "new Mobile",
      amount: 500.67,
      date: new Date(2023, 5, 22),
      location: "pune",
    },
    {
      id: "e3",
      title: "New dresses",
      amount: 400.67,
      date: new Date(2023, 5, 22),
      location: "pune",
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("in app js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
};

export default App;
