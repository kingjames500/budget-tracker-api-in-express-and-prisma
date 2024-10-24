import { Router } from "../imports/imports.js";

import {
  createBudget,
  deleteBudget,
  updateBudgets,
  getAllBudgets,
  getBudget,
} from "../imports/imports.js";

const router = Router();

//creating a new budget
router.post("", createBudget);

// getting all budgets
router.get("", getAllBudgets);

// getting a budget by title
router.get("/:title", getBudget);

// getting a budget by title
router.patch("/:title", updateBudgets);

//deleting a budget by title
router.delete("/:title", deleteBudget);

export default router;
