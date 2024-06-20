export default(dependencies:any)=>{
    const {userRepositories:{userLoginRepo}}= dependencies
  
    if(!userLoginRepo){
      throw new Error("Dependency is required");
      
    }
  
   const interactor=async(email:string)=>{
    return await userLoginRepo(email)

   }
  
  return {interactor}
  }