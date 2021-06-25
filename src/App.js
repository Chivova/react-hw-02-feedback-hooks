import { Fragment, useState } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

import 'modern-normalize/modern-normalize.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.round((good / total) * 100);
  };

  return (
    <Fragment>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={leaveFeedback} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Fragment>
  );
}
