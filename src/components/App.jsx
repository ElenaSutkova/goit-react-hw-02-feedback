import React, { Component } from 'react';
import Feedback from './Feedback';
import Statistic from './Statistick';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const showStatistics = totalFeedback > 0;

    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        </Section>

        {showStatistics ? (
          <Section title="Statistics">
            <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

// const App = () => {
//   const [state, setState] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0
//   });

//   const handleFeedback = (type) => {
//     setState((prev) => ({ ...prev, [type]: prev[type] + 1 }));
//   }
//   return (
//     <div>
//       <Section title="Please leave feedback">
//         <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback}/>
//       </Section>
//       {state.good + state.neutral + state.bad > 0 ? (
//         <Section title="Statistics">
//           <Statistic good={state.good} neutral={state.neutral} bad={state.bad} />
//         </Section>
//       ) : (
//           <p>No feedback given</p>
//       )}
//     </div>
//   )
// }

export default App;