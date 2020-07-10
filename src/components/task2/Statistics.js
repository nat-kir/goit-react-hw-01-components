import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const Statistics = ({ title, stats }) => (
  <section className={styles.conteiner}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stats}>
      {stats.map(({ id, label, percentage }) => (
        <li style={{ backgroundColor: getRandomColor() }} key={id}>
          <span className={styles.label}>{label} </span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
