import { PrismaClient } from "../imports/imports.js";

const client = new PrismaClient();

const getAllBudgets = async (_req, res) => {
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
};

export default getAllBudgets;
