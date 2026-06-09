import { useReducer } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { useAddProfile } from "../hooks/useProfile";
import { useSignup } from "../hooks/useAuthMutations";

function reducer(state, action) {
  switch (action.type) {
    case "field":
      return { ...state, [action.field]: action.payload };

    case "passwordError":
      return { ...state, passwordError: action.payload };

    case "passwordConditionError":
      return { ...state, passwordConditionError: action.payload };

    case "signupError":
      return { ...state, signupError: action.payload };

    case "addProfileError":
      return { ...state, addProfileError: action.payload };

    case "clearErrors":
      return {
        ...state,
        passwordError: "",
        passwordConditionError: "",
        signupError: "",
        addProfileError: "",
      };

    default:
      return state;
  }
}

const initialState = {
  firstName: "",
  familyName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  passwordError: "",
  passwordConditionError: "",
  signupError: "",
  addProfileError: "",
};

function Signup() {
  const [
    {
      firstName,
      familyName,
      email,
      username,
      password,
      confirmPassword,
      passwordError,
      passwordConditionError,
      signupError,
      addProfileError,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const signupMutation = useSignup();
  const addProfileMutation = useAddProfile();

  async function handleSignup(e) {
    e.preventDefault();

    dispatch({ type: "clearErrors" });

    if (password.length < 8) {
      dispatch({
        type: "passwordConditionError",
        payload: "Password must be at least 8 characters.",
      });

      return;
    }

    signupMutation.mutate(
      { email, password },
      {
        onSuccess: (user) => {
          addProfileMutation.mutate(
            {
              id: user.id,
              first_name: firstName,
              family_name: familyName,
              email,
              username,
            },
            {
              // onSuccess -> component level
              onSuccess: () => {
                navigate("/signup-success");
              },

              onError: (error) => {
                dispatch({ type: "addProfileError", payload: error.message });
              },
            }
          );
        },
        onError: (error) => {
          dispatch({ type: "signupError", payload: error.message });
        },
      }
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>First Name</label>
            <input
              className={styles.input}
              type="text"
              value={firstName}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "firstName",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Family Name</label>
            <input
              className={styles.input}
              type="text"
              value={familyName}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "familyName",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="text"
              value={email}
              placeholder="example@example.com"
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "email",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Username</label>
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordCondition}>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => {
                  dispatch({
                    type: "field",
                    field: "password",
                    payload: e.target.value,
                  });

                  if (e.target.value.length < 8) {
                    dispatch({
                      type: "passwordConditionError",
                      payload: "Password must be at least 8 characters.",
                    });
                  } else {
                    dispatch({ type: "passwordConditionError", payload: "" });
                  }
                }}
              />
              {passwordConditionError && (
                <p className={styles.errorMessage}>{passwordConditionError}</p>
              )}
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>Confirm Password</label>
            <div className={styles.passwordCondition}>
              <input
                className={styles.input}
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  dispatch({
                    type: "field",
                    field: "confirmPassword",
                    payload: e.target.value,
                  });

                  if (e.target.value !== password) {
                    dispatch({
                      type: "passwordError",
                      payload: "Passwords do not match",
                    });
                  } else {
                    dispatch({ type: "passwordError", payload: "" });
                  }
                }}
              />
              {passwordError && (
                <p className={styles.errorMessage}>{passwordError}</p>
              )}
            </div>
          </div>

          {signupError && <p className={styles.errorMessage}>{signupError}</p>}

          {addProfileError && (
            <p className={styles.errorMessage}>{addProfileError}</p>
          )}

          <div className={styles.formButtonContainer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.signupButton}
              disabled={addProfileMutation.isPending}
            >
              {addProfileMutation.isPending ? "Creating..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
