import { productEntity } from "../../../../entities/productEntity";
import { Product } from "../../models/productModel";


export const productListRepo=async():Promise<productEntity[] | null>=>{
    try {
        let products = await Product.find({})
        if(!products){
            throw new Error("no product");
        }
            return products as productEntity[]
            
       
        
    } catch (error:any) {
        throw new Error(error?.message);
        
        
    }
}