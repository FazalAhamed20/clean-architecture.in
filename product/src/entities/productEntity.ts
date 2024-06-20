import {Types} from 'mongoose'

export interface productEntity{
    _id?:Types.ObjectId,
    name:String,
    price:Number,
    description:string,
    stocks:number

}