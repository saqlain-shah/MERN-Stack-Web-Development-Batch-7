import * as Yup from "yup";
export const signUpSchema =Yup.object({
    name:Yup.string().min(2).max(30).required("enter user name"),
    password:Yup.string().min(6).required("please enter the password")
});