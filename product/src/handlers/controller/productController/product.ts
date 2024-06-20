import { NextFunction, Request, Response } from "express";

export default (dependencies: any) => {
    const {productUseCases:{productList}} = dependencies;

    const getProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const products = await productList(dependencies).interactor()            

            res.status(201).json({success: true , data: products, message: "products list"});
        } catch (error) {
            console.log('Product Not Found');
            
            next(error)
        }
    }
    return getProducts
}