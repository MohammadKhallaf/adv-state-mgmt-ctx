export default function ExpenseList({ expenses }) {
  return (
    <div className="paper">
      <h3>Expenses</h3>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <span>
            {expense.description} ({expense.category})
          </span>
          <span>${expense.amount}</span>
        </div>
      ))}
    </div>
  );
}
