import mongoose from "mongoose";

export const connectionDB = async () => {

    try {
        // console.log(process.env.MONGO_URI, "Connecting to MongoDB");
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected", conn.connection.host);
    } catch (error) {
        console.error(`Error connection: ${error.message}`);
        process.exit(1);   
    }
   
}
