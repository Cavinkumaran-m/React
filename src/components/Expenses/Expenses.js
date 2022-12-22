import ExpenseList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/Misc/ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  // console.log(props.data);
  const [FilteredYear, setFilteredYear] = useState("All");
  const getFilteredDate = (ChangedDate) => {
    // console.log(ChangedDate);
    setFilteredYear(ChangedDate);
  };

  const ExpenseFilter = (Data) => {
    if (FilteredYear == "All") {
      return Data;
    } else if (Data.date.getFullYear() == FilteredYear) {
      return Data;
    }
  };

  // const FilteredExpenses = [];
  const FilteredExpenses = props.data.filter(ExpenseFilter);
  // console.log(FilteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={FilteredYear} onChangeDate={getFilteredDate} />
      <ExpensesChart dataPoints={FilteredExpenses} />
      <ExpenseList data={FilteredExpenses} />
    </Card>
  );
}

export default Expenses;
