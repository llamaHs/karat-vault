import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useLogin } from "../hooks/useAuthMutations";

function Login() {
  const { loginError, setLoginError, clearLoginError } = useAuth();
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { finishLoading } = useOutletContext();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const loginMutation = useLogin();

  function handleLogin(e) {
    e.preventDefault();

    clearLoginError();

    loginMutation.mutate(
      {
        username,
        password: userPassword,
      },
      {
        onSuccess: () => {
          navigate(from, { replace: true });
        },
        onError: (error) => {
          setLoginError(error.message);
        },
      }
    );
  }

  function handleDemoLogin(e) {
    e.preventDefault();

    const demoUsername = "demo";
    const demoPassword = "00000000";

    setUsername(demoUsername);
    setUserPassword(demoPassword);

    clearLoginError();

    loginMutation.mutate(
      { username: demoUsername, password: demoPassword },
      {
        onSuccess: () => {
          navigate(from, { replace: true });
        },
        onError: (error) => {
          setLoginError(error.message);
        },
      }
    );
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
            <label className={styles.label}>Username</label>
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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

          <button
            type="button"
            className={styles.demoLogin}
            onClick={handleDemoLogin}
          >
            Demo Login
          </button>
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
