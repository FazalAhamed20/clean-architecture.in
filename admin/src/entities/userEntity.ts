import {Types} from 'mongoose'

export interface UserEntity{
    id?:Types.ObjectId,
    name:String,
    email:String,
    password:String,
    
}