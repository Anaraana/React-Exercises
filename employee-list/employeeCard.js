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
          <div >
            <div className="employee-detail"><b>{employee.firstName}</b></div>
           <div className="employee-detail"><b>{employee.lastName}</b></div>
           <div className="employee-detail">{employee.role}</div>
           <div className="employee-detail">{employee.company}</div>
           <div className="employee-detail">{employee.address1}</div>
           <div className="employee-detail">{employee.address2}</div>
           <div className="employee-detail">{employee.city}</div>
           <div className="employee-detail">{employee.state}</div>
           <div className="employee-detail">{employee.zip}</div>
           <div className="employee-detail">{employee.phone}</div>
          </div>
          <div className="employee-card-button"><button   style={{color:"orange", backgroundColor: 'none'}}onClick={() => onEmployeeEdit()}>
                    <FaEdit />Edit
                  </button>
                  <button style={{color:"red"}}onClick={() => onEmployeeDelete()}>
                    <MdDelete />Delete
                  </button>
                  </div>
        </div>
      </div>
     </div>
  );
}
