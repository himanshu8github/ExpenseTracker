import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(num);
}

function Balance(){
    const {transactions} = useContext(GlobalContext);


  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
         <>
        <h4>Your Balance</h4>
       <h1>{moneyFormatter(total)}</h1>
    </>
    )
};

export default Balance;