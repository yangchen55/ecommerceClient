import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { PmTable } from "../../components/custome-tables/PmTable";
import { setShowModal } from "../../system/systemSlice";
import { AdminLayout } from "../layout/AdminLayout";
import { setSelectedPM } from "./pmSlice";

const PmPage = () => {
  const dispatch = useDispatch();

  const handleOnAdd = () => {
    console.log("You clicked, yayayaya");

    dispatch(setShowModal(true));
    dispatch(setSelectedPM({}));
  };
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Payment mgmt</h3>
        <hr />
      </div>
      {/* form */}

      <div className="text-end">
        <Button onClick={handleOnAdd} variant="success">
          + Add New Payment Method
        </Button>
      </div>

      <hr />
      {/* table */}
      <PmTable />
    </AdminLayout>
  );
};

export default PmPage;
