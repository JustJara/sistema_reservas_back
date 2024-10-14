import Router from "express";
import {
  getEmployee,
  createEmployee,
  changePassword,
  deleteEmployee,
  getUserByIdentification,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/employees", getEmployee);
router.get("/users/:identification", getUserByIdentification);
router.post("/employees", createEmployee);
router.put("/users/password/:identification", changePassword);
router.delete("/employee/:identification", deleteEmployee);

export default router;
