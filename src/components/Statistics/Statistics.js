import React from 'react';
import statisticalData from '../../data/statistical-data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {statisticalData.map(stat => {
        return (
          <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Statistics;

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
  ),
};
