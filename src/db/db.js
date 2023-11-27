import mongoose from "mongoose";

import {DB_Name} from "../constant.js";


const connectDb = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`\n dataBase connected to ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MongoDb connection failed :" ,error);
        throw error("Failed to connect to database");
        process.exit(1);
    }
};

export default connectDb;