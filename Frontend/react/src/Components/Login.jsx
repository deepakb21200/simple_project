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




// ye hai orignal 


  import React, { useState } from 'react';
  import './Login.css';  
import { useNavigate } from 'react-router-dom';
 
  const Login = ({showPassword,setShowPassword, setShowSignup, setIsLoggedIn,setLoggedInUser}) => {
  const [form, setForm] = useState({ userName: "", password: ""});
  // console.log(handleLogin, "handlelogin")
const [attempts, setAttempts] = useState(0);
const [lockTime, setLockTime] = useState(null);

const navigate = useNavigate();


  const handleLogin = async () => {
     if (lockTime && Date.now() - lockTime < 2 * 60 * 1000) {
    alert("Too many failed attempts. Please try again after 2 minutes.");
    return;
  }
 
  
    const res = await fetch("http://localhost:3000/user/login", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ userName: form.userName, password: form.password }),
    });
    const data = await res.json();

    if (res.ok) {
      setIsLoggedIn(true);
      //yaha daalna hai 
       setAttempts(0);
          if (data.isAdmin) {
      
        navigate("/admin");
        return; 
      }
         const profileRes = await fetch("http://localhost:3000/user/getProfile", {
      method: "GET",
      credentials: "include",
    });
    const profileData = await profileRes.json();
      setLoggedInUser(profileData.user);
      setAttempts(0)// ye maine kara hai

       dispatch({
          type:"productAdd",
          payload:{
            isAdding: true
          }
         })//2 nov
    }
    else{
        setAttempts(prev => prev + 1);
        //0
        //1
        if(attempts+1 >=3){
              setLockTime(Date.now());   
      alert("Too many failed attempts! Try again in 2 minutes.");
      return;
        }
      alert(data.error|| "login failed")
    }
  };







    return (
      <div className="login-wrapper flex-1">
        <div className="login-card">
          <h2 className="login-title text-black">Login</h2>
          <p className="login-subtitle">Welcome back! Please login to your account.</p>
          <form onSubmit={(e) => e.preventDefault()} className="login-form">
            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="login-input"
               onChange={e => setForm({ ...form, userName: e.target.value })}
            />

            {/* Password wrapper */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}   placeholder="Password"
                 className="password-input mb-0"
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>

                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit"  onClick={handleLogin}  className="login-button" >
              LOGIN </button>
          </form>
        

          <p className="register-text">
  New user?{" "}
  <button
    onClick={() => setShowSignup(true)} // ✅ toggle to Register
    className="register-link text-blue-600 hover:underline"
  >
    Register here
  </button>
</p>
        </div>
      </div>
    );
  };

  export default Login;



































































  {/* <p className="register-text">
            New user? <Link to="/register" className="register-link">
    Register here </Link>
          </p> */}




//pending




//  import React, { useState } from 'react';
// import './Login.css';  
// import { Link, useNavigate } from 'react-router-dom';

// const Login = ({}) => {
// const [lockTime, setLockTime] = useState(null);
// const [attempts, setAttempts] = useState(0);
//  const [form, setForm] = useState({ userName: "", password: ""});
//  const [showPassword, setShowPassword] = useState(false);
//  const navigate = useNavigate();

//   const handleLogin = async () => {
//      if (lockTime && Date.now() - lockTime < 2 * 60 * 1000) {
//     alert("Too many failed attempts. Please try again after 2 minutes.");
//     return;
//   }
//     const res = await fetch("http://localhost:3000/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify({ userName: form.userName, password: form.password }),
//     });
//     const data = await res.json();

//     if (res.ok) {
//       setIsLoggedIn(true);
//       //yaha daalna hai 
//        setAttempts(0);
//           if (data.isAdmin) {
      
//         navigate("/admin");
//         return; 
//       }
//          const profileRes = await fetch("http://localhost:3000/user/getProfile", {
//       method: "GET",
//       credentials: "include",
//     });
//     const profileData = await profileRes.json();
//       setLoggedInUser(profileData.user);
//     }
//     else{
//         setAttempts(prev => prev + 1);
//         //0
//         //1
//         if(attempts+1 >=3){
//               setLockTime(Date.now());   
//       alert("Too many failed attempts! Try again in 2 minutes.");
//       return;
//         }
//       alert(data.error|| "login failed")
//     }
//   };
//   return (
//     <div className="login-wrapper   flex-1">
//       <div className="login-card">
//         <h2 className="login-title text-black">Login</h2>
//         <p className="login-subtitle">Welcome back! Please login to your account.</p>
//         <form onSubmit={(e) => e.preventDefault()} className="login-form">
//           {/* Username */}
//           <input
//             type="text"
//             placeholder="Username"
//             className="login-input"
//              onChange={e => setForm({ ...form, userName: e.target.value })}
//           />

//           {/* Password wrapper */}
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="password-input mb-0"
//               onChange={e => setForm({ ...form, password: e.target.value })}
//             />
//             <span
//               className="toggle-password"
//                onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>

//           <button
//             type="submit"
//             onClick={handleLogin}
//             className="login-button"
//           >
//             LOGIN
//           </button>
//         </form>
//         <p className="register-text">
//           New user? <Link to="/register" className="register-link">
//   Register here
// </Link>

//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

