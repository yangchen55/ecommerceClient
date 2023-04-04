import React, { useEffect, useState } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCat,
  fetchCats,
  updateCat,
} from "../../pages/category/categoryAction";
import { setShowModal } from "../../system/systemSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import { EditCatFrm } from "./EditCatFrm";

const itemsPerTable = 5;

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { cats } = useSelector((state) => state.category);
  const [showCats, setShowCats] = useState([]);
  const [selecteCat, setSelectedCat] = useState({});

  const [active, setActive] = useState(1);

  useEffect(() => {
    if (!showCats.length) {
      dispatch(fetchCats());
    }
    setShowCats(cats);
  }, [dispatch, cats]);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCat(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedCat(item);
    dispatch(setShowModal(true));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;

    const tempArg = cats.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setShowCats(tempArg);
  };

  const handleOnSwitch = (e) => {
    const { checked, value } = e.target;
    const valArg = value.split("|");

    if (window.confirm("Are you sure you want to change the status?")) {
      const obj = {
        _id: valArg[0],
        name: valArg[1],
        status: checked ? "active" : "inactive",
      };

      dispatch(updateCat(obj));
    }
  };

  const onCatNameChange = (e) => {
    const { value } = e.target;
    setSelectedCat({
      ...selecteCat,
      name: value,
    });
  };

  const handleOnSave = () => {
    const { _id, name, status } = selecteCat;

    if (window.confirm("Are you sure you want to change the status?")) {
      dispatch(updateCat({ _id, name, status }));
      setSelectedCat({});
    }
  };

  const handleOnPagination = (num) => {
    setActive(num);
  };

  let items = [];

  const numberOFPage = Math.ceil(showCats.length / itemsPerTable);
  for (let number = 1; number <= numberOFPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPagination(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const startItem = (active - 1) * itemsPerTable;
  const endItem = startItem + itemsPerTable;

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between mb-2">
        <div>{showCats.length} categories found!</div>
        <div className="d-flex align-items-center">
          <label> Search: </label>{" "}
          <Form.Control
            onChange={handleOnChange}
            placeholder="Search by name"
          />
        </div>
      </div>
      {/* <CustomModal show={false} title="Update category ">
        <EditCatFrm selecteCat={selecteCat} />
      </CustomModal> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Status</th>
            <th> Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showCats?.length > 0 &&
            showCats.map(
              (itme, i) =>
                i >= startItem &&
                i < endItem && (
                  <tr key={itme?._id}>
                    <td>{i + 1}</td>
                    <td>
                      <Form.Check
                        onChange={handleOnSwitch}
                        type="switch"
                        checked={itme.status === "active"}
                        value={itme._id + "|" + itme.name}
                      />
                    </td>
                    <td>
                      {selecteCat._id === itme._id ? (
                        <Form.Control
                          value={selecteCat.name}
                          onChange={onCatNameChange}
                        />
                      ) : (
                        itme.name
                      )}
                    </td>
                    <td>{itme.slug}</td>
                    {selecteCat._id === itme._id ? (
                      <td>
                        <Button onClick={handleOnSave} variant="success">
                          Save
                        </Button>{" "}
                        <Button onClick={() => handleOnEdit({})} variant="info">
                          Cancel
                        </Button>
                      </td>
                    ) : (
                      <td>
                        <Button
                          onClick={() => handleOnEdit(itme)}
                          variant="warning"
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => handleOnDelete(itme._id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    )}
                  </tr>
                )
            )}
        </tbody>
      </Table>

      <div>
        <Pagination size="lg">{items}</Pagination>
        <br />
      </div>
    </div>
  );
};
