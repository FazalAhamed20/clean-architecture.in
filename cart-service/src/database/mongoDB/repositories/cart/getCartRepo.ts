import { Cart } from "../../model/cartModel";
export const getCart = async (userId: string) => {
    try {
        console.log(userId);
        
        const cart = await Cart.findOne({userId: userId}).populate("items.productId").exec()
        return cart
    } catch (error: any) {
        throw new Error(error?.message)
    }
}