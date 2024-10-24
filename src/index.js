import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const client = new PrismaClient();



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
