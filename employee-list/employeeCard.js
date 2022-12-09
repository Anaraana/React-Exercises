import React, { useState } from "react";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import {MdDelete} from 'react-icons/md';

export function EmployeeCard({ employee,onEmployeeEdit,onEmployeeDelete}) {

  return (
    <div className="employees">
      <div className="employee-card-container">
        <div>
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
            src={employee.picture}
            alt="avatar"
          />
          <div className="employee-detail">
            <div>{employee.firstName}</div>
           <div>{employee.lastName}</div>
           <div>{employee.role}</div>
           <div>{employee.company}</div>
           <div>{employee.address1}</div>
           <div>{employee.address2}</div>
           <div>{employee.city}</div>
           <div>{employee.state}</div>
           <div>{employee.zip}</div>
           <div>{employee.phone}</div>
          </div>
          <button  style={{color:"orange"}}onClick={() => onEmployeeEdit()}>
                    <FaEdit />Edit
                  </button>
                  <button style={{color:"red"}}onClick={() => onEmployeeDelete()}>
                    <MdDelete />Delete
                  </button>
        </div>
      </div>
     </div>
  );
}
