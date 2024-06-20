import { NextFunction, Request, Response } from "express";

export default (dependencies: any) => {
    const {productUseCases:{addProduct}} = dependencies;

    const addProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const credentials=req.body
            console.log(credentials);
            if (!credentials.name || !credentials.price) {
                res
                  .status(400)
                  .json({ success: false, message: "please enter price and name" });
                return;
              }

            
            const products = await addProduct(dependencies).interactor(credentials)            

            res.status(201).json({success: true , data: products, message: "products list"});
        } catch (error) {
            console.log('Product Not Found');
            
            next(error)
        }
    }
    return addProducts
}