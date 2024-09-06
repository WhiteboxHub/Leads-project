// src/components/withAuth.js
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Or use a context/auth hook
    
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <Redirect to="/error" />; // Redirect to error page if not authenticated
    }
  };
};

export default withAuth;
