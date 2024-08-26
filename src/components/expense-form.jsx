import { useState } from 'react';

export default function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount: Number(amount), category });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="paper">
      <h3>Add Expense</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="button" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}
