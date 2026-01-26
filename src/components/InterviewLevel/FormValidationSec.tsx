import React, { useState } from "react";

// sabse pehle 3 input lo
// unko manipulate krwao states se states bhi 3 lo name,email,phoneNumber
// ab validate function lo jisme saara validation ka logic likho
// ek array newError krke usme sab set kro newError.name,newError,email,newError.phoneNumber
// fir use set krwa do setError me okay
//  and return via Object.keys(newerror).length === 0
// fir use call krdo e.preventDefault krke 

const FormValidationSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const Validate = () => {
    const newErrors: any = {};
    if (!formData?.name) {
      newErrors.name = "Enter Name";
    }

    if (!formData?.email) {
      newErrors.email = "Enter Email";
    } else if (!formData?.email.includes("@")) {
      newErrors.email = "Enter Valid email";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Enter Phone Number";
    } else if (formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Enter valid Phone Number";
    }

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (Validate()) {
      alert("Form Submitted Succesfully");
    }
  };

  return (
    <div className="w-full justify-center h-full items-center flex flex-col">
      <h3>Form Validation</h3>
      <form onSubmit={(e) => handleSubmit(e)} className="flex gap-4 flex-col">
        <label className="flex gap-2">
          Name
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData?.name}
            className="border-2"
          />
          {error && error.name}
        </label>
        <label className="flex gap-2">
          Email
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData?.email}
            className="border-2"
          />
          {error && error.email}
        </label>
        <label className="flex gap-2">
          PhoneNumber
          <input
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            value={formData?.phoneNumber}
            className="border-2"
          />
          {error && error.phoneNumber}
        </label>
        <button className="border-2">Submit</button>
      </form>
    </div>
  );
};

export default FormValidationSec;
