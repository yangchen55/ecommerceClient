import { fetchProduct, postProduct } from "../../helper/axios";
import { setProducts } from "./productSlice";
import { toast } from "react-toastify";

export const getProductAction = () => async (dispatch) => {
  const { status, products } = await fetchProduct();

  status === "success" && dispatch(setProducts(products));
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
