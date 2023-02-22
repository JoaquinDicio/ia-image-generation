import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Db connected"))
    .catch((err) => console.log(err));
};

export default connectDb;
