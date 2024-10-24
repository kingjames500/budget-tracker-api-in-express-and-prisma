import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import getBudget from "../controller/getBudgets.js";
import createBudget from "../controller/createBudget.js";
import getAllBudgets from "../controller/getAllbudgets.js";
import deleteBudget from "../controller/deleteBudget.js";
import updateBudgets from "../controller/updateBudgets.js";

export {
  getBudget,
  createBudget,
  getAllBudgets,
  deleteBudget,
  updateBudgets,
  PrismaClient,
  Router,
};
