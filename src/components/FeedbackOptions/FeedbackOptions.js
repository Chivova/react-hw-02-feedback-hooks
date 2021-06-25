import { Fragment } from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <Fragment>
      <button
        className={s.btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </Fragment>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
