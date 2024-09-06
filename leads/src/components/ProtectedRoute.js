import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to login if not authenticated
  }

  return children;  // Render the protected component if authenticated
};

export default ProtectedRoute;
