import React, { useState } from "react";
import "./ExpenseForm.css";
import Clock from './Clock';

const ExpenseForm = ({ onAddExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => setTitle(event.target.value);
    const amountChangeHandler = (event) => setAmount(event.target.value);
    const dateChangeHandler = (event) => setDate(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault();

        if (!title || !amount || !date) {
            alert('Please fill in all fields.');
            return;
        }

        const expenseData = {
            title,
            amount: amount,
            date: new Date(date),
        };

        console.log('Submitting expense data:', expenseData);

        onAddExpense(expenseData);

        // Clear form inputs after submission
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inline">
                <div className="form-control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className="form-control">
                    <label>Clock</label>
                    <div className="inner-form-control">
                        <Clock />
                    </div>
                </div>

                <img id="anim" src="https://www.caccioppoli.com/Animated%20gifs/Clock/RUNNING.gif" alt="Running clock" />

                <div className="form-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
