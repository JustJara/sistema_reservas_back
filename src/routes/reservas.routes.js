import Router from "express";
import { makeReservation, getReservationsByDate } from "../controllers/reservas.controller.js";

const router = Router();

router.post("/reservation", makeReservation);
router.get("/reservations/:fechaReserva/:spaceId", getReservationsForSpaceByDate);

export default router;