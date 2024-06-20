import { NextFunction, Request, Response } from "express";

export default (dependencies: any) => {
    const {cartUsecases:{getCartUsecase}} = dependencies;

    if(!getCartUsecase){
        throw new Error('Missing getCartUsecase dependency');
    }

    const getCart = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params.id);
            
            const cart = await getCartUsecase(dependencies).interactor(req.params.id)
            if(!cart) {
                throw new Error("cannot get product")
            }
            res.status(200).json({
                success:true,
                data: cart,
                message:"product has been retrieved successfully"
            })
        } catch (error:any) {
            next(error)
        }
    }
    return getCart

}