import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CustomeInputeField } from "../../components/custom-inpute-field/CustomeInputeField";
import { AdminLayout } from "../layout/AdminLayout";
import { postProductAction } from "./productAction";

export const NewProduct = () => {
  const dispatch = useDispatch();
  const [formDt, setFormDt] = useState({});
  const [newImages, setNewImages] = useState({})

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { images, ...rest } = formDt;
    const formData = new FormData()

    for (let key in rest) {
      formData.append(key, rest[key])
    }
    return;
    dispatch(postProductAction(formData));
  };
  const handleOnImageUploaded = (e) => {
    const { files } = e.target;

  }

  const inputes = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Samsung TV.",
      required: true,
    },
    {
      name: "sku",
      label: "Sku",
      type: "text",
      placeholder: "SAM-TV-8",
      required: true,
    },
    {
      name: "qty",
      label: "Qty",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      placeholder: "1000",
      required: true,
    },
    {
      name: "salesPrice",
      label: "Sales Price",
      type: "number",
      placeholder: "800",
    },
    {
      name: "salesStartDate",
      label: "Sales Start Date",
      type: "date",
    },
    {
      name: "salesEndDate",
      label: "Sales End Date",
      type: "date",
    },
    {
      name: "description",
      label: "Description",
      as: "textarea",
      rows: 10,
      placeholder: "write detail information abou the product",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "file",
      multiple: true,
      required: true,
    },
  ];
  return (
    <AdminLayout>
      <div className="mb-3">
        <div className="py-3 fs-2">New Product</div>
        <hr />

        <Form method="" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check required name="status" type="switch" label="Status" />
          </Form.Group>

          {inputes.map((item, i) => (
            <CustomeInputeField key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button type="submit" variant="success">
              Add Product
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};
