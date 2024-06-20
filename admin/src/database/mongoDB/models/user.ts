import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUserSchema extends Document {
    name: String;
    email: String;
    password: String;
    isAdmin: boolean;
    isBlocked: boolean;
}

const UsersSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
   
});

export const User = mongoose.model<IUserSchema>("users", UsersSchema);