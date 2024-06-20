

export default(dependencies:any)=>{
    const {userRepositories:{findByEmailRepo}}= dependencies
    return{
        execute:async (email:string)=>{
            return await findByEmailRepo(email)
        }
    }
  

  }