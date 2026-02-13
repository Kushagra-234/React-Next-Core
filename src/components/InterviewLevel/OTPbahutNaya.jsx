import React, { useRef, useState } from "react";

const OTPbahutNaya = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // only last numeric char
    const digit = value.replace(/\D/g, "").slice(-1);

    const copy = [...otp];
    copy[index] = digit;
    setOtp(copy);

    if (digit && index < otp.length - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const copy = [...otp];
        copy[index] = "";
        setOtp(copy);
      } else if (index > 0) {
        inputRef.current[index - 1]?.focus();
        const copy = [...otp];
        copy[index - 1] = "";
        setOtp(copy);
      }
    }
  };

  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData("text");

    const arr = pastedText.split("").slice(0, 4);

    const newOtp = ["", "", "", ""];
    arr.forEach((char, i) => {
      newOtp[i] = char;
    });

    setOtp(newOtp);

    e.preventDefault();
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    console.log("OTP:", otpValue);
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full w-full">
      <h3>Otp</h3>

      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <input
            onPaste={handlePaste}
            key={index}
            value={digit}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRef.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            className="w-20 h-8 border-2 text-center"
            maxLength={1}
            inputMode="numeric"
          />
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OTPbahutNaya;
