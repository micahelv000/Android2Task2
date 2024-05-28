import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <div className='expenses'>
            {props.items.map((expense, index) => (
                <ExpenseItem
                    key={index}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
