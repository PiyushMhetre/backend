import  mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export function dbconnect(){
   
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    });

}
