
import { useEffect, useState } from "react";
import "../CSS/Profile.css";
import { MdCameraEnhance } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
function Profile2() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", userName: "", password: "" , picture:""});
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const [showSignup2, setShowSignup2] = useState(true);



// const navigate = useNavigate();

// const [attempts, setAttempts] = useState(0);
// const [lockTime, setLockTime] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // check krra h ki logged in h ya nhi
  useEffect(() => {
    async function checkLogin() {
      let res = await fetch("http://localhost:3000/user/getProfile", {
        method: "GET",
        credentials: "include",// optinalhia token ko allow kardiya hai ki tum backend me jaasakte ho
      });

      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(true);
        setLoggedInUser(data.user);
      }
    }
    checkLogin();
  }, []);

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

  const handleLogout = async () => {
    const res = await fetch("http://localhost:3000/user/logout", {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      setIsLoggedIn(false);
      setLoggedInUser(null);
      setForm({ firstName: "", lastName: "", userName: "", password: "" ,picture:null});
      setShowSignup(true);
    }
  };

  if (!isLoggedIn) {
    return (

        //   <div className="auth-panel  flex justify-center items-center border-[4px] border-purple-600 ">
       <div className="flex-1  flex  justify-center">
       
            {loading ? (
              <>
                <div className="small-muted">⏳ Creating your account...</div>
                <div className="loader"><i/></div>
              </>
            ) : (
              <> 




   {showSignup ? (
        <Register
         setShowSignup={setShowSignup}
          setLoading={setLoading}
        />
      ) : (
        <Login
         setShowSignup={setShowSignup}
  
          showPassword={showPassword}
          setShowPassword={setShowPassword}
   
         setIsLoggedIn={setIsLoggedIn}
         setLoggedInUser={setLoggedInUser}
        />
      )}




                {/* {showSignup && ( 
                  <div className="form-block">
                    <h2>Signup</h2>
                    <div className="form-grid">
                      <input className="input" placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
                      <input className="input" placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
                      <input className="input" placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />

           
                      <div style={{ position: "relative" }}>
                        <input
                          className="input"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          onChange={e => {
                            setForm({ ...form, password: e.target.value });
                            validatePassword(e.target.value);
                          }}
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: "absolute",
                            right: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            color: "rgba(250,250,250,0.6)"  
                          }}
                        >
                          {showPassword ? "🙈" : "👁️"}
                        </span>
                      </div>

                      {passwordError && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                          {passwordError}
                        </p>
                      )}
                      <div className="profile-pic">
     <label htmlFor="">Profile-:</label>
<input type="file" name="" id="" onChange={e => {
                            setForm({ ...form, picture: e.target.files[0] });
    
                          }}/>
                      </div>
                 
                      <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
                    </div>
                  </div>
                )} */}


               

                {/* <div className="hr" /> */}

                {/* <div className="form-block">
                  <h2>Logins</h2>
                  <div className="form-grid">
                    <input className="input" placeholder="Username" onChange={e => setForm({ ...form, userName: e.target.value })} />

                
                    <div style={{ position: "relative" }}>
                      <input
                        className="input"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "12px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "rgba(250,250,250,0.6)"
                        }}
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </span>
                    </div>

                    <div className="row">
                      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                  </div>
                </div> */}






                   {/* <Login  showPassword= {showPassword} setShowPassword={setShowPassword}
                    handleLogin ={handleLogin} setAttempts={setAttempts} setIsLoggedIn={setIsLoggedIn} /> */}
              </>
            )}
          </div>



        
     
 
    );
  }


  return (
   

//       <div className="auth-page">
//     <div className="profile-card">
//       <div className="welcome-card">
//         <div className="picture-div">
//           <FaUser />
//       <img src={loggedInUser?.picture} alt="" className="picture"/>
//         <button className="edit-icon">
//           <MdCameraEnhance />
//         </button>
//         </div>
  
//         <h2>Welcome {loggedInUser?.firstName} {loggedInUser?.lastName}</h2>
//         <p className="small-muted">Username: {loggedInUser?.userName}</p>
//         <div style={{ marginTop: 12 }}>
//           <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//     </div>
//   </div>




<div className="flex justify-center items-center  flex-1 bg-gradient-to-r from-indigo-100 to-purple-100 p-6">
  <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-10 md:p-16 flex flex-col items-center">
    {/* Profile Picture */}
    <div className="relative w-52 h-52 mb-8 md:mb-10">
      {loggedInUser?.picture ? (
        <img
          src={loggedInUser.picture}
          alt="Profile"
          className="w-full h-full rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-8xl">
          <FaUser />
        </div>
      )}
      {/* Edit button */}
      <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-4 rounded-full shadow-xl hover:bg-indigo-600 transition">
        <MdCameraEnhance size={28} />
      </button>
    </div>

    {/* Welcome text */}
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-3 md:mb-4">
      Welcome {loggedInUser?.firstName} {loggedInUser?.lastName}
    </h2>
    <p className="text-lg text-gray-500 mb-8 md:mb-10 text-center">
      Username: {loggedInUser?.userName}
    </p>

    {/* Logout button */}
    <div className="w-full flex justify-center">
      <button
        onClick={handleLogout}
        className="bg-indigo-500 text-white px-10 py-4 rounded-xl shadow-lg hover:bg-indigo-600 transition transform hover:scale-105"
      >
        Logout
      </button>
    </div>
  </div>
</div>






  );
}

export default Profile2;




  {/* {showSignup &&  
                <Register  form={form} setForm={setForm} showPassword={showPassword} setShowPassword={setShowPassword} passwordError={passwordError}
                validatePassword={validatePassword}/>} */}


    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
  <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
    <div className="flex flex-col items-center">
 
      <div className="relative w-32 h-32 mb-4">
        {loggedInUser?.picture ? (
          <img
            src={loggedInUser.picture}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-indigo-500"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
            <FaUser />
          </div>
        )}
  
        <button className="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full shadow-lg hover:bg-indigo-600 transition">
          <MdCameraEnhance size={20} />
        </button>
      </div>

 
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Welcome {loggedInUser?.firstName} {loggedInUser?.lastName}
      </h2>
      <p className="text-sm text-gray-500 mt-1 text-center">
        Username: {loggedInUser?.userName}
      </p>

 
      <div className="mt-6 w-full flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</div> */}
