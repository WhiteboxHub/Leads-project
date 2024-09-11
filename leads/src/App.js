// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// // import Leads from './Welcome';
// import Leads from './Leads';
// import ErrorPage from './components/ErrorPage'; // Ensure the import path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/leads" element={<Leads />} />
//         {/* <Route path="/welcome" element={<Welcome />} /> */}
//         <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for 404 pages */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Leads from './Leads';
import ErrorPage from './components/ErrorPage';
import { AuthContext } from './components/AuthContext';

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setAuth({ isAuthenticated: true, token: storedToken });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({ isAuthenticated: false, token: null });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route 
            path="/leads" 
            element={auth.isAuthenticated ? <Leads /> : <Navigate to="/" />} 
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
