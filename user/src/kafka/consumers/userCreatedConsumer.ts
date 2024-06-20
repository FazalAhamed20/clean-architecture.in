import { ObjectId } from "mongoose";
import { User } from "../../database/mongoDB";


export default async(
    data:{
        
        name:String;
        email:String;
        password:String

    }
)=>{
    try {
        const newUser=new User({
           
            name:data.name,
            email:data.email,
            password:data.password
        })
        await newUser.save()

        
    } catch (error:any) {
        console.log(error?.message);
        
        
    }
}