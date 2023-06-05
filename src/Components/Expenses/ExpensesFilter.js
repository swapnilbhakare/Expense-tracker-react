import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <div className="expenses-filter">
        <div className="expenses-filter__contorl">
          <label>Filter by year</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;