import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
export default function RandomDataTable() {
  const [randomData, setRandomData] = useState([]);
  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/v2/users?size=10")
      .then((res) => {
        if (res.status === 200) {
          setRandomData(res.data);
          console.log(res.data);
        }
      });
  }, []);
  return (
    <div>
      Random Data
      <table>
        <thead>
          <tr>
            <th></th>
            <th colSpan={2}>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User Name</th>
            <th>Employment</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {randomData.map((data) => {
            return (
              <tr key={data.id}>
                <td>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={data.avatar}
                  />
                </td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.gender}</td>
                <td>
                    <div className="dob">{data.date_of_birth}
                    </div></td>
                
                <td>{data.email}</td>
                <td>{data.phone_number}</td>
                <td>{data.username}</td>
                <td>
                  <div>{data.employment.title}</div>
                  <div style={{ color: "gray" }}>
                    {data.employment.key_skill}
                  </div>
                </td>
                <td>
                    <div>{data.address.street_address}</div>
                    <span>{data.address.city}, </span>
                    <span>{data.address.state}</span>
                    <span>{data.address.zip_code}</span>
                </td>
                <td>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
