import { ProductEntity } from "../../../../entities";
import { Product } from "../../models/product";

export const addProduct = async(data: ProductEntity): Promise<ProductEntity | null> => {
    try {
        const product = await Product.create(data)
        return  product as ProductEntity;
    } catch (error: any) {
        throw new Error(error);
    }
}