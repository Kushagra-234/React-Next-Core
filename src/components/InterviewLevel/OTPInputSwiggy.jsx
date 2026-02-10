import React, { useRef, useState } from "react";

const OTPInputSwiggy = ({ onChangeOTP }) => {
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef([]);

  //   inputRef = {
  //     current: [],
  //   };

  const handleChange = (e, index) => {
    const valueInput = e.target.value;
    const digit = valueInput[valueInput.length - 1];
    const newArr = [...otpInput];
    newArr[index] = digit;
    setOtpInput(newArr);

    if (digit && index < otpInput.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpInput[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        gap: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>OTP INPUT</h3>
      <div style={{ display: "flex", gap: 8 }}>
        {otpInput.map((value, index) => {
          return (
            <input
              maxLength={1}
              value={value}
              inputMode="numeric"
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              style={{ border: "2px solid black", width: "60px" }}
            />
          );
        })}
      </div>
      <button
        onClick={() => onChangeOTP(otpInput.join(""))}
        style={{ cursor: "pointer", border: "2px solid black", padding: "2px" }}
      >
        Submit
      </button>
    </div>
  );
};

export default OTPInputSwiggy;
