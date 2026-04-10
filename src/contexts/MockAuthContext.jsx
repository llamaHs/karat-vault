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

    case "logout":
      return { ...state, isAuthenticated: false, user: null };

    default:
      throw new Error("Unknown action");
  }
}

const initialState = {
  isAuthenticated: false,
  user: null,
  loginError: null,
};

function AuthProvider({ children }) {
  const [{ isAuthenticated, user, loginError }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loginError, login, logout }}
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
