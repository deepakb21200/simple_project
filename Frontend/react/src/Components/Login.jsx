// import React from 'react';
// import './Login.css';

// const Login = ({showPassword, handleLogout}) => {
//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2>Login</h2>
//         <p className="subtitle">Welcome back! Please login to your account.</p>
//         <form>
//           <input type="text" placeholder="Username" />
//           <input type="password" placeholder="Password" />
//           <button type="submit" onClick={handleLogout}>LOGIN</button>
//         </form>
//         <p className="register-link">New user? <a href="#">Register here</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';

// const Login = ({ handleLogout }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-2">Login</h2>
//         <p className="text-gray-500 mb-6">Welcome back! Please login to your account.</p>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           {/* Username */}
//           <input
//             type="text"
//             placeholder="Username"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           {/* Password wrapper */}
//           <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:ring-2 focus-within:ring-indigo-500">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="w-full py-3 outline-none border-none mb-0"
//             />
//             <span
//               className="ml-2 cursor-pointer select-none text-xl"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           <button
//             type="submit"
//             onClick={handleLogout}
//             className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
//           >
//             LOGIN
//           </button>
//         </form>
//         <p className="text-center text-gray-500 mt-4">
//           New user? <a href="#" className="text-indigo-600 hover:underline">Register here</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





 import React, { useState } from 'react';
import './Login.css'; // import the CSS file

const Login = ({showPassword,setShowPassword,form, setForm, handleLogin}) => {
//   const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title text-black">Login</h2>
        <p className="login-subtitle">Welcome back! Please login to your account.</p>
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="login-input"
          />

          {/* Password wrapper */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input mb-0"
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="toggle-password"
               onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="login-button"
          >
            LOGIN
          </button>
        </form>
        <p className="register-text">
          New user? <a href="#" className="register-link">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

