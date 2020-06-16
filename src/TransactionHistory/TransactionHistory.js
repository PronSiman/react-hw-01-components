import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem/TransactionItem';
import s from './TransactionHistory.module.scss';

const TransactionHystory = ({ items }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <TransactionItem
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHystory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default TransactionHystory;
