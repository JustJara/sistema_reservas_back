import Router from "express";
import {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getUserByIdentification,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/employees", getEmployee);
router.get("/users/:identification", getUserByIdentification);
router.post("/employees", createEmployee);
router.patch("/employee/:identification", updateEmployee);
router.delete("/employee/:identification", deleteEmployee);

export default router;
