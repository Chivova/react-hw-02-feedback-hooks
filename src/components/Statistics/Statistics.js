import { Fragment } from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  totalFeedback = 0,
  positiveFeedbackPercentage = 0,
}) {
  return (
    <Fragment>
      <ul className={s.statisticsList}>
        <li className={s.statisticsItem}>Good: {good}</li>
        <li className={s.statisticsItem}>Neutral: {neutral}</li>
        <li className={s.statisticsItem}>Bad: {bad}</li>
      </ul>
      <p className={s.totalFeedbackText}>Total: {totalFeedback}</p>
      <p className={s.perFeedbackText}>
        Positive feedback: {positiveFeedbackPercentage}%
      </p>
    </Fragment>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
