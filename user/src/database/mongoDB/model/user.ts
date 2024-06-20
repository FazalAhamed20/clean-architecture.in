import mongoose,{Schema,Document} from "mongoose";

export interface IuserSchema extends Document{
    name:String,
    email:String,
    password:String
}

const userSchema:Schema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
export const User=mongoose.model<IuserSchema>('users',userSchema)