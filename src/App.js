import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
function App() {
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
  return (
    <div>
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
}

export default App;
