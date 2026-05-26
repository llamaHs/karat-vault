import { createContext, useContext, useReducer } from "react";
import usersData from "../data/mockUsers.json";

const { users } = usersData;
const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loginError: null,
      };

    case "loginFailed":
      return { ...state, loginError: "Invalid ID or password" };

    case "clearLoginError":
      return { ...state, loginError: null };

    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        justLoggedOut: true,
      };

    case "clearLogout":
      return { ...state, justLoggedOut: false };

    default:
      throw new Error("Unknown action");
  }
}

const initialState = {
  isAuthenticated: false,
  user: null,
  loginError: null,
  justLoggedOut: false,
};

function AuthProvider({ children }) {
  const [{ isAuthenticated, user, loginError, justLoggedOut }, dispatch] =
    useReducer(reducer, initialState);

  function login(id, password) {
    const user = users.find(
      (user) => user.id === id && user.password === password
    );
    if (!user) {
      dispatch({ type: "loginFailed" });
      return false;
    }
    dispatch({ type: "login", payload: user });
    return true;
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  function clearLoginError() {
    dispatch({ type: "clearLoginError" });
  }

  function clearLogout() {
    dispatch({ type: "clearLogout" });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loginError,
        justLoggedOut,
        login,
        logout,
        clearLoginError,
        clearLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
