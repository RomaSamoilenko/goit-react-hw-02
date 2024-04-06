import css from './Feedback.module.css';

function Feedback({ feedbackCounts, totalFeedback, positivePercentage }) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;