
 import React, { useState } from 'react';
import './Login.css'; // import the CSS file

const Login = ({showPassword,setShowPassword,form, setForm, handleLogin}) => {
const [lockTime, setLockTime] = useState(null);
const [attempts, setAttempts] = useState(0);

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

