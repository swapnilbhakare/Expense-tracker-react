import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
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
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        >
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          ))}
        </ExpensesFilter>
      </Card>
    </div>
  );
}

export default Expenses;
