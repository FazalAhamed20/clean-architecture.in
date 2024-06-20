import { Router } from "express";
import productController from "../handlers/controller/productController";
import * as dependencies from '../config/dependencies'


const router:Router=Router()

const {productListController,productAddController}=productController(dependencies)


router.route('/products').get(productListController)
router.route('/addproduct').post(productAddController)

export default router

