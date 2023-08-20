import React, { useState } from "react";

const OTP = () => {
  const [otp, setOTP] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          className="w-12 h-12 m-2 text-center text-2xl border rounded focus:outline-none focus:border-blue-500"
          value={digit}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default OTP;