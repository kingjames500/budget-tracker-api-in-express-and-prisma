import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const client = new PrismaClient();

//creating a new budget
app.post("/budget", async (req, res) => {
  try {
    const { title, unitPrice, quantity } = req.body;

    const newBudget = await client.budget.create({
      data: {
        title,
        unitPrice,
        quantity,
      },
    });

    res.send(newBudget);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// getting all budgets
app.get("/budgets", async (_req, res) => {
  try {
    const budgets = await client.budget.findMany();

    if (budgets.length === 0) {
      res.status(404).json({ message: "No budgets found" });
    } else {
      res.status(200).send(budgets);
    }
  } catch (e) {
    res.status(500).json({ message: "server error" });
  }
});

// getting a budget by title
app.patch("/budget/:title", async (req, res) => {
  const titleWanted = req.params.title;

  const { title, unitPrice, quantity } = req.body;
  try {
    let updatedBudgetData = {};

    const budgetItem = await client.budget.findUnique({
      where: {
        title: titleWanted,
      },
    });

    if (!budgetItem) {
      return res.status(404).json({ message: "Budget not found" });
    }
    if (title) updatedBudgetData.title = title;
    if (unitPrice) updatedBudgetData.unitPrice = unitPrice;
    if (quantity) updatedBudgetData.quantity = quantity;

    const updatedBudget = await client.budget.update({
      where: {
        title: titleWanted,
      },
      data: updatedBudgetData,
    });
    res.status(200).send(updatedBudget);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//deleting a budget by title
app.delete("/budget/:title", async (req, res) => {
  try {
    const title = req.params.title;

    const budget = await client.budget.delete({
      where: {
        title,
      },
    });

    res.status(200).send({ message: "Budget deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
