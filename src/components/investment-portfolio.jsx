import { useState } from 'react';

export default function InvestmentPortfolio({ investments, addInvestment }) {
  const [symbol, setSymbol] = useState('');
  const [shares, setShares] = useState('');
  const [price, setPrice] = useState('');

  const handleAddInvestment = (e) => {
    e.preventDefault();
    addInvestment({
      symbol,
      shares: Number(shares),
      purchasePrice: Number(price),
      currentPrice: Number(price),
    });
    setSymbol('');
    setShares('');
    setPrice('');
  };

  return (
    <div className="paper">
      <h3>Investment Portfolio</h3>
      <form className="form" onSubmit={handleAddInvestment}>
        <input
          className="input"
          type="text"
          placeholder="Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Number of Shares"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Purchase Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="button" type="submit">
          Add Investment
        </button>
      </form>
      {investments.map((investment, index) => (
        <div key={index} className="expense-item">
          <span>
            {investment.symbol}: {investment.shares} shares
          </span>
          <span>at ${investment.currentPrice}</span>
        </div>
      ))}
    </div>
  );
}
