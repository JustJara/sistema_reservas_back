import Router from "express";
import { makeReservation, getReservationsForSpaceByDate } from "../controllers/reservas.controller.js";

const router = Router();

router.post("/reservation", makeReservation);
router.get("/reservations", getReservationsForSpaceByDate);

export default router;