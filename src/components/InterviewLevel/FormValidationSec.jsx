import React, { useEffect, useState } from "react";

const FormValidationSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const Validate = () => {
    const newErros = { name: "", email: "" };

    if (!formData.name) {
      newErros.name = "Name required";
    } else if (formData.name.length < 3) {
      newErros.name = "Short Name length";
    }

    if (!formData.email) {
      newErros.email = "Email required";
    } else if (!formData.email.includes("@")) {
      newErros.email = "Not valid email";
    }

    setErrors(newErros);

    return !newErros.name && !newErros.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Validate()) {
      alert("form Data submitted");
      console.log("formData subiktted");
    }

    if (editId !== null) {
      const nayaUser = [...users];
      nayaUser[editId] = { name: formData.name, email: formData.email };
      setUsers(nayaUser);
      setEditId(null);
    } else {
      setUsers([...users, { ...formData }]);
    }
  };

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  const handleDelete = (id) => {
    const newArr = users.filter((iitem, idx) => {
      return idx !== id;
    });
    setUsers(newArr);
  };

  const handleEdit = (id, userList) => {
    setEditId(id);
    setFormData({ ...formData, name: userList.name, email: userList.email });
  };
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h3>Form validation</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="flex gap-2">
          Name
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-2"
          />
          {errors && errors.name}
        </label>
        <label className="flex gap-2">
          Email
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-2"
          />
          {errors && errors.email}
        </label>
        <button className="border-2 flex justify-center items-center w-[50%] p-1">
          Submit
        </button>
      </form>
      {users.map((userList, id) => {
        return (
          <div className="flex gap-5">
            <div className="flex gap-2">
              {userList.name}
              {userList.email}
            </div>
            <button onClick={() => handleDelete(id)} className="border-2">
              Delete
            </button>
            <button
              onClick={() => handleEdit(id, userList)}
              className="border-2"
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FormValidationSec;
