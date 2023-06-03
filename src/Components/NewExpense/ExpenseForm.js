import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            name="title"
            id="title"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
