import { useEffect, useState } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem('savedFeedback')
    );
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem(
      'savedFeedback',
      JSON.stringify(feedbackCounts)
    );
  }, [feedbackCounts]);

  const updateFeedback = feedbackType => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(
          ((feedbackCounts.good + feedbackCounts.neutral) / totalFeedback) * 100
        )
      : 0;

  const resetFeedback = () => {
    setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="app">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;