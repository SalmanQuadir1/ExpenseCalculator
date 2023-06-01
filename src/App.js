/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import { useEffect, useState } from 'react';
// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: 'e2',
//     title: 'New TV',
//     amount: 799.49,
//     date: new Date(2021, 2, 12)
//   },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];
function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('expenseData'))
    if (data) {
      data.forEach(element => {
        element.date = new Date(element.date);
      });
      setExpenses(data);
    }


  }, [])

  const addExpenseHandler = (expense) => {

    setExpenses([expense, ...expenses])


    localStorage.setItem('expenseData', JSON.stringify([expense, ...expenses]));

  }
  return (
    <div className="App   ">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />




    </div>
  );
}

export default App;
