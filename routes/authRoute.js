import  express  from "express";
import {registerController,loginController,testController, forgetPasswordController,updateProfileController} from "../controller/authController.js"
import { isAdmin, requireSignin } from "../middlewares/authmiddleware.js";

//router object
const router =express.Router()
//routing
//Register || method Post  
router.post("/register",registerController)
//login || method post
router.post("/login",loginController)
//Forget Password || post
router.post('/forgot-password',forgetPasswordController)

//test route
router.get('/test',requireSignin, isAdmin ,testController)
//protected user route
router.get("/user-auth",requireSignin,(req,res)=>{
    res.status(200).send({ok:true})
})
//protected route admin
router.get("/admin-auth",requireSignin,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})
//update user route
router.put("/profile",requireSignin,updateProfileController)
export default router