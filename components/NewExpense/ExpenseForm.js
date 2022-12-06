import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(EnteredTitle);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(EnteredDate);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(EnteredAmount);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSubmitHandler(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');


  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={EnteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={EnteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
