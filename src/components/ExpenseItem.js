import React from 'react'
import './expenseItem.css';
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {


    return (
        <li>
            <div className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>₹{props.amount} </div>
                    {/* <button onClick={handleClick}>Update Title</button> */}
                </div>
            </div>

        </li>



    )
}

export default ExpenseItem