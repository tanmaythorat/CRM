// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const endpoint = isLogin ? '/api/user/login' : '/api/auth/register';
//     const payload = isLogin
//       ? { email: formData.email, password: formData.password }
//       : formData;

//     try {
//       const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
//       if (isLogin) {
//         localStorage.setItem('token', response.data.token);
//         alert('Login successful!');
//         navigate('/dashboard');
//       } else {
//         alert('Registration successful!');
//         setIsLogin(true);
//       }
//     } catch (error: any) {
//       alert(error.response?.data?.error || 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-900 p-6 relative">
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500 rounded-bl-[60px]"></div>
//       <div className="relative z-10 flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
//         <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center bg-green-900 text-white">
//           <img src="https://cdn.vectorstock.com/i/2000v/51/87/student-avatar-user-profile-icon-vector-47025187.avif" alt="User" className="w-20 h-20 rounded-full mb-4" />
//           <h2 className="text-4xl font-bold mb-2">{isLogin ? 'WELCOME' : 'JOIN US'}</h2>
//           <p className="text-sm text-gray-300">
//             {isLogin ? "Don't have an account?" : 'Already have an account?'}
//             <button
//               onClick={() => setIsLogin(!isLogin)}
//               className="text-yellow-400 font-semibold ml-2 hover:underline"
//             >
//               {isLogin ? 'Sign Up' : 'Sign In'}
//             </button>
//           </p>
//         </div>
//         <div className="w-1/2 p-10">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && (
//               <>
//                 <div className="flex space-x-2">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-1/2 px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-1/2 px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                   />
//                 </div>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                 />
//               </>
//             )}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//             />

//             {!isLogin && (
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//               />
//             )}

//             <div className="flex justify-between text-sm">
//               {isLogin && <span className="text-gray-600">Forgot Password?</span>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
//             >
//               {isLogin ? 'LOGIN' : 'SIGN UP'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     otp: '',
//     newPassword: '',
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🔹 Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/users/login', {
//         email: formData.email,
//         password: formData.password,
//       });

//       localStorage.setItem('token', response.data.token); // Store token
//       alert('Login Successful!');
//       navigate('/dashboard'); // Redirect to Dashboard
//     } catch (err) {
//       alert(err.response?.data?.error || 'Invalid credentials');
//     }
//   };

//   // 🔹 Handle Forgot Password
//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/forgot-password', { email: formData.email });
//       alert('OTP sent to your email.');
//       setOtpSent(true);
//     } catch (err) {
//       alert(err.response?.data?.error || 'Something went wrong.');
//     }
//   };

//   // 🔹 Handle OTP Verification
//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/verify-otp', { email: formData.email, otp: formData.otp });
//       alert('OTP verified successfully.');
//       setOtpVerified(true);
//     } catch (err) {
//       alert(err.response?.data?.error || 'Invalid OTP.');
//     }
//   };

//   // 🔹 Handle Reset Password
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/reset-password', {
//         email: formData.email,
//         newPassword: formData.newPassword,
//       });
//       alert('Password reset successful! You can now log in.');
//       setIsForgotPassword(false);
//       setOtpSent(false);
//       setOtpVerified(false);
//       setIsLogin(true);
//     } catch (err) {
//       alert(err.response?.data?.error || 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-900 p-6 relative">
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500 rounded-bl-[60px]"></div>
//       <div className="relative z-10 flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
//         <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center bg-green-900 text-white">
//           <img
//             src="https://cdn.vectorstock.com/i/2000v/51/87/student-avatar-user-profile-icon-vector-47025187.avif"
//             alt="User"
//             className="w-20 h-20 rounded-full mb-4"
//           />
//           <h2 className="text-4xl font-bold mb-2">{isForgotPassword ? 'Reset Password' : isLogin ? 'WELCOME' : 'JOIN US'}</h2>
//           {!isForgotPassword && (
//             <p className="text-sm text-gray-300">
//               {isLogin ? "Don't have an account?" : 'Already have an account?'}
//               <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-400 font-semibold ml-2 hover:underline">
//                 {isLogin ? 'Sign Up' : 'Sign In'}
//               </button>
//             </p>
//           )}
//         </div>

