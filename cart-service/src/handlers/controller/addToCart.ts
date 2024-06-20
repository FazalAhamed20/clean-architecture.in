import { NextFunction, Request, Response } from "express";

export default (dependencies: any) => {
    const {cartUsecases:{addToCartUsecase}} = dependencies;
    if(!addToCartUsecase){
        throw new Error('Dependency not found. "addToCartUsecase" is required');
    }

    const addToCart = async (
        req: Request,res: Response, next: NextFunction
    ) => {
        try {
            const cart = await addToCartUsecase(dependencies).interactor(req.body)

            if(!cart) {
                throw new Error("adding product to  the cart failed");
            }

            res.status(201).json({success:true, data: cart,message:"Product added to cart successfully"})
        } catch (error) {
            next(error)
        }
    }
    return addToCart;
}