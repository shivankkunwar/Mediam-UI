import React from "react";
import "./OTP.css"
function OTP() {
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
        <div className="OTP-description">We have sent and OTP to +9199889898989. Please enter the code received to verify.</div>
        <div className="OTP-input"></div>
      </div>
    </div>
  );
}

export default OTP;
