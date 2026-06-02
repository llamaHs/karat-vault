import { createContext, useContext, useEffect, useReducer } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext();

const initialState = {
  session: null,
  user: null,
  isLoading: true,
  loginError: null,
  justLoggedOut: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setSession":
      return {
        ...state,
        session: action.payload,
        user: action.payload?.user ?? null,
        isLoading: false,
      };

    case "loginFailed":
      return { ...state, loginError: action.payload };

    case "clearLoginError":
      return { ...state, loginError: null };

    case "logout":
      return {
        ...state,
        session: null,
        user: null,
        justLoggedOut: true,
      };

    case "clearLogout":
      return { ...state, justLoggedOut: false };

    default:
      return state;
    // reducer는 항상 state 반환.
  }
}

function AuthProvider({ children }) {
  const [{ session, user, isLoading, loginError, justLoggedOut }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    async function getSession() {
      const { data } = await supabase.auth.getSession();
      dispatch({ type: "setSession", payload: data.session });
    }

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: "setSession", payload: session });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    dispatch({ tyle: "logout" });
  }

  function setLoginError(message) {
    dispatch({ type: "loginFailed", payload: message });
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
        session,
        user,
        isAuthenticated: !!session, //derived state
        isLoading,
        loginError,
        justLoggedOut,
        logout,
        setLoginError,
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
