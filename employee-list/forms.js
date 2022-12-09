import React, { useEffect, useState } from "react";
import avatar1 from "./image/avatar1.png";
import avatar2 from "./image/avatar2.png";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.png";
import avatar5 from "./image/avatar5.png";
import avatar6 from "./image/avatar6.png";
import avatar7 from "./image/avatar7.png";
import avatar8 from "./image/avatar8.png";

const images = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
];

export function EmployeeForm({ onFormSubmit, editEmpInfo }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  useEffect(() => {
    if(editEmpInfo !== -1) {
      setFormData(editEmpInfo)
    }
  }, [editEmpInfo])

  const onFormValueChange = (e) => {
    console.log(e.target);
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((currState) => ({
      ...currState,
      [fieldName]: fieldValue,
    }));
  };
  // console.log(formData.firstName)
  // console.log(formData[firstName])
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("child", formData);
    onFormSubmit({
      ...formData,
      picture: images[Math.floor(Math.random() * images.length)],
    });
    setFormData({
      firstName: "",
      lastName: "",
      role: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <label>
          <input
            name="firstName"
            placeholder="Fist Name"
            value={formData.firstName}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="city"
            placeholder="city"
            value={formData.city}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="state"
            placeholder="state"
            value={formData.state}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="zip"
            placeholder="zip"
            value={formData.zip}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => onFormValueChange(e)}
          ></input>
          <button style={{ color: "blue" }} type="submit">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
