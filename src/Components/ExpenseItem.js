import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />

        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
      </div>
    </>
  );
}

export default ExpenseItem;
// we use export for use this component into another file
