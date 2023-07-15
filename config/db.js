import mongoose from "mongoose";

//create connection
const mongoDBconnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connect successfully");
  } catch (error) {
    console.log(error.message);
  }
};

//export connection
export default mongoDBconnection;
