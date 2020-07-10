import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transactions = ({ items }) => (
  <>
    {items.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td className={styles.cell}>{type}</td>
        <td className={styles.cell}>{amount}</td>
        <td className={styles.cell}>{currency}</td>
      </tr>
    ))}
  </>
);

Transactions.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;
