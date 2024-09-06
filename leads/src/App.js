// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Welcome from './Welcome';
// import ProtectedRoute from './ProtectedRoute';

// function App() {
//   return (
   
  

//     <Router>
//       <Routes>
//         <Route path="/welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />  
//         <Route path="/" element={<Login />} />
//         <Route path="/welcome" element={<Welcome />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Welcome from './Welcome';
// // import ErrorPage from './components/ErrorPage'; // Import the ErrorPage component
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/leads" element={<Welcome />} />
//         <Route path="/welcome" component={Welcome} />
//         {/* <Route path="" element={<ErrorPage />} /> {/ Catch-all route for 404 pages */}  
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import ErrorPage from './components/ErrorPage'; // Ensure the import path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/leads" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for 404 pages */}
      </Routes>
    </Router>
  );
}

export default App;
