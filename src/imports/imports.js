import getBudgets from "../controller/getBudgets.js";
import CreateBudget from "../controller/createBudget.js";
import getAllBudgets from "../controller/getAllbudgets.js";
import deleteBudget from "../controller/deleteBudget.js";
import updateBudgets from "../controller/updateBudgets.js";
import { Prisma } from "@prisma/client";



export{ getBudgets  , CreateBudget, getAllBudgets, deleteBudget, updateBudgets, Prisma };