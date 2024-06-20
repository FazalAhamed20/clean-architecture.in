import { Router } from "express";
import { productController } from "../handlers/controller";
import {userController} from '../handlers/controller'
import * as dependencies from '../config/dependencies'


const router: Router = Router();
const {addProductController} = productController(dependencies)
const {addUserController}=userController(dependencies)


router.route('/add-product')
    .post(addProductController);

router.route('/add-user').post(addUserController)

export default router;