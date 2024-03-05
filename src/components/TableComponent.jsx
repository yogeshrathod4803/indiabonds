import React from "react";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const formDataList = useSelector((state) => state.formDataList);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {formDataList.map((formData, index) => (
          <tr key={index}>
            <td>{formData.firstName}</td>
            <td>{formData.lastName}</td>
            <td>{formData.email}</td>
            <td>{formData.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
