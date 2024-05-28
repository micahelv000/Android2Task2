import "./ExpenseForm.css";
import React, { useState } from "react";
import Clock from './Clock';


const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(title, amount, date);

        // You can also add logic to send data to a server here

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
                    <Clock/>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
    
};

export default ExpenseForm;
