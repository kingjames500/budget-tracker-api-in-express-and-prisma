import { PrismaClient } from "../imports/imports.js";

const client = new PrismaClient();

const getBudget = async (req, res) => {
  try {
    const title = req.params.title;

    let whereClause = {};

    if(title !== undefined || title !== null) {
      whereClause.title = title;
    }

    const budget = await client.budget.findUnique({
      where: whereClause
    });

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).send(budget);
  } catch (e) {
    return res.status(500).json({ message: "server error" });
  }
};

export default getBudget;
