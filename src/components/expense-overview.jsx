export default function ExpenseOverview({ expenses }) {
  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});

  return (
    <div className="paper">
      <h3>Expense Overview</h3>
      {Object.entries(categoryTotals).map(([category, total]) => (
        <div key={category} className="expense-item">
          <span>{category}</span>
          <span>${total}</span>
        </div>
      ))}
    </div>
  );
}
