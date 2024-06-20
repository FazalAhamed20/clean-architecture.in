import mongoose from "mongoose";

export default async () => {
    require('dotenv').config()
    console.log(process.env.MONGO_URL)
    try {

        await mongoose.connect(String(process.env.MONGO_URL).trim())

        console.log('db service connected ');   

    } catch (error: any) {
        console.log(error?.message);
        throw new Error("User service Database connection failed")
    }
}