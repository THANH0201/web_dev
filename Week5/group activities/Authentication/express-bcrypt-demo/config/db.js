import mongoose, { connect } from 'mongoose';

mongoose.connect("mongodb://localhost:27017/express-bcrypt-demo")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

export default mongoose;
