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








//ye hai original 



import React from 'react';
import './Register.css';
import { useState } from 'react';


const Register = ({setShowSignup,setLoading}) => {

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





    <div className="register-wrapper   flex justify-center items-center  flex-1">
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
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleSignup()
          }}>

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
     
  <input type="file" className="file-input border-none w-auto inline"  />
            <button type="submit"  >REGISTER</button>
          </form>


          <p className="login-link text-black text-lg">
  Already user?{" "}
  <button
    onClick={() => setShowSignup(false)} // toggle to Login
    className="text-blue-600 hover:underline"
  >
    Login here
  </button>
</p>

        </div>
      </div>
    </div>
  );
};

export default Register;
















          {/* <p className="login-link text-black">Already user? <Link to="/login">Login</Link></p> */}
          {/* <button
            onClick={() => setShowSignup(false)} // ✅ toggle to Login
            className="text-blue-600   login-link "
          >
            Login here
          </button> */}





































//pending ye hai




// import React from 'react';
// import './Register.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = ({setLoading, setShowSignup}) => {
//   const [form, setForm] = useState({ firstName: "", lastName: "", userName: "", password: "" , picture:""});
//  const [passwordError, setPasswordError] = useState("");
// const [showPassword, setShowPassword] = useState(false);


//   const validatePassword = (value) => {
//     const strongPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
//     if (!strongPassword.test(value)) {
//       setPasswordError("⚠️ Enter a strong password");
//     } else {
//       setPasswordError("");
//     }
//   };



//     const handleSignup = async () => {
//     if (passwordError) {
//       alert("Please enter a strong password before signing up!");
//       return;
//     }
//   const formData = new FormData();
//     formData.append("firstName", form.firstName);
//     formData.append("lastName", form.lastName);
//     formData.append("userName", form.userName);
//     formData.append("password", form.password);
//     if (form.picture) {
//       formData.append("picture", form.picture); // file append
//     }
//   try {
//       const res = await fetch("http://localhost:3000/user/signup", {
//         method: "POST",
       
//         credentials: "include",
//         body: formData,
//       });
//       const data = await res.json(); 
//       if (res.status === 201) {
  
  
//         setLoading(true);
//         setTimeout(() => {
//           setLoading(false);
//           setShowSignup(false);
//                 alert(data.message || "Signup successful!");
//         }, 2000);
//       } else {
        
//     alert(data.error || data.message || "signup failed")
//       }
//   } catch (error) {
//         console.error(error);
//     alert("Something went wrong. Please check your connection.");
//   }
//   };

//   return (
//     <div className="register-wrapper  flex justify-center items-center  flex-1">
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
//           <h2 className='text-black'>Sign In</h2>
//           <p className="subtitle">Join to Us</p>
//           <form>

//             <input type="text" placeholder="First Name"   onChange={e => setForm({ ...form, firstName: e.target.value })} className='_input'/>
//   <input type="text" placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} className='_input' />
//   <input type="text" placeholder="User Name"  onChange={e => setForm({ ...form, userName: e.target.value })} className='_input'/>
//               {/* Password wrapper */}
//           <div className="password-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               className="password-input mb-0"
//               onChange={e => {
//                             setForm({ ...form, password: e.target.value });
//                             validatePassword(e.target.value);
//                           }}
//             />
//             <span
//               className="toggle-password"
//                 onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "🙈" : "👁️"}
//             </span>
//           </div>
//            {passwordError && (
//                         <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
//                           {passwordError}
//                         </p>
//                       )}
//             {/* File input added here */}
//   <input type="file" className="file-input border-none w-auto inline"  />
//             <button type="submit" onClick={handleSignup}>REGISTER</button>
//           </form>
//           <p className="login-link text-black">Already user? <Link to="/login">Login</Link>
// </p>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Register;