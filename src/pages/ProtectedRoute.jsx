import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/MockAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated, justLoggedOut } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    if (justLoggedOut) {
      return <Navigate to="/" state={{ clearLogout: true }} replace />;
    }

    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}

export default ProtectedRoute;
