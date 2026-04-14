import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/MockAuthContext";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const { login, loginError, clearLoginError } = useAuth();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { finishLoading } = useOutletContext();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  function handleLogin(e) {
    e.preventDefault();

    const success = login(userId, userPassword);

    success && navigate(from, { replace: true });
  }

  useEffect(() => {
    finishLoading();
    clearLoginError();
  }, [finishLoading]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>ID</label>
            <input
              className={styles.input}
              type="text"
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                clearLoginError();
              }}
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
                clearLoginError();
              }}
            />
          </div>

          {loginError && <p className={styles.errorMessage}>{loginError}</p>}

          <div className={styles.formButtonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </div>
        </form>
      </div>

      <div className={styles.signUpContainer}>
        <p className={styles.signUpText}>Don't have an account yet?</p>
        <Link to="/signup" className={styles.signUpLink}>
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
