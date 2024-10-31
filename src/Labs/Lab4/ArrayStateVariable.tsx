import React, { useState } from "react";
import './ArrayStateVariable.css';

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="container mt-3">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-3">Add Element</button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center custom-list-item">
            <span className="fw-bold">{item}</span>
            <button onClick={() => deleteElement(index)} id="wd-delete-element-click" className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

