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
        console.log("🚀 ~ getReservationsForSpaceByDate ~ req.params:", req.query)
        const { fechaReserva, spaceId } = req.query;
        console.log("🚀 ~ getReservationsForSpaceByDate ~ spaceId:", spaceId)
        console.log("🚀 ~ getReservationsForSpaceByDate ~ fechaReserva:", fechaReserva)
        
        const rows = await pool.query("SELECT * FROM reservas WHERE fecha_de_reserva = (?) AND espacio_reserva = (?);", [fechaReserva, spaceId]);
        // const rows = await pool.query("SELECT * FROM reservas WHERE fecha_de_reserva = ('2024-10-28') AND espacio_reserva = 'gym';");
        console.log("🚀 ~ getReservationsForSpaceByDate ~ rows:", rows)
        res.json(rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Error getting reservations");
    }
}