import { toast } from "react-toastify"
import { loginAdmin } from "../../helper/axios"
import { requestPending, requestSuccess } from "./authSlice"

export const loginAction = (formData) => async (dispatch) => {

    try {
        dispatch(requestPending())
        const pendingResp = loginAdmin(formData)
        toast.promise(pendingResp, { pending: "please wait " })
        const { status, message, user } = await pendingResp
        toast[status](message);
        status === "success"
            ? dispatch(requestSuccess(user))
            : dispatch(requestSuccess({}))



    } catch (error) {
        return {
            status: "error",
            message: error.message
        }

    }


}