import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const EmployerEdit = () => {
  const [form] = Form.useForm();
  const { apiId } = useParams();

  useEffect(() => {
    axios
      .create({
        baseURL: "https://bark-backend.azurewebsites.net",
        headers: {
          Authorization: "Bearer wVQMuAucphmj42-RJ7QVy6B6lrRxA0qryaKuws9QUxM",
        },
      })
      .get(`api/employee/${apiId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          form.setFieldsValue({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            countryCode: res.data.countryCode,
            address1: res.data.address1,
            address2: res.data.address2,
            email: res.data.email,
            phone: res.data.phone,
            city: res.data.city,
            state: res.data.state,
            zip: res.data.zip,
            role: res.data.role,
            locationName: res.data.locationName,
            note: res.data.note,
          });
        }
      })
      .catch((err) => {})
      .finally(() => {});
  }, [apiId, form]);

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="First Name" name="firstName">
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item label="Country" name="countryCode">
        <Input placeholder="Country" />
      </Form.Item>
      <Form.Item label="Street" name="address1">
        <Input placeholder="Street" />
      </Form.Item>
      <Form.Item label="Apt, ste" name="address2">
        <Input placeholder="Apt, ste" />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Phone Number" name="phone">
        <Input placeholder="Phone Number" />
      </Form.Item>
      <Form.Item label="City" name="city">
        <Input placeholder="City " />
      </Form.Item>
      <Form.Item label="State" name="state">
        <Input placeholder="State" />
      </Form.Item>
      <Form.Item label="Zip Code" name="zip">
        <Input placeholder="Zip Code" />
      </Form.Item>
      <Form.Item label="Staff Role" name="role">
        <Input placeholder="Staff Role" />
      </Form.Item>
      <Form.Item label="Location" name="locationName">
        <Input placeholder="Location " />
      </Form.Item>
      <Form.Item label="Notes" name="note">
        <Input placeholder="Notes " />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};
export default EmployerEdit;
