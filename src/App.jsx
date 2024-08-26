import React, { useState, useEffect } from 'react';

import LoginForm from './pages/login-form';
import Dashboard from './components/dashboard';
import ExpenseList from './components/expense-list';
import ExpenseForm from './components/expense-form';
import BudgetPlanner from './components/budget-planner';
import BillReminders from './components/bill-reminders';
import FinancialGoals from './components/financial-goals';
import ExpenseOverview from './components/expense-overview';
import InvestmentPortfolio from './components/investment-portfolio';

import goalsDataList from './data/goals.json';
import expenseDataList from './data/expenses.json';
import remindersDataList from './data/reminders.json';
import investmentsDataList from './data/investments.json';

function App() {
  const [user, setUser] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [investments, setInvestments] = useState([]);
  const [goals, setGoals] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Simulated data loading
    setTimeout(() => {
      setGoals(goalsDataList);
      setExpenses(expenseDataList);
      setInvestments(investmentsDataList);
      setReminders(remindersDataList);
    }, 1000);
  }, [user]);

  const login = (username, password) => {
    setUser({ username, balance: 5000 });
  };

  const logout = () => {
    setUser(null);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const addInvestment = (investment) => {
    setInvestments([...investments, investment]);
  };

  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: Date.now() }]);
  };

  const addReminder = (reminder) => {
    setReminders([...reminders, { ...reminder, id: Date.now() }]);
  };

  return (
    <div>
      <div className="app-bar">
        <h1 className="app-title">Personal Finance Manager</h1>
        {user && (
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
      <div className="container">
        {user ? (
          <>
            <div className="tab-container">
              {[
                'dashboard',
                'expenses',
                'investments',
                'goals',
                'reminders',
              ].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid">
              {activeTab === 'dashboard' && (
                <>
                  <div className="full-width">
                    <Dashboard
                      user={user}
                      expenses={expenses}
                      budget={budget}
                    />
                  </div>
                  <ExpenseOverview expenses={expenses} />
                  <BudgetPlanner budget={budget} setBudget={setBudget} />
                </>
              )}
              {activeTab === 'expenses' && (
                <>
                  <ExpenseForm addExpense={addExpense} />
                  <ExpenseList expenses={expenses} />
                </>
              )}
              {activeTab === 'investments' && (
                <InvestmentPortfolio
                  investments={investments}
                  addInvestment={addInvestment}
                />
              )}
              {activeTab === 'goals' && (
                <FinancialGoals goals={goals} addGoal={addGoal} />
              )}
              {activeTab === 'reminders' && (
                <BillReminders
                  reminders={reminders}
                  addReminder={addReminder}
                />
              )}
            </div>
          </>
        ) : (
          <LoginForm login={login} />
        )}
      </div>
    </div>
  );
}

export default App;
