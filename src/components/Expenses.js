import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
    return (
        <div className='expenses'>
            {items.map((expense) => (
                <ExpenseItem
                    index={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
