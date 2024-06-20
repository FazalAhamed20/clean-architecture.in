import addProduct from "./addProduct";

export default (dependencies: any) => {
    return {
        addProductController: addProduct(dependencies)
    }
}