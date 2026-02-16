import React, { useState } from "react";

const data = [
  { id: 1, title: "Section 1", content: "Content 1" },
  { id: 2, title: "Section 2", content: "Content 2" },
  { id: 3, title: "Section 3", content: "Content 3" },
];

export default function Accordion() {
  const [openSections, setOpenSections] = useState(null);

  const toggleSection = (id) => {
    if (openSections === null) {
      setOpenSections(id);
    } else if (openSections !== null && openSections !== id) {
      setOpenSections(id);
    } else {
      setOpenSections(null);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3 onClick={() => toggleSection(item.id)}>{item.title}</h3>
          {openSections && openSections == item.id && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
