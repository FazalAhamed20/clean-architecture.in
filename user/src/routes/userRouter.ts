import { Router } from "express";
import { userController } from "../handlers/controller";
import * as dependencies from '../config/dependencies'

const router:Router=Router()

const { signupController,loginController}=userController(dependencies)

router.route("/signup").post(signupController);  
router.route('/login').post(loginController) 

export default router

