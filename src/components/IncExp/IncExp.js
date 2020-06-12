import React, {useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalState';
import CountUp from 'react-countup';


const IncExp = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+$
          <CountUp 
          start ={0}
          end   = {income}
          duration = {1.5}
          separator = ","
      />
          
          </p>
          </div>
          <div>
          <h4>Expense</h4>
          <p className="money minus">-$
          <CountUp 
          start ={0}
          end   = {expense}
          duration = {1.5}
          separator = ","
      />
          </p>

          </div>
      </div>
    )
}
export default IncExp;