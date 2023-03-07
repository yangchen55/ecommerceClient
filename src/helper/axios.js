import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";
const catApi = rootUrl + "/category";
const pmApi = rootUrl + "/payment-method";

const fetchProcesser = async ({ method, url, data }) => {
  try {
    // await axios.post(adminApi + "/register", data);

    const res = await axios({
      method,
      url,
      data,
    });

    return res.data;
  } catch (error) {
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
  };
  return fetchProcesser(obj);
};

export const fetchCategory = async () => {
  const url = catApi;
  const obj = {
    method: "get",
    url,
  };
  return fetchProcesser(obj);
};

export const deleteCategory = async (_id) => {
  const url = catApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};

export const updateCategory = async (data) => {
  const url = catApi;
  const obj = {
    method: "put",
    url,
    data,
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
  };
  return fetchProcesser(obj);
};

export const fetchPM = async () => {
  const url = pmApi;
  const obj = {
    method: "get",
    url,
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
  };
  return fetchProcesser(obj);
};
