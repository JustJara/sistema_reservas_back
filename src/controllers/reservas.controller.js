import { pool } from "../db.js";

export const makeReservation = async (req, res) => {
    try {
        console.log("🚀 ~ makeReservation ~ req:", req.body)
        
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