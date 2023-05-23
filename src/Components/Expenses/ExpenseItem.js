import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
      </Card>
    </>
  );
};

export default ExpenseItem;
// we use export for use this component into another file
