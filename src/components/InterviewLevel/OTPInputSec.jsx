import React, { useRef, useState } from "react";

const OTPInputSec = ({ inputBox }) => {
  const [otpBox, setOtpBox] = useState(Array(inputBox).fill(""));
  // const [value, setValue] = useState();
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const nayaarr = [...otpBox];
    const valueainp = e.target.value;
    const digit = valueainp[valueainp.length - 1];
    nayaarr[index] = digit;
    setOtpBox(nayaarr);

    if (digit && index < otpBox.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpBox[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSUbmit = ()=>{
    console.log(otpBox)
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h3>OTP Input</h3>
      <div className="flex gap-3">
        {otpBox.map((val, index) => {
          return (
            <input
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={val}
              ref={(el) => (inputRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="border-2 w-20"
            />
          );
        })}
      </div>
      <button onClick={handleSUbmit}>Submit OTP</button>
    </div>
  );
};

export default OTPInputSec;
