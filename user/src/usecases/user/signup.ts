

export default(dependencies:any)=>{
  const {userRepositories:{userSignupRepo}}= dependencies

  if(!userSignupRepo){
    throw new Error("Dependency is required");
    
  }

  const interactor = async (
    credentials: {
        name: string,
        email: string,
        password?: string
    }
) => {
    return await userSignupRepo(credentials)
}

return {interactor}
}