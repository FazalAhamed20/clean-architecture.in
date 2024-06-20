export default(dependencies:any)=>{
    const {cartRepositories :{getCart}}=dependencies
    if(!getCart){
        throw new Error("missing getcart dependencies");
        
    }

    const interactor=async (data:any)=>{
        console.log(data);
        
        return await getCart(data)
    }
    return { interactor };
}