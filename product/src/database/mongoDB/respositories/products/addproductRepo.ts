import { productEntity } from "../../../../entities/productEntity";
import { Product } from "../../models/productModel";


export const addproductRepo=async (data:productEntity):Promise<productEntity | null>=>{
    try {
        console.log("repo",data);
        
        const productSaved=await Product.create(data)
        return productSaved as productEntity


        
    } catch (error:any) {
     throw new Error("error on adding product");
     
        
    }
}