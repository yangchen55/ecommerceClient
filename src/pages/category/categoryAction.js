import { toast } from "react-toastify";
import {
  deleteCategory,
  fetchCategory,
  postCategory,
  updateCategory,
} from "../../helper/axios";
import { setCats } from "./categorySlice";

export const fetchCats = () => async (dispatch) => {
  const { status, cats } = await fetchCategory();
  console.log(cats);

  status === "success" && dispatch(setCats(cats));
};

export const postNewCategory = (data) => async (dispatch) => {
  const resultPending = postCategory(data);

  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchCats());
};

export const deleteCat = (_id) => async (dispatch) => {
  const resultPending = deleteCategory(_id);

  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchCats());
};

export const updateCat = (data) => async (dispatch) => {
  const resultPending = updateCategory(data);

  toast.promise(resultPending, {
    pending: "please wait ....",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchCats());
};
