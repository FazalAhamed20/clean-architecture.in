import { Router } from "express";
import { cartController } from "../handlers";
import * as dependencies from "../config/dependencies"
const router: Router = Router();

const {
    addToCartController,
    getCartController
} = cartController(dependencies)

router.route('/api/add-to-cart')
    .post(addToCartController);

router.route('/api/cart/:id')
    .get(getCartController)

    export default router