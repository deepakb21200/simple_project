

import React from 'react';
import './Register.css';
import { useState } from 'react';

const Register = ({setLoading, setShowSignup}) => {
  const [form, setForm] = useState({ firstName: "", lastName: "", userName: "", password: "" , picture:""});
 const [passwordError, setPasswordError] = useState("");
const [showPassword, setShowPassword] = useState(false);


      const handleSignup = async () => {
    if (passwordError) {
      alert("Please enter a strong password before signing up!");
      return;
    }
  const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("userName", form.userName);
    formData.append("password", form.password);
    if (form.picture) {
      formData.append("picture", form.picture); // file append
    }
  try {
      const res = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
       
        credentials: "include",
        body: formData,
      });
      const data = await res.json(); 
      if (res.status === 201) {
  
  
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setShowSignup(false);
                alert(data.message || "Signup successful!");
        }, 2000);
      } else {
        
    alert(data.error || data.message || "signup failed")
      }
  } catch (error) {
        console.error(error);
    alert("Something went wrong. Please check your connection.");
  }
  };


    const validatePassword = (value) => {
    const strongPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!strongPassword.test(value)) {
      setPasswordError("⚠️ Enter a strong password");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="left-panel">
          <div className="illustration">
            <h2>Welcome!</h2>
            <p>Secure & Smart Registration</p>
            <div className="icons">
              {/* 🔒 💳 📱 ⭐ */}
            <img
    src="/logs.jpg"
    alt="Icon"
    className="w-full h-full"
  />
            </div>
          </div>
        </div>

        <div className="right-panel">
          <h2 className='text-black'>Sign In</h2>
          <p className="subtitle">Join to Us</p>
          <form>

            <input type="text" placeholder="First Name"   onChange={e => setForm({ ...form, firstName: e.target.value })} className='_input'/>

            <input type="text" placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} className='_input' />
            
            
            <input type="text" placeholder="User Name"  onChange={e => setForm({ ...form, userName: e.target.value })} className='_input'/>

              {/* Password wrapper */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input mb-0"
              onChange={e => {
                            setForm({ ...form, password: e.target.value });
                            validatePassword(e.target.value);
                          }}
            />
            <span
              className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
           {passwordError && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                          {passwordError}
                        </p>
                      )}
            {/* File input added here */}
  <input type="file" className="file-input border-none w-auto inline"  />
            <button type="submit" onClick={handleSignup}>REGISTER</button>
          </form>
          <p className="login-link text-black">Already user? <a href="#">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
