import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const getData = (EnteredExpenseData) => {

    const expenseData = {
      ...EnteredExpenseData,id: Math.random().toString()
    }
    props.onDataReceive(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitHandler={getData}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
