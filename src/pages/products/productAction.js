import {
  fetchProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} from "../../helper/axios";
import { setProducts, setSelectedProduct } from "./productSlice";
import { toast } from "react-toastify";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
};

export const getSelectedProductAction = (_id) => async (dispatch) => {
  const { status, products } = await fetchProduct(_id);

  status === "success" && dispatch(setSelectedProduct(products));
};

export const postProductAction = (obj) => async (dispatch) => {
  const respPromise = postProduct(obj);

  toast.promise(respPromise, {
    pending: "Please wait....",
  });

  const { status, message } = await respPromise;

  toast[status](message);

  status === "success" && dispatch(getProductAction());
};

export const updateProductAction = (obj) => async (dispatch) => {
  const respPromise = updateProduct(obj);

  toast.promise(respPromise, {
    pending: "Please wait....",
  });

  const { status, message } = await respPromise;

  toast[status](message);

  status === "success" && dispatch(getSelectedProductAction(obj._id));
};

export const deleteProdsActions = (arrg) => async (dispatch) => {
  const respPromise = deleteProduct(arrg);

  toast.promise(respPromise, {
    pending: "Please wait....",
  });

  const { status, message } = await respPromise;

  toast[status](message);

  status === "success" && dispatch(getProductAction());
};
