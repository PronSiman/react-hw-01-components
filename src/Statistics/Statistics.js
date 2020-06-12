import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import s from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {
  const StatsList = () => (
    <ul className={s.StatList}>
      {stats.map(item => {
        const currentColor = {
          backgroundColor: randomColor(),
        };
        return (
          <li className={s.Item} key={item.id} style={currentColor}>
            <span className="label">{item.label} </span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
  return (
    <section className={s.Statistics}>
      <h2 className={s.Title}>{title && title}</h2>
      <StatsList />
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Statistics;
