import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const Date = props.Date;
  const [title, setTitle] = useState(props.title);
  const amount = props.amount;

  const clickHandler = () => {
    setTitle("updated!");
  };
  return (
    <Card className="expense-item">
      <div className="item">
        <ExpenseDate Date={Date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
}

export default ExpenseItem;
