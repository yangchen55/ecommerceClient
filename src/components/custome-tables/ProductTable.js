import React from "react";
import { Button, Table, Form } from "react-bootstrap";

export const ProductTable = ({ products = [] }) => {
  return (
    <div className="">
      <div className="mb-2">
        <select>
          <option value="">All</option>
          <option value="">Active</option>
          <option value="">Inactive</option>
        </select>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Status</th>
            <th> Name</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>qty</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning">
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
