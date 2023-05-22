import React from "react";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <div>{props.date?.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <p>{props.location}</p>
          <div className="expense-item__price ">$ {props.amount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
// we use export for use this component into another file
