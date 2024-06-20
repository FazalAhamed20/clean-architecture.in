export default(dependencies:any)=>{
    const {cartRepositories :{addToCart}}=dependencies
    if(!addToCart){
        throw new Error("missing cart dependencies");
        
    }

    const interactor=async (data:any)=>{
        return await addToCart(data)
    }
    return { interactor };
}