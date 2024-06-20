import { Types } from "mongoose";

export interface ProductEntity {
    _id?: Types.ObjectId;
    name: String;
    description: String;
    price: Number;
} 