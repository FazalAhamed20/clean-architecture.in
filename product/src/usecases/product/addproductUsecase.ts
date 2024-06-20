// addproductUsecase.ts
export default (dependencies: any) => {
    const { productRepositories: { addproductRepo } } = dependencies;
    console.log("addrepo",addproductRepo);
    
    if (!addproductRepo) {
        throw new Error('Dependency is required for login!');
    }

   const interactor=async(
    credentials:{
        name: string,
        description: string,
        stock:number,
        price:number
    }
   )=>{
    return await addproductRepo(credentials)
   }
   return {interactor}
};
