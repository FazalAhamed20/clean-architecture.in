
import { NextFunction,Request,Response } from "express"
import {compare, hash} from 'bcrypt'

export default (dependencies:any)=>{
    const {userUsecase:{login}}=dependencies
    const userLogin=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try {
            const credentials=req.body
            console.log(credentials);
          
        
              if (!credentials.email || !credentials.password) {
                res
                  .status(400)
                  .json({ success: false, message: "Email and password are required" });
                return;
              }
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
              if (!emailRegex.test(credentials.email)) {
                res
                  .status(400)
                  .json({ success: false, message: "Invalid email format" });
                return;
              }
        
              if (credentials.password.length < 6) {
                res
                  .status(400)
                  .json({
                    success: false,
                    message: "Password must be at least 6 characters long",
                  });
                return;
              }
             
              let user= await login(dependencies).interactor(credentials.email)
              console.log("user",user);
              
              if(!user){
                throw new Error("user not found");
                
              }
              let match=await compare(credentials.password,user.password)

              if(!match){
                throw new Error("password is invalid");
                
              }
              res.status(201).json({success:true,data:user,message:"login successfully"})
        
            
            
        } catch (error:any) {
            console.error('Error in loginController:', error.message || error);
            res.status(404).json({ message: error.message || 'User not found' });
            
            
        }
    }
    return userLogin
}