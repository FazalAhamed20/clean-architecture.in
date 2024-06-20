import addToCart from "./addToCart";
import getCart from "./getCart";


export default (dependencies: any) => {
    return {
        addToCartController: addToCart(dependencies),
        getCartController:getCart(dependencies)
       
    }
}