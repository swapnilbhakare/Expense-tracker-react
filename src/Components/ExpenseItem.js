import React from "react";

function ExpenseItem() {
  return (
    <div>
      <div>
        <h1>Expense Items</h1>
        <p>Food Rs 10</p>
        <p> Petrol Rs 100</p>
        <p>Movies Rs 200</p>
      </div>
      <div>
        <div>May 28 2023</div>
        <div>
          <h2>Car Insurance</h2>
        </div>
        <div>$500</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
// we use export for use this component into another file
