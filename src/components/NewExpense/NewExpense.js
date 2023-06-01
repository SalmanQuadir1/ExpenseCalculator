import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExepenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() * 10 * 6
        }
        props.onAddExpense(expenseData);

    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExepenseDataHandler} />
        </div>
    )
}

export default NewExpense