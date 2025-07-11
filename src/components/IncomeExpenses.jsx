import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(num);
}

function IncomeExpenses() {

     const { transactions } = useContext(GlobalContext);

     const amounts = transactions.map(transaction => transaction.amount);

       const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

      const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

   return (
    <div className="inc-exp-container">
        <div>
          <h4>₹Income</h4>
  <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4>₹Expense</h4>
  <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
      </div>
  )
};

export default IncomeExpenses;


