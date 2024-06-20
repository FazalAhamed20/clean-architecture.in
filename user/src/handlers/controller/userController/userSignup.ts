import { NextFunction, Request, Response } from "express";
import {hash} from 'bcrypt'

export default(dependencies:any)=>{
    const {userUsecase:{signup,findUser}}=dependencies;
    const createUser=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try {
            const credentials=req.body
            console.log(req.body);
            if (!credentials.name || !credentials.name.trim()) {
                res
                  .status(400)
                  .json({ success: false, message: "Username cannot be empty" });
                return;
              }
        
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
        
              console.log("Searching for user with email:", credentials.email);
              try {
                const existingUser = await findUser(dependencies).execute(
                  credentials.email
                );
                console.log("Existing user:", existingUser);
                if (existingUser) {
                  res
                    .status(400)
                    .json({ success: false, message: "Email already exists" });
                  return;
                }
              } catch (error) {
                console.error("Error finding user by email:", error);
              }
            
            const hashedpassword:  string | null = await hash(credentials.password, 10);
            credentials.password=hashedpassword
            const user=await signup(dependencies).interactor(credentials)
            res.status(201).json({success: true , data: user, message: "user Created"});
        } catch (error:any) {
            next(error)
            
        }
    }
    return createUser;
}