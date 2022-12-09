import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  {
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: "001",
    title: "Toilet Paper",
  },
  { id: "002", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "003",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "004",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  // console.log(expenses);
  const storeData = (newExpense) => {
    // console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Expense Manager</h2>
      <NewExpense onDataReceive={storeData} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