//         <div className="w-1/2 p-10">
//           {isForgotPassword ? (
//             <>
//               {!otpSent ? (
//                 <form onSubmit={handleForgotPassword} className="space-y-6">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                   />
//                   <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
//                     Send OTP
//                   </button>
//                 </form>
//               ) : !otpVerified ? (
//                 <form onSubmit={handleVerifyOTP} className="space-y-6">
//                   <input
//                     type="text"
//                     name="otp"
//                     placeholder="Enter OTP"
//                     required
//                     value={formData.otp}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                   />
//                   <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
//                     Verify OTP
//                   </button>
//                 </form>
//               ) : (
//                 <form onSubmit={handleResetPassword} className="space-y-6">
//                   <input
//                     type="password"
//                     name="newPassword"
//                     placeholder="Enter new password"
//                     required
//                     value={formData.newPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//                   />
//                   <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
//                     Reset Password
//                   </button>
//                 </form>
//               )}
//               <button onClick={() => setIsForgotPassword(false)} className="text-sm text-gray-600 mt-4 hover:underline">
//                 Back to Login
//               </button>
//             </>
//           ) : (
//             <form onSubmit={handleLogin} className="space-y-6">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none"
//               />

//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-600 cursor-pointer hover:underline" onClick={() => setIsForgotPassword(true)}>
//                   Forgot Password?
//                 </span>
//               </div>

//               <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
//                 LOGIN
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    otp: '',
    newPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      if (!otpSent) {
        await axios.post('http://localhost:5000/api/users/forgot-password', { email: formData.email });
        setOtpSent(true);
        alert('OTP sent to your email.');
      } else if (!otpVerified) {
        await axios.post('http://localhost:5000/api/users/verify-otp', { email: formData.email, otp: formData.otp });
        setOtpVerified(true);
        alert('OTP verified successfully.');
      } else {
        await axios.post('http://localhost:5000/api/users/reset-password', { email: formData.email, newPassword: formData.newPassword });
        alert('Password reset successful!');
        setIsForgotPassword(false);
        setOtpSent(false);
        setOtpVerified(false);
        setIsLogin(true);
      }
      return;
    }

    const endpoint = isLogin ? '/api/users/login' : '/api/users/register';
    const payload = isLogin ? { email: formData.email, password: formData.password } : formData;

    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Registration successful!');
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-900 p-6 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500 rounded-bl-[60px]"></div>
      <div className="relative z-10 flex w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col justify-center items-center text-center bg-green-900 text-white">
          <img src="https://cdn.vectorstock.com/i/2000v/51/87/student-avatar-user-profile-icon-vector-47025187.avif" alt="User" className="w-20 h-20 rounded-full mb-4" />
          <h2 className="text-4xl font-bold mb-2">{isForgotPassword ? 'Reset Password' : isLogin ? 'WELCOME' : 'JOIN US'}</h2>
          {!isForgotPassword && (
            <p className="text-sm text-gray-300">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-400 font-semibold ml-2 hover:underline">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          )}
        </div>
        <div className="w-1/2 p-10">
          {isForgotPassword ? (
            // Forgot Password Form
            <>
              {!otpSent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                  <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Send OTP</button>
                </form>
              ) : !otpVerified ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="otp" placeholder="Enter OTP" required value={formData.otp} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                  <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Verify OTP</button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="password" name="newPassword" placeholder="Enter new password" required value={formData.newPassword} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                  <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Reset Password</button>
                </form>
              )}
              <button onClick={() => setIsForgotPassword(false)} className="text-sm text-gray-600 mt-4 hover:underline">Back to Login</button>
            </>
          ) : (
            // Login / Register Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                  <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                  <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
                </>
              )}
              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
              <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />
              {isLogin && <button onClick={() => setIsForgotPassword(true)} className="text-sm text-gray-600 hover:underline">Forgot Password?</button>}
              {!isLogin && <input type="password" name="confirmPassword" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border-b-2 border-yellow-500 focus:outline-none" />}
              <button type="submit" className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">{isLogin ? 'LOGIN' : 'SIGN UP'}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
