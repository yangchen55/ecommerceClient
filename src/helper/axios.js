import axios from "axios";
const rootUrl = process.env.REACT_APP_DOMAIN + "api/v1";
const adminApi = rootUrl + "/admin";
const catApi = rootUrl + "/category";
const pmApi = rootUrl + "/payment-method";
const productApi = rootUrl + "/product";


const fetchProcesser = async ({ method, url, data, isPrivate, token }) => {
  try {
    // await axios.post(adminApi + "/register", data);
    const jwtToken = token || sessionStorage.getItem("accessJWT");

    const headers = isPrivate
      ? {
        Authorization: jwtToken,
      }
      : null;

    const res = await axios({
      method,
      url,
      data,
      headers,
    });

    return res.data;
  } catch (error) {
    const message = error.message;

    if (error?.response?.data?.message === "jwt expired") {
      const { accessJWT } = await fetchNewAccessJWT();
      sessionStorage.setItem("accessJWT", accessJWT);
      return fetchProcesser({ method, url, data, isPrivate, token: accessJWT });
    }

    return {
      status: "error",
      message: error.message,
    };
  }
};

// ======= admin
export const postNewAdmin = async (data) => {
  const url = adminApi + "/register";
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const postEmailVerification = async (data) => {
  const url = adminApi + "/verify";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};

export const loginAdmin = async (loginData) => {
  const url = adminApi + "/login";
  const obj = {
    method: "post",
    url,
    data: loginData,
  };
  return fetchProcesser(obj);
};

export const fetchAdminProfile = async () => {
  const url = adminApi + "/user-profile";
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const fetchOtpRequest = async (data) => {
  const url = adminApi + "/request-otp";
  const obj = {
    method: "post",
    url,
    data,
  };
  return fetchProcesser(obj);
};

export const resetPassRequest = async (data) => {
  const url = adminApi + "/reset-password";
  const obj = {
    method: "patch",
    url,
    data,
  };
  return fetchProcesser(obj);
};

// ===== category
export const postCategory = async (data) => {
  const url = catApi;
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const fetchCategory = async () => {
  const url = catApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const deleteCategory = async (_id) => {
  const url = catApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const updateCategory = async (data) => {
  const url = catApi;
  const obj = {
    method: "put",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

// ===== Payment Method
export const postPM = async (data) => {
  const url = pmApi;
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const fetchPM = async () => {
  const url = pmApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const deletePM = async (_id) => {
  const url = pmApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};

export const updatePM = async (data) => {
  const url = pmApi;
  const obj = {
    method: "put",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const fetchNewAccessJWT = async () => {
  const url = adminApi + "/new-accessjwt";
  const token = localStorage.getItem("refreshJWT");

  const obj = {
    method: "get",
    url,
    isPrivate: true,
    token,
  };
  return fetchProcesser(obj);
};

// product apis ==========

export const fetchProduct = async (_id) => {
  const url = _id ? productApi + "/" + _id : productApi;
  const obj = {
    method: "get",
    url,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const postProduct = async (data) => {
  const url = productApi;
  const obj = {
    method: "post",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const updateProduct = async (data) => {
  const url = productApi;
  const obj = {
    method: "put",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};

export const deleteProduct = async (data) => {
  const url = productApi;
  const obj = {
    method: "delete",
    url,
    data,
    isPrivate: true,
  };
  return fetchProcesser(obj);
};
