import { useNavigate } from "react-router-dom";
import styles from "./SignupSuccess.module.css";

function SignupSuccess() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Welcome to Karat Vault!</h1>
        <div className={styles.infoContainer}>
          <p>Account created successfully.</p>
          <p>You can now log in and start exploring the marketplace.</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.loginButton}
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default SignupSuccess;
