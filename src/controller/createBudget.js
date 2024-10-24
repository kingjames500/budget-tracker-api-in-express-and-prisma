import { Prisma } from "../imports/imports.js";

const client = new Prisma();    

const CreateBudget = async (req, res) => {
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
}

export default CreateBudget;