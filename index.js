import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from './route/user.route.js'
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors());

app.use(express.json())

// Connect to MongoDB

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error: ", error);
}

//defining routes
app.use("/book", bookRoute);
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
