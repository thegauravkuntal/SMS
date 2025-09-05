import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MongoDB_URI);
        console.log(`Database is Connected ${connect.connection.host}`);
        
    } catch (error) {
        console.log(`${error} gone wrong`);
        process.exit(1)
    }
}

export default connectDB;