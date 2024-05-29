import React, { useState } from "react";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";

function App() {
    const [expenses, setExpenses] = useState([
        { id: 'e1', title: 'mazda', amount: 3000, date: new Date(2020, 2, 28) },
        { id: 'e2', title: 'ford', amount: 2000, date: new Date(2021, 3, 28) },
        { id: 'e3', title: 'nisan', amount: 1000, date: new Date(2022, 4, 28) },
        { id: 'e4', title: 'honda', amount: 500, date: new Date(2023, 5, 28) },
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
