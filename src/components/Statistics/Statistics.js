import React from 'react';
import statisticalData from '../../data/statistical-data.json';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {statisticalData.map(stat => {
        return (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
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
