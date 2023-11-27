// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDb from "./db/db.js";

dotenv.config({
    path: './env'
})


connectDb()


// import express from "express";
// const app = express();
// // use an IIFE function to connect to the database
// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/
//         ${DB_Name}`);
//         app.on("error", (error)=>{
//             console.log("ERROR", error);
//             throw error;
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     } 
//     catch(error){
//         console.log("ERROR", error);
//         throw error;
//     }
// } )();