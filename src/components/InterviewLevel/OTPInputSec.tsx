import React, { useRef, useState } from "react";

const OTPInputSec = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [input, setInput] = useState("");
  const inputRef: any = useRef([]);
  //   internally
  // const inputRef={
  // current :
  // }

  // inputRefs = {
  //     current: []
  //   }

  const handleChange = (e, index) => {
    const value = e.target.value;
    const digit = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < otp.length - 1) inputRef.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  return (
    <div className="flex w-full flex-col justify-center items-center h-full">
      <h3>OTP Input</h3>
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-2">
          {otp.map((digit, index) => {
            return (
              <input
                ref={(el) => {
                  inputRef.current[index] = el;
                }}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="border-2 mt-2 w-12"
              />
            );
          })}
        </div>
        <button style={{ border: "2px solid black" }}>Submit</button>
      </div>
    </div>
  );
};

export default OTPInputSec;
