import { deletePM, fetchPM, postPM, updatePM } from "../../helper/axios";
import { setPaymentMethods } from "./pmSlice";
import { toast } from "react-toastify";
import { setShowModal } from "../../system/systemSlice";

export const getPaymentMethods = () => async (dispatch) => {
  const { status, result } = await fetchPM();

  status === "success" && dispatch(setPaymentMethods(result));
};

export const postPaymentMethod = (data) => async (dispatch) => {
  const { status, message } = await postPM(data);
  toast[status](message);

  if (status === "success") {
    dispatch(getPaymentMethods());
    dispatch(setShowModal(false));
  }
};

export const deletePaymentMethod = (_id) => async (dispatch) => {
  const { status, message } = await deletePM(_id);
  toast[status](message);

  if (status === "success") {
    dispatch(getPaymentMethods());
  }
};

export const updatePaymentMethod = (data) => async (dispatch) => {
  const { status, message } = await updatePM(data);
  toast[status](message);

  if (status === "success") {
    dispatch(getPaymentMethods());
    dispatch(setShowModal(false));
  }
};
