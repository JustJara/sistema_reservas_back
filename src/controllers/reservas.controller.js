export const makeReservation = async (req, res) => {
    try {
        const { identification, timeFormatted, spaceId } = req.body;
        let p_records = 0;
        const result = await pool.query(
        "CALL pr_insert_reserva(?, ?, ?, ?, ?, ?)",
        [identification, email, time, spaceId,p_records]
        );
    
        res.status(200).send(p_records);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating reservation");
    }
}