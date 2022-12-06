import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">

      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        Date={props.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        Date={props.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        Date={props.data[2].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
