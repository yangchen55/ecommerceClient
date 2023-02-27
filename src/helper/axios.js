import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";
const catApi = rootUrl + "/category";
const payApi = rootUrl + "/paymentMethod";

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


// ===== payment method
export const postPayment = async (data) => {
  const url = payApi;
  const obj = {
    method: "post",
    url,
    data,
  };
  console.log("iam grom axios", obj)
  fetchPayment()
  return fetchProcesser(obj);

};

export const fetchPayment = async () => {
  const url = payApi;
  const obj = {
    method: "get",
    url

  };
  // return fetchProcesser(obj);

  const response = await fetchProcesser(obj);
  console.log(response); // add this line to log the response
  return response;
};



export const deletePayments = async (_id) => {
  const url = payApi + "/" + _id;
  const obj = {
    method: "delete",
    url,
  };
  return fetchProcesser(obj);
};


export const updatePayments = async (data) => {
  const url = payApi;
  const obj = {
    method: "put",
    url,
    data,
  };
  console.log("iam from  update axios", data)
  return fetchProcesser(obj);
};


