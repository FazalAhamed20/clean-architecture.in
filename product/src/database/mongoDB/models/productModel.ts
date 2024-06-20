
import mongoose ,{Schema,Document,Types} from 'mongoose'

export interface iProductSchema extends Document {
    name:string,
    description:string,
    stocks:number,
    price:number
}

const ProductSchema:Schema= new Schema({
    name:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    stocks:{
        type:Number
    },
    price:{
        type:Number,

    }
})

export const Product=mongoose.model<iProductSchema>('products',ProductSchema)