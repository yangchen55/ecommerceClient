import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethod,
  getPaymentMethods,
} from "../../pages/payment-method/pmAction";
import { setSelectedPM } from "../../pages/payment-method/pmSlice";
import { setShowModal } from "../../system/systemSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import { AddPaymentMethodFrm } from "../payment-method-forms/AddPaymentMethodFrm";
import { EditPaymentMethodFrm } from "../payment-method-forms/EditPaymentMethodFrm";
export const PmTable = () => {
  const dispatch = useDispatch();

  const { paymentMethods, selectedPm } = useSelector((state) => state.pm);

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    if (
      window.confirm("Are you sure you want to delete this payment method?")
    ) {
      dispatch(deletePaymentMethod(_id));
    }
  };

  const onEdit = (item) => {
    dispatch(setShowModal(true));
    dispatch(setSelectedPM(item));
  };
  return (
    <div>
      {selectedPm._id ? (
        <CustomModal title="Edit payment method">
          <EditPaymentMethodFrm selectedPm={selectedPm} />
        </CustomModal>
      ) : (
        <CustomModal title="Add new payment method">
          <AddPaymentMethodFrm />
        </CustomModal>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Status</th>
            <th> Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(item)}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
