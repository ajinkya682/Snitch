import dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  MONGO_URI: process.env.MONGO_URI,
};

if (!CONFIG.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

export default CONFIG;
