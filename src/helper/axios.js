import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";

export const postNewAdmin = async (data) => {
    try {
        const res = await axios.post(adminApi + "/register", data);
        return res.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        };
    }
};




export const postEmailVerification = async (data) => {
    try {
        const res = await axios.post(adminApi + "/verify", data);
        return res.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        };
    }
};

export const loginAdmin = async (logindata) => {
    try {
        const { data } = await axios.post(adminApi + "/login", logindata)
        return data
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }
}

export const tokenVerify = async (verifydata) => {
    try {
        console.log("from token verify")
        const data = await axios.post(adminApi + "/tokenVerify", verifydata);
        console.log(data)
        return data
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }
}


export const postEmailVerify = async (data) => {
    try {
        console.log("from postEmail verify")
        const res = await axios.post(adminApi + "/resetPassword", data);
        return res.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        };
    }
};