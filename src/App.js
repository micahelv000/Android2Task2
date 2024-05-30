import React, { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";

function App() {
    const [expenses, setExpenses] = useState([
        { id: 'e1', title: 'Mazda', amount: 3000, date: new Date(2020, 2, 5) },
        { id: 'e2', title: 'Ford', amount: 2000, date: new Date(2021, 3, 10) },
        { id: 'e3', title: 'Nisan', amount: 1000, date: new Date(2022, 4, 15) },
        { id: 'e4', title: 'Honda', amount: 500, date: new Date(2023, 5, 20) },
    ]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [
            { ...expense, id: `e${prevExpenses.length + 1}` },
            ...prevExpenses,
        ]);
    };

    return (
        <div>
            <ExpenseForm onAddExpense={addExpenseHandler} />
            <div>
                <Expenses items={expenses} />
            </div>
        </div>
    );
}

export default App;
