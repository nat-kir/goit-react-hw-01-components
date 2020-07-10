import React from 'react';
import PropTypes from 'prop-types';
import Transactions from './Transactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.head}>Type</th>
        <th className={styles.head}>Amount</th>
        <th className={styles.head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      <Transactions items={items} />
    </tbody>
  </table>
);

Transactions.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
