import { Prisma } from "@prisma/client";

const client = new Prisma();



const updateBudgets = async (req, res) => {
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
}

export default updateBudgets;