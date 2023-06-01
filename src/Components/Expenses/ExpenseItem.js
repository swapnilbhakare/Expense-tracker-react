import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked!!");
  };
  const deleteHandler = (evenet) => {};
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
        <button onClick={clickHandler}>Change Title</button>
        <button className="deleteButton" onClick={deleteHandler}>
          Delete Expense
        </button>
      </Card>
    </>
  );
};

export default ExpenseItem;
// we use export for use this component into another file
