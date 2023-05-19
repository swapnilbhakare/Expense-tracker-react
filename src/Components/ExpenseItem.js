import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "car insurance";
  const expenseAmout = 244.55;
  const LocationOfExpenditure = "pune";

  return (
    <>
      <div className="expense-item">
        <div>{expenseDate.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <p>{LocationOfExpenditure}</p>
          <div className="expense-item__price ">$ {expenseAmout}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
// we use export for use this component into another file
