import { pool } from "../db.js";

export const makeReservation = async (req, res) => {
    try {
        
        const { identification, fechaReserva , startTime, endTime, spaceId } = req.body;
        const result = await pool.query(
        "INSERT INTO reservas(id_usuario,fecha_de_reserva,hora_inicio_reserva,hora_fin_reserva,espacio_reserva) VALUES (?, ?, ?, ?, ?);",
        [identification, fechaReserva, startTime, endTime, spaceId]
        );
        
        const resultStringified = JSON.parse(
            JSON.stringify(result, (key, value) =>
                typeof value === "bigint" ? value.toString() : value
            )
        );

        res.status(200).send(resultStringified);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating reservation");
    }
}

export const getReservationsForSpaceByDate = async (req, res) => {
    try{
        const spaceId = String(req.params.spaceId);
        const { fechaReserva } = String(req.params.fechaReserva);
        const rows = await pool.query("SELECT * FROM reservas WHERE fecha_de_reserva = (?) AND espacio_reserva = (?)", [fechaReserva, spaceId]);
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error getting reservations");
    }
}