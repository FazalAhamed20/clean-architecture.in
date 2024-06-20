export default (dependencies: any) => {
    const {productRepositories:{addProduct}} = dependencies;
    if (!addProduct) {
        throw new Error('Missing required dependency "productRepositories.addProduct"');

    }

    const interactor = async (
        data:{
            name?:string,
            description?: string,
            price?: number,
        }
    ) => {
        return await addProduct(data);
    }
    return {interactor}
}