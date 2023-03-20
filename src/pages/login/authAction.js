import {
  fetchAdminProfile,
  fetchNewAccessJWT,
  loginAdmin,
} from "../../helper/axios";
import { requestPending, requestSuccess } from "./authSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());

    // call axios-helper / api
    const pendingResp = loginAdmin(formData);

    toast.promise(pendingResp, { pending: "Please wait ...." });

    const { status, message, toknes } = await pendingResp;
    toast[status](message);
    console.log(toknes);

    if (status == "success") {
      const { accessJWT, refreshJWT } = toknes;

      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      dispatch(getAdminProfile());
    }
  } catch (error) {
    return {
      status: "error",
      message: error.messsage,
    };
  }
};

const getAdminProfile = () => async (dispatch) => {
  const { status, user } = await fetchAdminProfile();

  status === "success"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}));
};

export const autoLogin = () => async (dispatch) => {
  //if  accessJWT exist, get the user and mount in our redux store
  //check if accessJWT exist

  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    dispatch(getAdminProfile());
  } else if (refreshJWT) {
    // call for new accessJWT

    const { status, accessJWT } = await fetchNewAccessJWT();
    if (status === "success") {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfile());
      return;
    }
    dispatch(forceLogout());
  } else {
    //force logout
    dispatch(forceLogout());
  }
};

const forceLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(requestSuccess({}));
};
