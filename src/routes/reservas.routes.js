import Router from "express";
import { makeReservation } from "../controllers/reservas.controller.js";

const router = Router();

router.post("/reservation", makeReservation);

export default router;