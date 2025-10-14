// import React from 'react';
// import './Register.css';

// const Register = () => {
//   return (
//     <div className="register-wrapper">
//       <div className="register-card">
//         <div className="left-panel">
//           <div className="illustration">
//             <h2>Welcome!</h2>
//             <p>Secure & Smart Registration</p>
//             <div className="icons">
//               {/* 🔒 💳 📱 ⭐ */}
//             <img
//     src="/logs.jpg"
//     alt="Icon"
//     className="w-full h-full"
//   />
//             </div>
//           </div>
//         </div>

//         <div className="right-panel">
//           <h2>Register</h2>
//           <p className="subtitle">Join to Us</p>
//           <form>
//             <input type="text" placeholder="Your Name" defaultValue="John Deo" />
//             <input type="email" placeholder="Email Address" defaultValue="Example@gmail.com" />
//             <input type="password" placeholder="Password" />
//             <input type="password" placeholder="Confirm Password" />
//             {/* File input added here */}
//   <input type="file" className="file-input border-none" />
//             <button type="submit">REGISTER</button>
//           </form>
//           <p className="login-link">Already user? <a href="#">Login</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;









import React from 'react';
import './Register.css';
import { useState } from 'react';

const Register = ({form, setForm, showPassword, setShowPassword,passwordError ,
   validatePassword
}) => {
    // const [showPassword, setShowPassword] = useState(false);
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
            <button type="submit">REGISTER</button>
          </form>
          <p className="login-link text-black">Already user? <a href="#">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
