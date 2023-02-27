import { toast } from "react-toastify";
import { fetchPayment, postPayment, deletePayments, updatePayments } from "../../helper/axios";
import { setPaymentMethod } from "./payMethodSlice";



export const fetchPayments = () => async (dispatch) => {
    const { status, payments } = await fetchPayment();
    console.log(payments)
    status === "success" && dispatch(setPaymentMethod(payments));


}
export const postNewPayment = (data) => async (dispatch) => {
    const resultPending = postPayment(data);
    toast.promise(resultPending, {
        pending: "please wait ....",
    });
    const { status, message } = await resultPending;
    toast[status](message);
    status === "success" && dispatch(fetchPayments())
}

export const deletePayment = (_id) => async (dispatch) => {
    const resultPending = deletePayments(_id);

    toast.promise(resultPending, {
        pending: "please wait ....",
    });

    const { status, message } = await resultPending;

    toast[status](message);

    status === "success" && dispatch(fetchPayments());
}

export const updatePayment = (data) => async (dispatch) => {
    console.log(data, "i am from action")
    const resultPending = updatePayments(data);

    toast.promise(resultPending, {
        pending: "please wait ....",
    });

    const { status, message } = await resultPending;
    console.log(status, "i am from action update")

    toast[status](message);

    status === "success" && dispatch(fetchPayments());
};

