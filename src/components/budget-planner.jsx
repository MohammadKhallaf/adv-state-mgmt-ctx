import { useState } from 'react';

export default function BudgetPlanner({ budget, setBudget }) {
  const [newBudget, setNewBudget] = useState(budget);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(Number(newBudget));
  };

  return (
    <div className="paper">
      <h3>Budget Planner</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="number"
          placeholder="New Budget"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
        />
        <button className="button" type="submit">
          Set Budget
        </button>
      </form>
    </div>
  );
}
