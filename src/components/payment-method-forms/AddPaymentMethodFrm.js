import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postPaymentMethod } from "../../pages/payment-method/pmAction";
import { CustomeInputeField } from "../custom-inpute-field/CustomeInputeField";

export const AddPaymentMethodFrm = () => {
  const dispatch = useDispatch();
  const [frm, setFrm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrm({
      ...frm,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(postPaymentMethod(frm));
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomeInputeField
          onChange={handleOnChange}
          required={true}
          label="Name"
          name="name"
          placeholder="Credit card"
        />
        <CustomeInputeField
          onChange={handleOnChange}
          required={true}
          label="Description"
          name="description"
          as="textarea"
          placeholder="Please click the checkout button to process for the credit card payment"
        />
        <div className="py-3 d-grid">
          <Button type="submit" variant="success">
            Submit Payment Method
          </Button>
        </div>
      </Form>
    </div>
  );
};
