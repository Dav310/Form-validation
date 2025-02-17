import * as Yup from "yup";

export const signUpSchema = Yup.object({
    
    name : Yup.string().min(3).max(25).required("Please Enter Your Name"),
    email : Yup.string().email().min(3).max(25).required("Please Enter Your Email"),
    password : Yup.string().min(6).required("Please Enter Your Password"),
    confirmPassword : Yup.string().min(6).required("Please Enter Your Confirm Password").oneOf([Yup.ref("password"),null] , "Password Must Match")

});