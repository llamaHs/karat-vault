import styles from "./Message.module.css";

function Message() {
  return (
    <div className={styles.messageContainer}>
      <p className={styles.message}>
        🚧 This project is currently in progress. Some features may not be fully
        implemented.
      </p>
    </div>
  );
}

export default Message;
