import React, { useState } from "react";
import "./OTP.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import OTPInputGroup from "./OTPinput/OTPInputGroup"
function OTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const { phone } = location.state;
 const [OTPValues, setOTPValues] = useState({});
 

  const handleSubmit = () => {  
    
     
  const enteredOtp = Object.values(OTPValues).join('');

  
  if (enteredOtp === '5678') {
       navigate("/dashboard")
    
  } else {
    console.log('OTP is incorrect.');
    
  }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="outer-otp">
        <div className="OTP-title">OTP Verification</div>
        <div className="OTP-description">
          We have sent and OTP to {phone}. Please enter the code received to
          verify.
        </div>
        <div className="OTP-input"> 
            <OTPInputGroup setOTPValues={setOTPValues} />
        </div>
        <div className="OTP-verify-button" onClick={handleSubmit}> Verify</div>

        <div className="OTP-other">
          <div className="OTP-resend"> Resend OTP</div>
          <div className="OTP-useother">Use another number</div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
