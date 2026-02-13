import React, { useState } from "react";

// multi step form
// step UI
// next previous
// component for current page state

// step 1
// 3 pages with previous and next page which shows next previous page1 and page 2

const MultiStepFOrm = () => {
  const [step, curStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    state: "",
  });

  const [error, setError] = useState({});

  const ValidateStep1 = () => {
    let tempErrors = {};

    if (!formData.name) {
      tempErrors.name = "name required";
    }

    if (!formData.email) {
      tempErrors.email = "email required";
    } else if (!formData.email.includes("@")) {
      tempErrors.email = "not valid email";
    }

    setError(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const ValidateStep2 = () => {
    let tempErrors = {};

    if (!formData.address.trim()) {
      tempErrors.address = "address required";
    }

    if (!formData.state.trim()) {
      tempErrors.state = "state required";
    }

    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      const ok = ValidateStep1();
      if (!ok) {
        alert("fill up form values correctly");
        return;
      }
    }

    if (step === 2) {
      const ok = ValidateStep2();
      if (!ok) {
        alert("fill step 2 correctly");
        return;
      }
    }

    curStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-3 h-full w-full items-center justify-center">
      <h3>Multi-Step Form </h3>
      <div>Step:{step}/3</div>
      {step === 1 ? (
        <div className="flex gap-3 flex-col">
          <label className="flex gap-3">
            Name
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData?.name}
              className="border-2"
            />
          </label>

          {error.name && <div className="text-red-500">{error.name}</div>}

          <label className="flex gap-3">
            email
            <input
              value={formData?.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-2"
            />
          </label>

          {error.email && <div className="text-red-500">{error.email}</div>}
        </div>
      ) : step === 2 ? (
        <div className="flex gap-3 flex-col">
          <label className="flex gap-3">
            Address
            <input
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              value={formData?.address}
              className="border-2"
            />
          </label>

          {error.address && <div className="text-red-500">{error.address}</div>}

          <label className="flex gap-3">
            State
            <input
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              value={formData?.state}
              className="border-2"
            />
          </label>

          {error.state && <div className="text-red-500">{error.state}</div>}
        </div>
      ) : (
        <div className="flex flex-col">
          <div>Form values are </div>
          <div> Name:{formData.name}</div>
          <div>Email:{formData.email}</div>
          <div>Address:{formData.address}</div>
          <div> State:{formData.state}</div>
          <button>Submit</button>
        </div>
      )}

      <div className="flex gap-5">
        <button
          disabled={step === 1}
          onClick={() => curStep((prev) => prev - 1)}
        >
          Previous
        </button>
        <button disabled={step == 3} onClick={() => handleNext()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiStepFOrm;
