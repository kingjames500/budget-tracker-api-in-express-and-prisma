import { Prisma } from "@prisma/client";

const client = new Prisma();

const deleteBudget = async (req, res) => {
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
};

export default deleteBudget;

