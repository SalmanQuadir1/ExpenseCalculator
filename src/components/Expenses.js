import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2023')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <div className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList filteredExpenses={filteredExpenses} />




        </div>
    )
}

export default Expenses