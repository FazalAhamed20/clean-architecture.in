export default (dependencies: any) => {
    const {userRepositories:{addUser}} = dependencies;
    if (!addUser) {
        throw new Error('Missing required dependency "productRepositories.addProduct"');

    }

    const interactor = async (
        data:{
            name?:string,
            description?: string,
            price?: number,
        }
    ) => {
        return await addUser(data);
    }
    return {interactor}
}