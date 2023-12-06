import React from "react";
import {Link} from "react-router-dom"
import "./Login.css";
function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="outer-login">
        <div className="sign-title">Sign In</div>
        <div className="sign-description">
          Please enter your mobile number to login. We will send an OTP to
          verify your number
        </div>
        <div className="sign-mobile">
          <svg
            width="26"
            height="19"
            viewBox="0 0 26 19"
          
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              y="0.900513"
              width="26"
              height="17.3672"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_0_8988"
                  transform="scale(0.00390625 0.00584795)"
                />
              </pattern>
              <image
                id="image0_0_8988"
                width="256"
                height="171"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACrCAIAAAAGvNWoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2MkYxN0M1MEM3QTExRTY5MUMwQzk3NDc0NTk5MkZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2MkYxN0M2MEM3QTExRTY5MUMwQzk3NDc0NTk5MkZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDYyRjE3QzMwQzdBMTFFNjkxQzBDOTc0NzQ1OTkyRkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDYyRjE3QzQwQzdBMTFFNjkxQzBDOTc0NzQ1OTkyRkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5kOA7bAAAT8UlEQVR42uyd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"
              />
            </defs>
          </svg>
            <div className="country-code">+91</div>
            <input placeholder="Phone number" />
        </div>
        <Link  to= "/otp">
        <div className="sign-button" >Sign In</div>
        </Link>
       
      </div>
    </div>
  );
}

export default Login;
