import { useState } from 'react';
import { GoalsList } from './goals-list';

export default function FinancialGoals({ goals, addGoal }) {
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [current, setCurrent] = useState('');

  const handleAddGoal = (e) => {
    e.preventDefault();
    addGoal({ description, target: Number(target), current: Number(current) });
    setDescription('');
    setTarget('');
    setCurrent('');
  };

  return (
    <div className="paper">
      <h3>Financial Goals</h3>
      <form className="form" onSubmit={handleAddGoal}>
        <input
          className="input"
          type="text"
          placeholder="Goal Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Target Amount"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Current Amount"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <button className="button" type="submit">
          Add Goal
        </button>
      </form>
      <GoalsList goals={goals} />
    </div>
  );
}
