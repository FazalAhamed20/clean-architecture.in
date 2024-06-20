
import userSignup from "./userSignup";
import userLogin from './userLogin'

export default(dependencies:any)=>{
    return {
        signupController:userSignup(dependencies),
        loginController:userLogin(dependencies)
    }
}