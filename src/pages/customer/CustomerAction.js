import { fetchCustomer } from "../../helper/axios"
import { setCustomerList } from "./CustomerSlice";


export const getCustomerAction = () => async (dispatch) => {

    try {
        const { status, customers } = await fetchCustomer();
        status === "success" && dispatch(setCustomerList(customers))
        console.log(customers)

    } catch (error) {
        dispatch({
            type: "CUSTOMER_DATA_ERROR",
            payload: error.message,
        });
    }

};



