import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 8000;

const uri =
  "mongodb+srv://project-test-user-1:project-test-user-1@project-test-database.kdhsst6.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connect successful");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
