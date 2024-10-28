import { pool } from "../db.js";

export const getEmployee = async (req, res) => {
    try {
        const rows = await pool.query("SELECT * FROM Users");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting employees");
    }
    };

export const getUserByIdentification = async (req, res) => {
  try{
    const identification = String(req.params.identification);
    const rows = await pool.query("SELECT * FROM Users WHERE identification = (?)", [identification]);

    if (typeof rows === typeof undefined)
      return res.status(404).json({
        message: "User not found",
      });

    res.json(rows);
  }
  catch (error) {
    console.error(error);
    res.status(500).send("Error getting user");
  }
}

export const createEmployee = async (req, res) => {
  const { identification, email, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO Users (identification, email, password) VALUES (?, ?, ?)",
      [identification, email, password]
    );

    // Convert BigInt values to strings
    const resultStringified = JSON.parse(
      JSON.stringify(result, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );

    // DE ESTA MANERA PUEDO DEVOLVER DATOS QUE QUIERO DE LA BASE DE DATOS (RESPONSE)
    res.send({
      identification,
      email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating employee");
  }
};

export const changePassword = async (req, res) => {
  try {
    const { identification } = req.params;
    const { password } = req.body;
    console.log('CONSOELOG DESDE BACKEND',identification);
    console.log('CONSOLELOG DESDE BACKEDN',password);

    const result = await pool.query(
      "UPDATE Users SET password = (?) WHERE identification = (?)",
      [ password, identification]
    );
    console.log('CONSOLELOG DESDE BACKEND CHANGEPASSWORD',result);
    res.status(200).json({message: "Password updated"});
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user password");
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const identification = String(req.params.identification);
    const result = await pool.query(
      "DELETE FROM Users WHERE identification = (?)",
      [identification]
    );
    console.log(result);
    if (!result.affectedRows)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting employee");
  }
};
