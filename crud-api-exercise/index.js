import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "antd";
import moment from "moment";
import{useNavigate} from "react-router-dom";
import './employer-edit'

export default function CrudApi() {
  const [api, setApi] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .create({
        baseURL: "https://bark-backend.azurewebsites.net",
        headers: {
          Authorization: "Bearer wVQMuAucphmj42-RJ7QVy6B6lrRxA0qryaKuws9QUxM",
        },
      })
      .post("/api/employee/list", {
        pagination: { current: 1, pageSize: 10 },
        sorter: { field: "firstName", order: "descend" },
        search: "",
      })
      .then((res) => {
        console.log(res);
        setApi(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);
  return (
    <div>
      <Table

        dataSource={api}
        columns={[
          {
            title: "Name",
            dataIndex: "firstName",
            render: (firstName, api) => {
              return (
                <>
                  {api.firstName}
                  {api.lastName}
                </>
              );
            },
          },
          { title: "Email", dataIndex: "email" },
          { title: "Phone", dataIndex: "phone" },
          { title: "Role", dataIndex: "role" },
          {
            title: "Created Date",
            dataIndex: "createdDate",
            render: (createdDate) => {
              return <span>{moment(createdDate).format("MM/DD/YYYY")}</span>;
            },
          },
          {
            title: "Status",
            dataIndex: "deactivatedDate",
            render: (api) => {
              return (
                <Button 
                  type="primary"
                  onClick={() => {
                    console.log(api.id);
                  }}
                >
                  Active
                </Button>
              );
            },
          },
          {
            title: "",
            dataIndex: "",
            render: (api) => {
              return (
                <Button
                  type="primary"
                  onClick={() =>{
                    navigate(`${api.id}`) }}
                >
                  Edit
                </Button>
              );
            },
          },
        ]}
      />
    </div>
  );
}
