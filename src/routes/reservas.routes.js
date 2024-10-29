import Router from "express";
import { makeReservation, getReservationsForSpaceByDate, getReservationsById } from "../controllers/reservas.controller.js";

const router = Router();

router.post("/reservation", makeReservation);
router.get("/reservations", getReservationsForSpaceByDate);
router.get("/reservation/:identification", getReservationsById);

export default router;