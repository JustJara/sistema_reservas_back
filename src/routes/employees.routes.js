import Router from "express";
import {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployee);
router.get("/employee/:identification", getEmployeeById);
router.post("/employees", createEmployee);
router.patch("/employee/:identification", updateEmployee);
router.delete("/employee/:identification", deleteEmployee);

export default router;
