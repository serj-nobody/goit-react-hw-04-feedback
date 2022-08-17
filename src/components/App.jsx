import { useState } from "react";

import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

import { FeedbackApp } from "./App.styled";


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    switch (event.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad; 
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = Math.round((good / total) * 100);
    return positive;
  }

  return (
    <FeedbackApp>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </FeedbackApp>
  );
};