import Router from "express";
import { makeReservation, getReservationsForSpaceByDate, getReservationsById, deleteRservationById } from "../controllers/reservas.controller.js";

const router = Router();

router.post("/reservation", makeReservation);
router.get("/reservations", getReservationsForSpaceByDate);
router.get("/reservation/:identification", getReservationsById);
router.delete("/reservation", deleteRservationById);

export default router;