import express from "express";
import mongoose from "mongoose";
import { route } from "./routes";

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(route);

export { app };
