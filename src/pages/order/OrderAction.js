import { fetchOrder } from "../../helper/axios"
import { setOrderList } from "./orderSlice";

export const getOrderListAction = () => async (dispatch) => {
    const { status, orderLists } = await fetchOrder();
    status === "success" && dispatch(setOrderList(orderLists))

}