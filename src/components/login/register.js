// import React, { useState, useRef } from "react";
// import OTP from "../otp/OTP";
// import Login from "./Login";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [step, setStep] = useState(1);
//   const [showOTP, setShowOTP] = useState(false);
//   const [email, setEmail] = useState("");
//   const hasAccount = false;
//   const [otp, setOtp] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });
//   const inputRefs = [
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//     useRef(),
//   ]; // Refs for each input field
//   // const [correct, setCorrect] = useState(true);

//   const handleInput = (index, e) => {
//     if (e.target.value && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleEmailChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   }

//   const handleSendOTP = async () => {
//     console.log(`http://localhost:5050/users/otp/${email}`);
//     const response = await fetch(`http://localhost:5050/users/otp/${email}`);
//     const otp = await response.json();
//     console.log("THE OTP", otp);
//     console.log("THE OTP", otp.OTP);
//     setOtp(otp.OTP);
//     setStep(2); // Move to the next step (OTP input)
//     setShowOTP(true); // Show the OTP input
//   };

//   const handleVerifyOTP = async () => {
//     const receivedOTP = `${otp}`; // Send OTP to the backend for verification
//     console.log("Received OTP", receivedOTP);

//     const userEnteredOTP = inputRefs.map((ref) => ref.current.value).join("");
//     console.log("userEntered OTP", userEnteredOTP);

//     if (userEnteredOTP === receivedOTP) {
//       try {
//         // Send user data to the backend for registration
//         const response = await fetch("http://localhost:5050/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           // User registered successfully
//           console.log("User registered successfully");
//         } else {
//           // Registration failed
//           console.log("Registration failed");
//         }
//       } catch (error) {
//         console.error("An error occurred", error);
//       }
//     } else {
//       // OTP verification failed
//       console.log("OTP verification failed");
//     }
//   };

//   return (
//     <section className="bg-gray-200 py-8">
//       <div className="container mx-auto">
//         <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">
//             Resource Sharing App Registration
//           </h2>
//           {step === 1 && (
//             <form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//                   placeholder="johndoe@example.com"
//                   onChange={handleEmailChange}
//                   value={formData.email}

//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   password
//                 </label>
//                 <input
//                   type="text"
//                   id="password"
//                   name="password"
//                   className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//                   placeholder="Doe"
//                                     onChange={handleInputChange}
//                   value={formData.password}

//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="username"
//                   className="block text-gray-700 font-semibold mb-2"
//                 >
//                   username
//                 </label>
//                 <input
//                   type="email"
//                   id="username"
//                   name="username"
//                   className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//                   placeholder="johndoe"
//                                     onChange={handleInputChange}
//                   value={formData.username}

//                 />
//               </div>
//               <Link
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                 onClick={handleSendOTP}
//               >
//                 Send OTP
//               </Link>
//             </form>
//           )}

//           {showOTP && (
//             <div className="mt-4">
//               <h3 className="text-xl font-semibold mb-2">
//                 Enter the OTP sent to your phone/email
//               </h3>
//               <div className="flex space-x-2">
//                 {inputRefs.map((ref, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     maxLength="1"
//                     className="w-10 h-10 text-center border rounded"
//                     ref={ref}
//                     onChange={(e) => handleInput(index, e)}
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center">
//                 {" "}
//                 <button
//                   className="text-xl font-semibold mb-2 bg-blue-400 p-2 text-white "
//                   onClick={handleVerifyOTP}
//                 >
//                   Verify
//                 </button>
//                 {/* {correct && <Login />} */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;

import React, { useState, useRef } from "react";
import OTP from "../otp/OTP";
import Login from "./Login";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ]; // Refs for each input field

  const handleInput = (index, e) => {
    if (e.target.value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSendOTP = async () => {
    console.log(`http://localhost:5050/users/otp/${formData.email}`);
    const response = await fetch(
      `http://localhost:5050/users/otp/${formData.email}`
    );
    const otpData = await response.json();
    console.log("THE OTP", otpData);
    console.log("THE OTP", otpData.OTP);
    setOtp(otpData.OTP);
    setStep(2); // Move to the next step (OTP input)
    setShowOTP(true); // Show the OTP input
  };

  const handleVerifyOTP = async () => {
    const receivedOTP = `${otp}`; // Send OTP to the backend for verification
    console.log("Received OTP", receivedOTP);

    const userEnteredOTP = inputRefs.map((ref) => ref.current.value).join("");
    console.log("userEntered OTP", userEnteredOTP);

    if (userEnteredOTP === receivedOTP) {
      console.log(formData);
      try {
        // Send user data to the backend for registration
        const response = await fetch("http://localhost:5050/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // User registered successfully
          console.log("User registered successfully");
          const responseData = await response.json(); // Parse the response JSON
          const { id } = responseData; // Extract the id from the response

          setUserId(id); // Store the id in the state
          console.log("User registered successfully with ID:", id);
        } else {
          // Registration failed
          console.log("Registration failed");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    } else {
      // OTP verification failed
      console.log("OTP verification failed");
    }
  };

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white p-8 border shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Resource Sharing App Registration
          </h2>
          {step === 1 && (
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="johndoe@example.com"
                  onChange={handleEmailChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="Doe"
                  onChange={handleInputChange}
                  value={formData.password}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                  placeholder="johndoe"
                  onChange={handleInputChange}
                  value={formData.username}
                />
              </div>
              <Link
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleSendOTP}
              >
                Send OTP
              </Link>
            </form>
          )}

          {showOTP && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Enter the OTP sent to your phone/email
              </h3>
              <div className="flex space-x-2">
                {inputRefs.map((ref, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-10 h-10 text-center border rounded"
                    ref={ref}
                    onChange={(e) => handleInput(index, e)}
                  />
                ))}
              </div>
              <div className="flex justify-center">
                {" "}
                <button
                  className="text-xl font-semibold mb-2 bg-blue-400 p-2 text-white "
                  onClick={handleVerifyOTP}
                >
                  Verify
                </button>
                {/* {correct && <Login />} */}
              </div>
            </div>
          )}

          {userId && <p>Registration successful! Your user ID is: {userId}</p>}
        </div>
      </div>
    </section>
  );
};

export default Register;
