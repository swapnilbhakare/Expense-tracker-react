import "./App.css";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("in app js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
