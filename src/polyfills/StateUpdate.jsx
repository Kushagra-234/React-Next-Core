// update kro states ko

import { useState } from "react";

// jaise

// for a string
// const [user, setUser] = useState("");
// setUser("manu");

// for a number
const [value, setValue] = useState(10);
setValue(12);

const [objVal, setObjVal] = useState({
  name: "kushagra",
  age: 20,
});

setObjVal({ ...objVal, age: 15 });

const [arr, setArr] = useState(["manu", "tanu", "adi"]);

setArr([...arr, "shiva"]);

// const [user, setUser] = useState({
//   name: "Kushagra",
//   address: {
//     city: "Delhi",
//     pincode: 110001,
//   },
// });

// // setUser({...user,address.city:"Bangalore"})

// setUser({
//   ...user,
//   address: {
//     ...user.address,
//     city: "Bangalore",
//   },
// });

// const [user, setUser] = useState({
//   name: "Kushagra",
//   address: {
//     city: "Delhi",
//     pincode: 110001,
//   },
// });

// setUser({
//   ...user,
//   address: {
//     ...user.address,
//     city: "Deloitte",
//   },
// });

// const [user, setUser] = useState({
//   name: "Kushagra",
//   skills: [
//     { id: 1, name: "React", level: "beginner" },
//     { id: 2, name: "JS", level: "intermediate" },
//   ],
// });

// setUser({ ...user, skills: [...skills, (level: "Advanced")] });

// const [user, setUser] = useState({
//   name: "Kushagra",
//   address: {
//     city: "Delhi",
//     pincode: 110001,
//     cityLane: {
//       cityLocal: "312 Dinesh Reddy",
//     },
//   },
// });
// // if we want to change cityLocal

// // setUser({
// //   ...user.address,
// //   cityLane: {
// //     ...user.address.cityLane,
// //     cityLocal: "313 Dinesh",
// //   },
// // });

// setUser({
//   ...user,
//   address: {
//     ...user.address,
//     city: "Bangalore",
//     cityLane: {
//       ...user.address.cityLane,
//       cityLocal: "313 dinesh reddey",
//     },
//   },
// });

// setUser({
//   ...user,
//   address: {
//     ...user.address,
//     cityLane: {
//       ...cityLane,
//       cityLocal: "block 6 ",
//     },
//   },
// });

const [user, setUser] = useState({
  name: "Kushagra",
  skills: [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "JS", level: "Advanced" },
  ],
});
//   level update

setUser({
  ...user,
  skills: user.skills.map((item) => {
    return item.id === 1 ? { ...item, level: "beginner" } : item;
  }),
});
