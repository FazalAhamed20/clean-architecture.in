export default (dependencies:any) => {
    const {productRepositories:{productListRepo}} = dependencies
    if(!productListRepo) {
        throw new Error('Dependency is required for login!');
    }

    const interactor = async () => {
        return await productListRepo()
    }

    return {interactor}
}