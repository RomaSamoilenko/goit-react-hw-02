import css from './Notification.module.css';

function Notification({ message }) {
  return (
    <div className={css.notification}>
      <p>{message}</p>
    </div>
  );
}

export default Notification;