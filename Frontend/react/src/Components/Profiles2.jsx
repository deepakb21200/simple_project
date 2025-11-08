
import { useEffect, useState } from "react";
import "../CSS/Profile.css";
import { MdCameraEnhance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
function Profile2() {
  const dispatch = useDispatch();//2nov
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [form, setForm] = useState({ 
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    picture:""
  })
    
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const [lockTime, setLockTime] = useState(null);
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


    const validatePassword = (value) => {
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!strongPassword.test(value)) {
      setPasswordError(
        " Password must include uppercase, lowercase, number & special char"
      );
    } else {
      setPasswordError("");
    }
  };


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
    console.log(formData, "formdsfdsdf");
    
    if (form.picture) {
      console.log(form.picture,"formssspicture");
      
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
      setLoggedInUser(profileData.user)

       dispatch({
          type:"productAdd",
          payload:{
            isAdding: true
          }
         })



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
      
      dispatch({
          type:"productAdd",
          payload:{
        isAdding:true
      }
         })
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
       <div className="register-wrapper   flex justify-center items-center  flex-1">
      <div className="register-card">
        <div className="left-panel">
          <div className="illustration">
            <h2>Welcome!</h2>
            <p>Secure & Smart Registration</p>
            <div className="icons">
              {/* 🔒 💳 📱 ⭐ */}
            <img  src="/logs.jpg"   alt="Icon" className="w-full h-full"/>
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

       <input type="text" placeholder="First Name"  
        onChange={e => setForm({ ...form, firstName: e.target.value })} className='_input'/>
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
                          }} />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}  >
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
      ) : (
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
      )}

              </>
            )}
          </div> 
 
    );
  }


  return (
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
