import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("update");
  };
  const expenseHandler = () => {
    setAmount("100$");
  };
  const deleteHandler = (evenet) => {};
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={title}
          location={props.location}
          amount={amount}
        />
        <button onClick={clickHandler}>Change Title</button>
        <button className="deleteButton" onClick={deleteHandler}>
          Delete Expense
        </button>
        <button className="deleteButton" onClick={expenseHandler}>
          changes expense
        </button>
      </Card>
    </>
  );
};

export default ExpenseItem;
// we use export for use this component into another file
