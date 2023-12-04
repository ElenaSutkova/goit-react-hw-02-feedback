import React, { useState } from 'react';
import Feedback from './Feedback';
import Statistic from './Statistick';
import Section from './Section';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setState((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  }
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback}/>
      </Section>
      {state.good + state.neutral + state.bad > 0 ? (
        <Section title="Statistics">
          <Statistic good={state.good} neutral={state.neutral} bad={state.bad} />
        </Section>
      ) : (
          <p>No feedback given</p>
      )}
    </div>
  )
}

export default App;