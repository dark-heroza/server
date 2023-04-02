import mongoose from "mongoose";

const connectDB = (url) => {
  url="mongodb+srv://Abhi:@bhi2001@cluster0.jp5wbpm.mongodb.net/?retryWrites=true&w=majority";
  console.log(typeof(url));
  console.log(url);
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
