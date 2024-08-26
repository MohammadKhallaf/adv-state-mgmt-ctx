export default function Dashboard({ user, expenses, budget }) {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="paper">
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <p>Balance: ${user.balance}</p>
      <p>Budget: ${budget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(totalExpenses / budget) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
