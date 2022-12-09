import React, { useState } from "react";
import { EmployeeCard } from "./employeeCard";
import { EmployeeForm } from "./forms";

export default function EmployeeList() {
  const [employs, setemploys] = useState([]);
  const [editEmpInfo, setEditEmInfo] = useState(-1);
  const onDelete = () => {};
  console.log("employs", employs);

  return (

    <div className="body-employee">
      <h1>Employee Form</h1>
      <EmployeeForm
        onFormSubmit={(empinfo) => {
          if (editEmpInfo === -1) {
            setemploys((currState) => {
              return [...currState, empinfo];
            });
          } else {
            setemploys((currState) => {
              return currState.map((emp, empIdx) => {
                if (empIdx === empinfo.empIdx) {
                  return empinfo;
                } else {
                  return emp;
                }
              });
            });
            setEditEmInfo(-1);
          }
        }}
        editEmpInfo={editEmpInfo}
      />
      <div className="employees-container">
        {employs.map((emplinfo, emplinfoIdx) => {
          return (
            <EmployeeCard
              employee={emplinfo}
              key={emplinfoIdx}
              onEmployeeDelete={() => {
                setemploys((currState) => {
                  return currState.filter((emp, empIdx) => {
                    if (emplinfoIdx !== empIdx) {
                      return emp;
                    }
                  });
                });
              }}
              onEmployeeEdit={() => {
                setEditEmInfo({ ...emplinfo, empIdx: emplinfoIdx });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}