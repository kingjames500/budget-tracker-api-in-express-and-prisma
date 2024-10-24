import express from "express";
import budgetRouter from "./routes/budget.route.js";

const app = express();

app.use(express.json());

app.use("/budget", budgetRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
