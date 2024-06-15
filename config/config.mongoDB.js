import mongoose from "mongoose";
import { config } from "dotenv";

config();
const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to database successfully ");
    })
    .catch((error) => {
      console.log("Error in connecting to database");
      console.error(error.message);
      process.exit(1);
    });
};

export default connect;
