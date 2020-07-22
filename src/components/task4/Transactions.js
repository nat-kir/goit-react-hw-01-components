import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const Transactions = ({ type, amount, currency }) => (
  <>
    <td className={styles.cell}>{type}</td>
    <td className={styles.cell}>{amount}</td>
    <td className={styles.cell}>{currency}</td>
  </>
);

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;
