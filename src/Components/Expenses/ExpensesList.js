import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let message;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else if (props.items.length === 1) {
    message = (
      <h2 className="expenses-list__fallback">
        Only single expense here. Please add more...
      </h2>
    );
  }

  return (
    <div>
      <ul>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </ul>
      {message}
    </div>
  );
};

export default ExpensesList;
