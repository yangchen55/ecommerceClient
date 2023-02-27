import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deletePayment, fetchPayments } from "../../pages/paymentMethod/payMethodAction";
import { setShowModal } from "../../system/systemSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import EditPayFrm from "./EditPayFrm";



const PayTable = () => {
    const dispatch = useDispatch();
    const paymentState = useSelector((state) => state.payment);
    const [selectedPayment, setSeletedPayment] = useState({})

    useEffect(() => {
        dispatch(fetchPayments());
    }, [dispatch]);

    const { paymentMethods } = paymentState;
    const handleOnEdit = (item) => {
        setSeletedPayment(item)
        dispatch(setShowModal(true))
        console.log(item)

    }
    const handleOnDelete = (_id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(deletePayment(_id));
        }


    }


    return (




        <div className="mt-5">
            <div>{paymentMethods.length} categories found!</div>

            <CustomModal show={false} title="Update category">
                <EditPayFrm selectedPayment={selectedPayment} />
            </CustomModal>



            <Table Table striped bordered hover >
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
                    {paymentMethods?.length > 0 &&
                        paymentMethods.map((item, i) => (
                            <tr key={item?._id}>
                                <td>{i + 1}</td>
                                <td
                                    className={`text-${item.status === "active" ? "success" : "danger"
                                        }`}
                                >
                                    {item.status}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Button onClick={() => handleOnEdit(item)} variant="warning">
                                        Edit
                                    </Button>{" "}
                                    <Button
                                        onClick={() => handleOnDelete(item._id)}
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table >
        </div >
    )
}

export default PayTable