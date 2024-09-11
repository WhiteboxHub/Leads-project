// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const styles = {
//   container: {
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '20px',
//     background: '#f9f9f9',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: '#333',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   formGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     color: '#555',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//     boxSizing: 'border-box',
//   },
//   button: {
//     width: '100%',
//     padding: '10px',
//     background: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   buttonHover: {
//     background: '#0056b3',
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//     marginTop: '10px',
//   },
//   success: {
//     color: 'green',
//     textAlign: 'center',
//     marginTop: '10px',
//   },
// };

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [token, setToken] = useState('');

//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8001/api/auth/login', { username, password });
//       const token = response.data.token;
//       console.log(token);
      
//       localStorage.setItem('token', token);  // Save token to localStorage
//       setMessage(response.data.message);
//       setError('');
//       navigate('/Leads', { state: { message: response.data.message } });
//     } catch (err) {
//       setError('Invalid username or password');
//       setMessage('');
//     }
//   };

  
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Login</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Username</label>
//           <input
//             type="text"
//             style={styles.input}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             style={styles.input}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => e.currentTarget.style.background = styles.buttonHover.background}
//           onMouseOut={(e) => e.currentTarget.style.background = styles.button.background}
//         >
//           Login
//         </button>
//       </form>
//       {error && <p style={styles.error}>{error}</p>}
//       {message && <p style={styles.success}>{message}</p>}
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './components/AuthContext';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { setAuth } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8001/api/auth/login', { username, password });
//       const token = response.data.token;

//       localStorage.setItem('token', token); // Store the token in localStorage
//       setAuth({ isAuthenticated: true, token }); // Update global auth state

//       navigate('/leads'); // Redirect to leads page
//     } catch (err) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;



// src/Login.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const histroy = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      histroy('/leads')
    }
  },)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/auth/login', { username, password });
      const token = response.data.token;

      localStorage.setItem('token', token); // Save token to localStorage for auth management
      setMessage(response.data.message);
      setError('');
      navigate('/leads'); // Navigate to the leads page after login
    } catch (err) {
      setError('Invalid username or password');
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
